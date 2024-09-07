import React from "react";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ offset: 0, duration: 600, mirror: true });
function Oneproject(props) {
  return (
    <div class="card" data-aos="fade-down-right">
      <div class="heading">
        <h1>{props.name}</h1>
      </div>
      <div class="imagediv">
        <img src={props.image} alt={props.name} srcset="" />
        <div class="overlay">
          <div class="description">
            <p>{props.description}</p>
          </div>
          <div class="btn">
            <button>
              <a href={props.link} target="_blank">
                <FontAwesomeIcon icon={faGithub} /> &nbsp; Github
              </a>
            </button>
            {props.livelink && (
              <button className="livelink">
                <a href={props.livelink} target="_blank">
                  Live Link
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Project() {
  let projects = [
    {
      name: "Task Reminder",
      description:
        'This is a MERN stack task reminder application that leverages MongoDB with Mongoose for the backend, Express for the server-side framework, React for the frontend, and Node.js for the runtime environment. Tasks can be added, edited, and deleted, with the ability to mark them as done using a "done" key for user reference.',
      githubLink: "https://github.com/asadkhaksar1122/Task-Reminder",
      imageurl:
        "https://res.cloudinary.com/diinrpqko/image/upload/v1725606493/taskreminder_n4z9c4.webp",
    },
    {
      name: "I-Notebook",
      description:
        "Welcome to our modern platform built with MERN stack for efficient user-specific note management. Enjoy seamless storage, deletion, and editing upon login, with a focus on simplicity and security. Benefit from a sleek user interface for easy organization of ideas, tasks, and reminders. Trust us for a secure and intuitive note-taking experience that prioritizes productivity and organization",
      githubLink: "https://github.com/asadkhaksar1122/I-notebook",
      imageurl:
        "https://res.cloudinary.com/diinrpqko/image/upload/v1725606492/inotebook_svzzmp.avif",
    },

    {
      name: "Coding Quiz",
      description:
        "The coding quiz app in React utilizes useReducer for managing complex state logic efficiently. By dispatching actions based on user interactions, handling language quizzes becomes organized and predictable. This leads to a maintainable codebase and improves user experience while navigating quizzes.",
      githubLink: "https://github.com/asadkhaksar1122/Coding-quiz",
      imageurl:
        "https://res.cloudinary.com/diinrpqko/image/upload/v1725606493/quiz_lsjzvg.png",
      livelink: "https://asadkhaksar1122.github.io/Coding-quiz/",
    },
    {
      name: "Simon Game",
      description:
        "Experience the classic Simon Game brought to life with HTML, CSS, and JavaScript. Test your memory and reflexes as you follow and repeat the pattern of lights and sounds. Have fun challenging yourself with this exciting electronic game!",
      githubLink: "https://github.com/asadkhaksar1122/simon-game",
      imageurl:
        "https://res.cloudinary.com/diinrpqko/image/upload/v1725606493/simon_t6u99t.jpg",
         livelink: "https://asadkhaksar1122.github.io/simon-game/",
    },
    {
      name: "TextUtils",
      description:
        "Using React, I have developed a TextUtils application that generates a comprehensive description of its features, including text transformation, analysis, cleaning, formatting, and clipboard operations, making it an essential tool for efficient text management.",
      githubLink: "https://github.com/asadkhaksar1122/Textutils",
      imageurl:
        "https://res.cloudinary.com/diinrpqko/image/upload/v1725606493/texturils_fnfqed.png",
      livelink: "https://asadkhaksar1122.github.io/Textutils/",
    },
    {
      name: "Other projects",
      description:
        "I have a lot of projects in my GitHub Account please visit and look there",
      githubLink: "https://github.com/asadkhaksar1122",
      imageurl:
        "https://res.cloudinary.com/diinrpqko/image/upload/v1725606494/otherproject_edymii.png",
    },
  ];
  return (
    <section className="mainsection">
      <h1 id="projects">
        {" "}
        <FontAwesomeIcon icon={faGithub} fade /> &nbsp; Projects
      </h1>
      <div className="maincard">
        {projects.map((project) => (
          <Oneproject
            name={project.name}
            description={project.description}
            link={project.githubLink}
            image={project.imageurl}
            livelink={project.livelink}
          />
        ))}
      </div>
      
    </section>
  );
}
