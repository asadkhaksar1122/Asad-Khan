import React from "react";
import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faDatabase,
  faC,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ offset: 0, duration: 600, mirror: true });
function Onescript(props) {
  return (
    <div className="matric onescript" data-aos={props.animation}>
      <h2>{props.name}</h2>

      <p>
        School <strong>{props.school}</strong>
      </p>
      <p>
        Location<strong>{props.location}</strong>
      </p>
      <p>
        Completion Year<strong>{props.year}</strong>
      </p>
      <p>
        Specialization<strong>{props.special}</strong>
      </p>
      <p>
        Achievements<strong>{props.achievement}</strong>
      </p>
      <a href={props.link} target="_blank" rel="noreferrer">
        Look Certificate
      </a>
    </div>
  );
}
function Language(props) {
  return (
    <div className="languages">
      <h3 className="heading" data-aos={props.animation}>
        {" "}
        <span className="icon">
          <FontAwesomeIcon icon={props.icon} /> &nbsp;
        </span>
        <span className="languagename">{props.name}</span>
      </h3>
    </div>
  );
}
export default function Education() {
  return (
    <div className="education">
      <a name="education">
        {" "}
        <h1 data-aos="fade-right">
          {" "}
          <FontAwesomeIcon icon={faGraduationCap} fade />
          &nbsp;Education
        </h1>
      </a>
      <div className="educationdetail">
        <Onescript
          name="Matric"
          school="The Guardian English Medium School"
          location="Zaida Swabi KPK Pakistan"
          year="June 2019"
          special="Science"
          achievement="I have got the 934 marks out of 1100"
          link="https://drive.google.com/file/d/1zrMs1XMOxyrqDRAUbTG38fwDl2CPpg2K/view?usp=drivesdk"
          animation="flip-right"
        />
        <Onescript
          name="FSC (Computer Science)"
          school="The Orbit College Thandkoi"
          location="Thandkoi Swabi KPK Pakistan"
          year="June 2023"
          special="Computer Science"
          achievement="I have got the 922 marks out of 1100"
          link="https://drive.google.com/file/d/1zpEFIbkEoi74ojZ1U2YqH023arn6nqEt/view?usp=drivesdk"
          animation="flip-left"
        />
      </div>
      <div className="programming">
        <h2>
          {" "}
          <FontAwesomeIcon icon={faCode} />
          &nbsp;Programing language
        </h2>
        <Language name="HTML" icon={faHtml5} animation="fade-right" />
        <Language name="CSS" icon={faCss3} animation="fade-left" />
        <Language name="JAVASCRIPT" icon={faJs} animation="fade-right" />
        <Language name="NODE JS" icon={faJs} animation="fade-left" />
        <Language name="EXPRESS" icon={faJs} animation="fade-right" />
        <Language name="REACT JS" icon={faReact} animation="fade-left" />
        <Language name="MY SQL" icon={faDatabase} animation="fade-right" />
        <Language name="MONGO DB" icon={faDatabase} animation="fade-left" />
        <Language name="C++" icon={faC} animation="fade-right" />
        <Language name="PYTHON" icon={faPython} animation="fade-left" />
      </div>
    </div>
  );
}
