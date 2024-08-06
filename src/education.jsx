import React from "react";
import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faDatabase,
  faC,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
function Onescript(props) {
  return (
    <div className="matric onescript">
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
      <a href={props.link} target="_blank">
        Look Certificate
      </a>
    </div>
  );
}
function Language(props) {
  return (
    <div className="languages">
      <h3 className="heading">
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
        <h1>
          {" "}
          <FontAwesomeIcon icon={faGraduationCap} />
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
          link="https://drive.google.com/file/d/1fiAh0ryeA8a6Xgqd4180fsrONpeLBWob/view?usp=drivesdk"
        />
        <Onescript
          name="FSC (Computer Science)"
          school="The Orbit College Thandkoi"
          location="Thandkoi Swabi KPK Pakistan"
          year="June 2023"
          special="Computer Science"
          achievement="I have got the 922 marks out of 1100"
          link="https://drive.google.com/file/d/1fiDnkfGjTaZAR27O7_DgtShqCcmRvTJz/view?usp=drivesdk"
        />
      </div>
      <div className="programming">
        <h2>
          {" "}
          <FontAwesomeIcon icon={faCode} />
          &nbsp;Programing language
        </h2>
        <Language name="HTML" icon={faHtml5} />
        <Language name="CSS" icon={faCss3} />
        <Language name="JAVASCRIPT" icon={faJs} />
        <Language name="NODE JS" icon={faJs} />
        <Language name="EXPRESS" icon={faJs} />
        <Language name="REACT JS" icon={faReact} />
        <Language name="MY SQL" icon={faDatabase} />
        <Language name="MONGO DB" icon={faDatabase} />
        <Language name="C++" icon={faC} />
        <Language name="PYTHON" icon={faPython} />
      </div>
    </div>
  );
}
