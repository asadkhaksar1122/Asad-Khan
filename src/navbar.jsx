import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faUser,
  faGraduationCap,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
AOS.init({ offset: 120, duration: 500 });
function Navbar(props) {
 
 let [toggle, settoggle] = useState("");
  function checkfunc(input) {
    let hamburger = document.getElementById("hamburger");
    if (input.checked) {
      hamburger.style.display = "none";
      settoggle("toggle");
    } else {
      hamburger.style.display = "block";
      settoggle("");
    }
  }
   document.addEventListener("scroll", function (e) {
     let hamburger = document.querySelector(".hamburger");
     let education = document.querySelector(".education");

     if (window.scrollY >= education.offsetTop) {
       hamburger.style.color = "black";
     } else {
       hamburger.style.color = "white";
     }
   });

  function changehandle(e) {
    let input = e.target;
    checkfunc(input);
  }
  function switchoff() {
    let check = document.getElementById("check");
    console.log("the profile was clicked");
    check.checked = false;
    checkfunc(check);
  }

  return (
    <nav>
      <div className="checkbox">
        <input type="checkbox" id="check" onChange={changehandle} />
      </div>
      <label htmlFor="check">
        <div className="hamburger" id="hamburger" >
          <FontAwesomeIcon icon={faBars} flip />
        </div>
      </label>
      <div className={`mainnav ${toggle}`}>
        <label htmlFor="check">
          <div className="cross">
            <span>
              {" "}
              <FontAwesomeIcon icon={faXmark} shake />
            </span>
          </div>
        </label>
        <div className="logo">
          <img src="picture.jpg" alt="" srcset="" />
          <p>Asad Khan</p>
        </div>
        <div className="list">
          <div className="firstitem  item">
            <a href="#profile" onClick={switchoff}>
              {" "}
              <FontAwesomeIcon icon={faUser} beatFade /> &nbsp; Profile
            </a>
          </div>
          <div className="firstitem item">
            <a href="#education" onClick={switchoff}>
              <FontAwesomeIcon icon={faGraduationCap} beatFade /> &nbsp;
              Education
            </a>
          </div>
          <div className="firstitem item">
            <a href="#contact" onClick={switchoff}>
              <FontAwesomeIcon icon={faAddressBook} beatFade /> &nbsp; Contact
            </a>
          </div>
          <div className="firstitem item">
            <a href="#projects" onClick={switchoff}>
              <FontAwesomeIcon icon={faGithub} beatFade /> &nbsp; Github Project
            </a>
          </div>
        </div>
        <div className="socialicon">
          <span>
            <a
              href="https://wa.me/923114948262"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} beat />
            </a>
          </span>
          <span>
            <a
              href="mailto:asadkhaksar1122@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} beat />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/asadkhaksar1122"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} beat />
            </a>
          </span>
          <span>
            <a href="faLinkedin" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} beat />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
