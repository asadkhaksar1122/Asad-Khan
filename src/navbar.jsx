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
import { useRef, useState } from "react";
AOS.init({ offset: 120, duration: 500 });
function Navbar(props) {
 let fordiv=useRef(null)
 let [toggle, settoggle] = useState("");
  function checkfunc(input) {
    let hamburger = document.getElementById("hamburger");
    if (input.checked) {
      hamburger.style.display = "none";
      settoggle("toggle");
      fordiv.current.style.display="block"
    } else {
      hamburger.style.display = "block";
      settoggle("");
       fordiv.current.style.display = "none";
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
        <div className="hamburger" id="hamburger">
          <FontAwesomeIcon icon={faBars} />
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
              <FontAwesomeIcon icon={faUser} /> &nbsp; Profile
            </a>
          </div>
          <div className="firstitem item">
            <a href="#education" onClick={switchoff}>
              <FontAwesomeIcon icon={faGraduationCap} /> &nbsp; Education
            </a>
          </div>
          <div className="firstitem item">
            <a href="#contact" onClick={switchoff}>
              <FontAwesomeIcon icon={faAddressBook} /> &nbsp; Contact
            </a>
          </div>
          <div className="firstitem item">
            <a href="#projects" onClick={switchoff}>
              <FontAwesomeIcon icon={faGithub} /> &nbsp; Github Project
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
              <img src="navbaricon/whatsapp.png" alt="" srcset="" />
            </a>
          </span>
          <span>
            <a
              href="mailto:asadkhaksar1122@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <img src="navbaricon/gmail.png" alt="" srcset="" />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/asadkhaksar1122"
              rel="noreferrer"
              target="_blank"
            >
              <img src="navbaricon/github.png" alt="" srcset="" />
            </a>
          </span>
          <span>
            <a href="faLinkedin" rel="noreferrer" target="_blank">
              <img src="navbaricon/linkedin.png" alt="" srcset="" />
            </a>
          </span>
        </div>
      </div>
      <label htmlFor="check">
        <div className="forother" ref={fordiv}></div>
      </label>
    </nav>
  );
}
export default Navbar;
