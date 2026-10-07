import { useRef, useState } from "react";
import { submitNetlifyForm } from "../lib/netlifyForms";

export default function useFormSubmission(successMessage) {
  const pending = useRef(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function submit(event, onSuccess) {
    event.preventDefault();
    if (pending.current) return;
    const data = new FormData(event.currentTarget);
    pending.current = true;
    setStatus({ type: "sending", message: "Sending…" });

    try {
      await submitNetlifyForm(data);
      onSuccess();
      setStatus({ type: "success", message: successMessage });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      pending.current = false;
    }
  }

  return { submit, status, isSubmitting: status.type === "sending" };
}
