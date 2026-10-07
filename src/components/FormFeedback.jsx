export default function FormFeedback({ status, id }) {
  return (
    <p
      id={id}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`mt-3 text-sm ${status.type === "error" ? "text-red-700" : status.type === "success" ? "text-teal-700" : "text-slate-600"}`}
    >
      {status.message}
    </p>
  );
}

export function Honeypot() {
  return (
    <p hidden aria-hidden="true">
      <label>
        Leave this field empty
        <input name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
      </label>
    </p>
  );
}
