import { Link } from "react-router-dom";
import "./LandingPage.scss";
const LandingPage = () => {
  return (
    <section className="landing">
      <article className="lading__container">
        <div className="landing__hero">
          <div className="landing__title-box">
            <h1 className="landing__title">
              Have your{" "}
              <span className="landing__title-highlight">DCA strategy</span> in
              one single place
            </h1>
          </div>
          <div className="landing__image"></div>
          <ul className="landing__list">
            <li className="landing__items">A hub for your DCA investments</li>
            <li className="landing__items">Portfolio screening</li>
            <li className="landing__items">Dynamic investment distribution</li>
            <li className="landing__items">Learn about DCA strategy</li>
          </ul>
          <Link to="/sigin">
            <div className="landing__button"></div>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default LandingPage;
