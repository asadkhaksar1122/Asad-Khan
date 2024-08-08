import React from "react";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Oneproject(props) {
  return (
    <>
      <div className="projectname">
        <h2>{props.name}</h2>
      </div>
      <div className="description">
        <h2>{props.description}</h2>
      </div>
      <div className="projectlink">
        <h2>
          <a href={props.link} target="_blank">
            <FontAwesomeIcon icon={faGithub} beatFade /> &nbsp;Github Link
          </a>
        </h2>
      </div>
    </>
  );
}
export default function Project() {
  let projects = [
    {
      name: "Attendance Website",
      description:
        "This is an attendance website which mark present when the person click on button and have more features like mark leave by admin see absent students of one month and one week and all the other",
      githubLink: "https://github.com/asadkhaksar1122/Attendence-website-",
    },
    {
      name: "Product project",
      description:
        "In this project customer can make profile and can upload the profile picture change the his name and upload the product details and picture",
      githubLink: "https://github.com/asadkhaksar1122/Product",
    },
    {
      name: "Simon Game",
      description: "This is a Simon Game",
      githubLink: "https://github.com/asadkhaksar1122/simon-game",
    },
    {
      name: "Other projects",
      description:
        "I have a lot of projects in my GitHub Account please visit and look there",
      githubLink: "https://github.com/asadkhaksar1122",
    },
  ];
  return (
    <section className="mainsection">
      <a name="projects">
        <h1>
          {" "}
          <FontAwesomeIcon icon={faGithub} fade /> &nbsp; Projects
        </h1>
      </a>
      {projects.map((project) => (
        <Oneproject
          name={project.name}
          description={project.description}
          link={project.githubLink}
        />
      ))}
    </section>
  );
}
