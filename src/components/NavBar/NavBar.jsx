import "./NavBar.css";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export default function NavBar() {
  return (
    <nav>
      <Link to={"/"}>
        <img
          src="../images/Icon2.png"
          alt="Icon with JR on it"
          className="nav-home-icon"
        />
      </Link>
      <ul className="nav-icons">
        <li>
          <Link className="nav-links" to={"/about"}>
            <IoPersonSharp size={50} />
          </Link>
        </li>
        <li>
          <Link className="nav-links" to={"/projects"}>
            <GoProjectRoadmap size={50} />
          </Link>
        </li>
        <li>
          <Link className="nav-links" to={"/contact"}>
            <MdOutlineEmail size={50} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
