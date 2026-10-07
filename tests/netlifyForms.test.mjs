import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { FORM_FIELDS, submitNetlifyForm } from "../src/lib/netlifyForms.js";

const production = { hostname: "elevateglobal.org", development: false };
const formData = (name = "contact") => {
  const data = new FormData();
  data.set("form-name", name);
  data.set("email", "test+forms@example.com");
  data.set("message", "Tennis & tutoring = opportunity\nThank you!");
  data.set("category", "Donate gear");
  return data;
};

test("posts URL-encoded data to Netlify and preserves special characters and category", async () => {
  const data = formData();
  data.set("unrelated", "must not be sent");
  await submitNetlifyForm(data, {
    ...production,
    fetchImpl: async (url, options) => {
      assert.equal(url, "/netlify-forms.html");
      assert.equal(options.method, "POST");
      assert.equal(options.headers["Content-Type"], "application/x-www-form-urlencoded");
      const payload = new URLSearchParams(options.body);
      assert.equal(payload.get("form-name"), "contact");
      assert.equal(payload.get("email"), data.get("email"));
      assert.equal(payload.get("category"), "Donate gear");
      assert.equal(payload.get("message"), data.get("message"));
      assert.equal(payload.get("bot-field"), "");
      assert.equal(payload.has("unrelated"), false);
      assert.ok(options.signal instanceof AbortSignal);
      return new Response("Thank you!", { status: 200 });
    },
  });
});

test("never sends data from localhost or a Vite development build", async () => {
  for (const options of [
    { hostname: "localhost" }, { hostname: "127.0.0.1" }, { hostname: "[::1]" },
    { hostname: "preview.localhost" }, { hostname: "192.168.1.2", development: true },
  ]) {
    await assert.rejects(submitNetlifyForm(formData(), {
      ...production, ...options,
      fetchImpl: () => assert.fail("Preview must not transmit form data"),
    }), /preview cannot send/);
  }
});

test("HTTP failures and network errors reject without modifying entered data", async () => {
  for (const fetchImpl of [
    async () => new Response("Not found", { status: 404 }),
    async () => new Response("Server error", { status: 500 }),
    async () => { throw new TypeError("Offline"); },
    async () => { throw new DOMException("Timed out", "TimeoutError"); },
  ]) {
    const data = formData();
    const before = [...data.entries()];
    await assert.rejects(submitNetlifyForm(data, { ...production, fetchImpl }), /couldn't confirm/);
    assert.deepEqual([...data.entries()], before);
  }
});

test("does not treat a static HTML response or SPA fallback as a saved submission", async () => {
  for (const html of [
    await readFile(new URL("../public/netlify-forms.html", import.meta.url), "utf8"),
    '<html><body><div id="root"></div></body></html>',
  ]) {
    await assert.rejects(submitNetlifyForm(formData(), {
      ...production, fetchImpl: async () => new Response(html),
    }), /couldn't confirm/);
  }
});

test("all four form definitions contain every submitted field including the honeypot", async () => {
  const html = await readFile(new URL("../public/netlify-forms.html", import.meta.url), "utf8");
  const forms = [...html.matchAll(/<form\b([^>]*)>([\s\S]*?)<\/form>/g)];
  assert.equal(forms.length, 4);
  for (const [name, fields] of Object.entries(FORM_FIELDS)) {
    const form = forms.find(([, attributes]) => attributes.includes(`name="${name}"`));
    assert.ok(form, `${name} definition is missing`);
    assert.match(form[1], /data-netlify="true"/);
    const actual = [...form[2].matchAll(/\bname="([^"]+)"/g)].map(m => m[1]);
    assert.deepEqual(actual.sort(), [...fields, "form-name", "bot-field"].sort());
  }
});

test("newsletter captures only the requested email and form metadata", async () => {
  await submitNetlifyForm(formData("newsletter"), {
    ...production,
    fetchImpl: async (_, options) => {
      assert.deepEqual([...new URLSearchParams(options.body).keys()].sort(), ["bot-field", "email", "form-name"]);
      return new Response("Thank you!");
    },
  });
});

test("unknown form names cannot trigger a request", async () => {
  await assert.rejects(submitNetlifyForm(formData("unknown"), {
    ...production, fetchImpl: () => assert.fail("Unexpected request"),
  }), /unavailable/);
});
