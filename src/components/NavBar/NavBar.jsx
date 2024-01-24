import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
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
  );
}
