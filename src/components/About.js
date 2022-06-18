import "./About.scss";
import Button from "./Button/Button";
const cv = require("../images/mbarr-cv.pdf");
const michael = require("../images/michael-portrait.JPG");

export default function About() {
  return (
    <section id="about">
      <h1>About</h1>
      <img src={michael} alt="Michael self portrait" className="about-photo" />
      <p className="about-me">
        My name is Michael and I am a web developer. Nothing makes me happier
        than experimenting with whatever technology is infront of me. From React
        to the Django framework I love making things work.
      </p>
      <Button
        name="Download C.V. (PDF)"
        link={cv}
        download={true}
        buttonClass="download-cv"
      />
    </section>
  );
}
