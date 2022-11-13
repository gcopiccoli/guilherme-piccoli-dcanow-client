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
              <span className="landing__title-highlight">
                Dollar-Cost Averaging
              </span>{" "}
              strategy in one single place
            </h1>
          </div>
          <div className="landing__image"></div>
          <ul className="landing__list">
            <li className="landing__items">A hub for your DCA investments</li>
            <li className="landing__items">Portfolio screening</li>
            <li className="landing__items">Dynamic investment distribution</li>
            <li className="landing__items">Learn about DCA strategy</li>
          </ul>
          <div className="landing__button-box">
            <Link to="/signin">
              <div className="landing__button">Get started</div>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LandingPage;
