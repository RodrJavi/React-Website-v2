import { Link } from "react-router-dom";

export default function Button({ text, inverse, link }) {
  return (
    <Link to={link}>
      <button className={inverse ? "button-inverse" : "button"}>{text}</button>
    </Link>
  );
}
