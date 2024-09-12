import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Solid icon
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Brand icon
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ offset: 0, duration: 600, mirror: true });
function Onecontact(props) {
  return (
    <div className="maincontact all" data-aos="fade-left">
      <div className="firstcontact">
        <h2>{props.name}</h2>
      </div>
      <div className="secondcontact all" data-aos="fade-right">
        <h2>
          <span style={{ fontWeight: "400" }}>Contact:</span>
          {props.contactno}
        </h2>
      </div>
      <div className="thirdcontact all" data-aos="zoom-in-down">
        <h2>
          <a href={props.link} target="_blank" rel="noreferrer">
            {" "}
          <img src={`${props.icon}`} alt="" srcset="" />
          </a>
        </h2>
        <p >Click on button to contact me</p>
      </div>
    </div>
  );
}
export default function Contact() {
  return (
    <div className="maincontact">
      <div className="contact">
        <a name="contact">
          {" "}
          <h1 style={{ color: "black !important" }}>
            <FontAwesomeIcon
              style={{ color: "black" }}
              fade
              icon={faAddressBook}
            />
            &nbsp;Contact
          </h1>
        </a>
        <Onecontact
          name="Whatsapp"
          contactno="+923114948262"
          icon={
            "https://res.cloudinary.com/diinrpqko/image/upload/v1726114472/whatsapp_oqb9pd.png"
          }
          link="https://wa.me/923114948262"
        />
        <Onecontact
          name="Gmail"
          contactno="Asadkhaksar1122@gmail.com"
          icon={
            "https://res.cloudinary.com/diinrpqko/image/upload/v1726114472/gmail_cgthvz.png"
          }
          link="mailto:asadkhaksar1122@gmail.com"
        />
        <Onecontact
          name="Linkedin"
          contactno="Asad Khan"
          icon={
            "https://res.cloudinary.com/diinrpqko/image/upload/v1726114472/linkedin_ozusit.png"
          }
          link="https://www.linkedin.com/in/asad-khan-5101b6316"
        />
        <Onecontact
          name="Facebook"
          contactno="Asad Khan"
          icon={
            "https://res.cloudinary.com/diinrpqko/image/upload/v1726114472/facebook_kbumpy.png"
          }
          link="https://www.facebook.com/asadkhaksar1122?mibextid=ZbWKwL"
        />
      </div>
    </div>
  );
}
