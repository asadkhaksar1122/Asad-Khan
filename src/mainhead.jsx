import "./mainhead.css";
function Main(props) {
  return (
    <section className="mainfirstsect">
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
            Age : <strong>18 Year</strong>
          </p>
          <p>
            Address : <strong>Mahallah BalarKhel Zaida Swabi</strong>
          </p>
          <p>
            Specialization : <strong>Web Devolpment </strong>
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1fi5G44nfOYKc3ON0-bu0Hj9PJVx8lCRR/view?usp=drivesdk"
          >
            My CV
          </a>
        </div>
      </div>
    </section>
  );
}
export default Main;
