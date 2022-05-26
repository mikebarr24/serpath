import "./About.scss";
const michael = require("../images/michael-pixel.png");
export default function About() {
  return (
    <section id="about">
      <h1>About</h1>
      <img className="about-photo" src={michael} alt="Picture of Michael" />
      <p className="about-me">My name is Michael and I am a web develper. </p>
    </section>
  );
}
