import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "../components/Button/Button";

export default function Root() {
  return (
    <div className="root-body">
      <header>
        <h1 className="header-name">Javier Rodriguez</h1>
        <h2 className="title-text">Web Developer</h2>
        <nav>
          <ul className="navbar">
            <li>
              <Link className="nav-links" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="nav-links" to={"/projects"}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="nav-links" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
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
