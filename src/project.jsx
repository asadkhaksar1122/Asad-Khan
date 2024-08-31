import React from "react";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ offset: 0, duration: 600, mirror: true });
function Oneproject(props) {
  return (
    <>
      <div className="projectname" data-aos="fade-right">
        <h2>{props.name}</h2>
      </div>
      <div className="description" data-aos="fade-left">
        <h2>{props.description}</h2>
      </div>
      <div className="projectlink" data-aos="zoom-out">
        <h2>
          <a href={props.link} target="_blank" rel="noreferrer">
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
      name: "Task Reminder",
      description:
        'This is a MERN stack task reminder application that leverages MongoDB with Mongoose for the backend, Express for the server-side framework, React for the frontend, and Node.js for the runtime environment. Tasks can be added, edited, and deleted, with the ability to mark them as done using a "done" key for user reference.',
      githubLink: "https://github.com/asadkhaksar1122/Task-Reminder",
    },
    {
      name: "I-Notebook",
      description:
        "This is an website to store, delete and edit note of specific user and login . it is made by using MERN technology ",
      githubLink: "https://github.com/asadkhaksar1122/I-notebook",
    },
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
