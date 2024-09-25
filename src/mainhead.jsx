import "./mainhead.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({ offset: 120, duration: 600, mirror: true });
function Main(props) {
  return (
    <section
      className="mainfirstsect"
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="mainfirst">
        <div className="image">
          <img src="picture.jpg" alt="" />
        </div>
        <div className="content">
          <a name="profile" className="profilea">
            {" "}
            <h1>Asad Khan</h1>
          </a>
          <p>
            Age : <strong>19 Year</strong>
          </p>
          <p>
            Address : <strong>Zaida,Swabi,Khyber Pakhtunkhwa,Pakistan </strong>
          </p>
          <p>
            Specialization : <strong>Web Devolpment </strong>
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1wJhUBH6iKJgOsD-KMNzZGbyflUD_P8wD/view?usp=drivesdk"
            rel="noreferrer"
          >
            My CV
          </a>
        </div>
      </div>
    </section>
  );
}
export default Main;
