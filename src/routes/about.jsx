import NavBar from "../components/NavBar/NavBar";

export default function About() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1 className="page-title">About Me</h1>
      <div className="projects-container">
        <img
          src="https://placehold.co/400x300"
          alt="Picture of Javier Rodriguez"
        />
        <p className="about-body">
          I was introduced to web development in late 2021 and since then have
          had a continuous interest in expanding my skills.
          <br />I quickly completed a frontend certificate with W3 Schools which
          helped me with the fundamentals and more notably just graduated from
          University of Minnesota's coding bootcamp which gave me the
          proficiency and skills to be a fullstack developer.
        </p>
      </div>
    </div>
  );
}
