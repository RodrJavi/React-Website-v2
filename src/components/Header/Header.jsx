import "./Header.css";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="header-name">Javier Rodriguez</h1>
      <h2 className="title-text">Web Developer</h2>
      <NavBar />
    </header>
  );
}
