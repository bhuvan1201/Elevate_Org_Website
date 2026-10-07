import { useId } from "react";
import useFormSubmission from "../hooks/useFormSubmission";
import FormFeedback, { Honeypot } from "./FormFeedback";

const inputClass = "mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 bg-white";

export default function ContactForm() {
  const statusId = useId();
  const { submit, status, isSubmitting } = useFormSubmission("Thanks! We received your message and will get back to you soon.");

  return (
    <form
      name="contact"
      method="POST"
      action="/netlify-forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      aria-describedby={statusId}
      onSubmit={(event) => {
        const form = event.currentTarget;
        submit(event, () => form.reset());
      }}
    >
      <fieldset disabled={isSubmitting} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <Honeypot />
        <label className="block">
          <span className="text-sm text-slate-700">Name</span>
          <input name="name" autoComplete="name" required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm text-slate-700">Email</span>
          <input name="email" type="email" autoComplete="email" required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm text-slate-700">Contact Category</span>
          <select name="category" required defaultValue="" className={inputClass}>
            <option value="">Select a category</option>
            <option>Donate gear</option>
            <option>Volunteer</option>
            <option>Partner</option>
            <option>Sponsor</option>
            <option>Media / speaking request</option>
            <option>General question</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-slate-700">Subject</span>
          <input name="subject" required className={inputClass} />
        </label>
        <label className="block">
          <span className="text-sm text-slate-700">Message</span>
          <textarea name="message" required rows={5} className={inputClass} />
        </label>
        <button type="submit" disabled={isSubmitting} className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60">
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </fieldset>
      <FormFeedback id={statusId} status={status} />
    </form>
  );
}
