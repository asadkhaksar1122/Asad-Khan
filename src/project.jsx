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
      name: "Password Manager",
      description:
        "Our Password Manager app, built with the MERN stack (MongoDB, Express.js, React, Node.js), securely stores and manages passwords. Users must enter a secret key to view or edit passwords, ensuring authorized access. The intuitive React interface makes password management easy and secure.",
      githubLink: "https://github.com/asadkhaksar1122/Password-Manager",
      imageurl: "./navbaricon/logo.png",
    },
    {
      name: "Task Reminder",
      description:
        'This is a MERN stack task reminder application that leverages MongoDB with Mongoose for the backend, Express for the server-side framework, React for the frontend, and Node.js for the runtime environment. Tasks can be added, edited, and deleted, with the ability to mark them as done using a "done" key for user reference.',
      githubLink: "https://github.com/asadkhaksar1122/Task-Reminder",
      imageurl: "./navbaricon/taskreminder.webp",
    },
    {
      name: "I-Notebook",
      description:
        "Welcome to our modern platform built with MERN stack for efficient user-specific note management. Enjoy seamless storage, deletion, and editing upon login, with a focus on simplicity and security. Benefit from a sleek user interface for easy organization of ideas, tasks, and reminders. Trust us for a secure and intuitive note-taking experience that prioritizes productivity and organization",
      githubLink: "https://github.com/asadkhaksar1122/I-notebook",
      imageurl: "./navbaricon/inotebook.avif",
    },
    {
      name: "Coding Quiz",
      description:
        "The coding quiz app in React utilizes useReducer for managing complex state logic efficiently. By dispatching actions based on user interactions, handling language quizzes becomes organized and predictable. This leads to a maintainable codebase and improves user experience while navigating quizzes.",
      githubLink: "https://github.com/asadkhaksar1122/Coding-quiz",
      imageurl: "./navbaricon/quiz.png",
      livelink: "https://asadkhaksar1122.github.io/Coding-quiz/",
    },
    {
      name: "Simon Game",
      description:
        "Experience the classic Simon Game brought to life with HTML, CSS, and JavaScript. Test your memory and reflexes as you follow and repeat the pattern of lights and sounds. Have fun challenging yourself with this exciting electronic game!",
      githubLink: "https://github.com/asadkhaksar1122/simon-game",
      imageurl: "./navbaricon/simon.jpg",
      livelink: "https://asadkhaksar1122.github.io/simon-game/",
    },
    {
      name: "Keeper App",
      description:
        'I have developed a note-taking application called "Keeper App" which is built using React. The application features SweetAlert for enhanced alert notifications.',
      githubLink: "https://github.com/asadkhaksar1122/Textutils",
      imageurl: "./navbaricon/keeper.svg",
      livelink: "https://asadkhaksar1122.github.io/Keeper-App/",
    },
    {
      name: "Note app",
      description:
        "I have developed a note-taking application using HTML, CSS, and JavaScript. This application leverages the browser's local storage to store and manage notes.",
      githubLink: "https://github.com/asadkhaksar1122/Notes-app",
      imageurl: "./navbaricon/notes.png",
      livelink: "https://asadkhaksar1122.github.io/Notes-app/",
    },
    {
      name: "Emoji wikipedia",
      description:
        "I have developed a web application using React components that serves as an emoji encyclopedia",
      githubLink: "https://github.com/asadkhaksar1122/emoji-wikipedia",
      imageurl: "./navbaricon/emoji.jpeg",
      livelink: "https://asadkhaksar1122.github.io/emoji-wikipedia/",
    },
    {
      name: "Other projects",
      description:
        "I have a lot of projects in my GitHub Account please visit and look there",
      githubLink: "https://github.com/asadkhaksar1122",
      imageurl: "./navbaricon/otherproject.png",
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
