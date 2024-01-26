import NavBar from "../components/NavBar/NavBar";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>
        Are you interested? <br /> Say hi!
      </h1>
      <div>Quick contact card</div>
      <ContactForm />
    </div>
  );
}
