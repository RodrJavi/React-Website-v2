import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ProjectCard = ({ pic, title, body, source, site, alt }) => {
  return (
    <div className="">
      <img src={pic} alt={alt} className="" />
      <div>
        <div className="">
          <Link href={site} target="_blank" className="">
            {title}
          </Link>
          <p className="">{body}</p>
        </div>
        <div className="">
          <Button text={"Go to the site!"} link={site} newTab />
          <Button text={"Go to the code!"} inverse link={site} newTab />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
