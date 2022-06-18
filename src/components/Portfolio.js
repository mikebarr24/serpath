import "./Portfolio.scss";
import Card from "./PortfolioCard/PortfolioCard.js";
import { portfolioProjects } from "../portfolioData";

export default function Portfolio() {
  const cardElements = portfolioProjects().map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        title={item.title}
        techUsed={item.techUsed}
        description={item.description}
        challenges={item.challenges}
        github={item.githubLink}
        liveSite={item.liveSite}
      />
    );
  });
  return (
    <section id="portfolio">
      <h1 className="section-title">Portfolio</h1>
      {cardElements}
    </section>
  );
}
