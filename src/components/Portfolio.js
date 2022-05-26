import "./Portfolio.scss";
import Card from "./PortfolioCard/PortfolioCard.js";
import portfolioData from "../portfolioData";

export default function Portfolio() {
  const cardElements = portfolioData.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        title={item.title}
        techUsed={item.techUsed}
        description={item.description}
        challenges={item.challenges}
        github={item.githubLink}
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
