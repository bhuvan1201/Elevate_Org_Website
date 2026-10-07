export const FORM_FIELDS = {
  contact: ["name", "email", "category", "subject", "message"],
  newsletter: ["email"],
  "gear-donation": ["name", "email", "phone", "gearType", "quantity", "condition", "preference", "message"],
  volunteer: ["name", "email", "phone", "interest", "availability", "message"],
};

export async function submitNetlifyForm(formData, {
  fetchImpl = globalThis.fetch,
  hostname = globalThis.location?.hostname || "localhost",
  development = import.meta.env?.DEV ?? false,
} = {}) {
  const formName = formData.get("form-name");
  const fields = FORM_FIELDS[formName];
  if (!fields) throw new Error("This form is unavailable. Please try again later.");

  if (development || /^(localhost|127(?:\.\d+){3}|\[?::1\]?|0\.0\.0\.0)$/.test(hostname) || hostname.endsWith(".localhost")) {
    throw new Error("This preview cannot send forms. Please use the live website to submit.");
  }

  const body = new URLSearchParams({ "form-name": formName });
  for (const field of [...fields, "bot-field"]) {
    body.set(field, String(formData.get(field) ?? ""));
  }

  try {
    const response = await fetchImpl("/netlify-forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error("Request rejected");

    // Static servers can return HTML with a 200 status without saving anything.
    const html = await response.text();
    if (html.includes("elevate-form-definitions") || /id=["']root["']/.test(html)) {
      throw new Error("Form service unavailable");
    }
  } catch {
    throw new Error("We couldn't confirm your submission. Your information is still here. Please try again later.");
  }
}
