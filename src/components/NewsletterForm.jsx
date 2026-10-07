import { useId } from "react";
import useFormSubmission from "../hooks/useFormSubmission";
import FormFeedback, { Honeypot } from "./FormFeedback";

export default function NewsletterForm() {
  const statusId = useId();
  const { submit, status, isSubmitting } = useFormSubmission("Thanks! Your email has been saved for ELEVATE updates.");

  return (
    <form
      name="newsletter"
      method="POST"
      action="/netlify-forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      aria-describedby={statusId}
      className="mt-6"
      onSubmit={(event) => {
        const form = event.currentTarget;
        submit(event, () => form.reset());
      }}
    >
      <fieldset disabled={isSubmitting} className="flex flex-col items-center justify-center gap-2 sm:flex-row">
        <input type="hidden" name="form-name" value="newsletter" />
        <Honeypot />
        <label className="w-full max-w-md">
          <span className="sr-only">Email for ELEVATE updates</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 bg-white"
          />
        </label>
        <button type="submit" disabled={isSubmitting} className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60">
          {isSubmitting ? "Sending…" : "Sign Up"}
        </button>
      </fieldset>
      <FormFeedback id={statusId} status={status} />
    </form>
  );
}
