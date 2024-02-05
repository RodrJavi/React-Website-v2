import NavBar from "../components/NavBar/NavBar";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>
        Want to get in touch? <br /> Say hi!
      </h1>
      <ContactForm />
    </div>
  );
}
