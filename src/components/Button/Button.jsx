import { Link } from "react-router-dom";

export default function Button({ text, inverse, link, newTab }) {
  return (
    <Link to={link} target={newTab ? "_blank" : "_self"}>
      <button className={inverse ? "button-inverse" : "button"}>{text}</button>
    </Link>
  );
}
