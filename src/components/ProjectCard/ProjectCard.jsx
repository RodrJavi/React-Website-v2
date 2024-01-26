import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
const ProjectCard = ({ pic, title, body, source, site, alt }) => {
  return (
    <div className="card-container">
      <img src={pic} alt={alt} className="card-image" />
      <div className="card-body-container">
        <div className="card-text-container">
          <Link href={site} target="_blank" className="card-title">
            {title}
          </Link>
          <p className="">{body}</p>
        </div>
        <div className="card-button-container">
          <Button text={"Go to the site!"} link={site} newTab />
          <Button text={"Go to the code!"} inverse link={source} newTab />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
