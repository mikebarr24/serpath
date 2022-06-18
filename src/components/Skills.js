import "./Skills.scss";
import { techList } from "../portfolioData";

export default function Skills() {
  const mySkills = techList().map((item, index) => {
    return (
      <div className="skills-item-container" key={index}>
        <span className="skill-icon">{item.icon}</span>
        {item.description}
      </div>
    );
  });
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skills-container">{mySkills}</div>
    </section>
  );
}
