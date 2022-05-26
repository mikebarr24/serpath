import "./PortfolioCard.scss";
import Button from "../Button/Button.js";

export default function PortfolioCard(props) {
  console.log(props.id);
  if (!props.liveSite) {
    document.querySelectorAll(".live-site-button").forEach((item) => {
      item.classList.add("disabled");
    });
  }
  return (
    <div className="portfolio-card" key={props.id}>
      <h2 className="portfolio-title">{props.title}</h2>
      <div className="tech-used">{props.techUsed}</div>
      <p className="portfolio-description">{props.description}</p>
      <h2 className="portfolio-challenges-title">Challenges</h2>
      <p className="portfolio-challenges">{props.challenges}</p>
      <div className="portfolio-buttons">
        {props.github && <Button name={"GitHub"} link={props.github} />}
        <Button name={"Live Site"} buttonClass="live-site-button" />
      </div>
    </div>
  );
}
