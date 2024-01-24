import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "../components/Button/Button";

export default function Root() {
  return (
    <div className="root-body">
      <Header />
      <main>
        <img
          className="hero-image"
          src="https://placehold.co/400x300"
          alt="Picture of Javier Rodriguez"
        />
        <section className="root-buttons">
          <Button text={"See my work"} link={"/projects"} />
          <Button text={"Get in Touch"} inverse link={"/contact"} />
        </section>
        <div className="root-icons">
          <FaGithub size={50} />
          <FaLinkedin size={50} />
          <FaInstagram size={50} />
        </div>
      </main>
    </div>
  );
}
