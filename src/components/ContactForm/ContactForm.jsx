import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqknoyrn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        id="email"
        type="email"
        name="email"
        className="input-field"
        placeholder="Your email address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="input-field message-input"
        placeholder="I want to know more about your skills!"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" className="button" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
