import "./Hero.scss";
export default function Hero() {
  return (
    <section id="hero">
      <div className="logo-wrapper">
        <h1 className="hero--title">
          Ser<span>Path</span>
        </h1>
        <div className="hero--blue-box"></div>
        <p className="hero--sub">
          Web <br /> Development
        </p>
      </div>
    </section>
  );
}
