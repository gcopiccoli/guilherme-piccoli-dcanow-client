import "./AboutPage.scss";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="about">
      <article className="about__container">
        <h1 className="about__title">About Dollar-Cost Averaging</h1>
        <div className="about__card">
          <h2 className="about__subtitle">Intro</h2>
          <p className="about__copy">
            Most of time investing ca be daunting and challenging. Majority of
            outsider and big part of investors still take in consideration the
            mindset of beating and time the market to be successful. But this is
            not alway the case.
          </p>
          <p className="about__copy">
            If we have a long term view, there's simple staregy that can easiely
            be successfull regarless ups and downs of the market. That's
            Dollar-Cost Averagin (DCA).
          </p>
          <p className="about__copy">
            DCA can be a useful strategy for begginer and experienced investors
            who aim to have disciplined and committed investment approach, by
            investing equal amount of money at regular intervals. It allows them
            to reduce not only their average cost per share, but also the
            overall price volatitlity.
          </p>
          <h2 className="about__subtitle">Definition</h2>
          <p className="about__quote">
            "Dollar-cost averaging involves investing the same amount of money
            in a target security at regular intervals over a certain period of
            time, regardless of price. By using dollar-cost averaging, investors
            may lower their average cost per share and reduce the impact of
            volatility on the their portfolios."
          </p>
          <h4 className="about__reference">
            Adam Heyes -{" "}
            <Link to="https://www.investopedia.com/terms/d/dollarcostaveraging.asp">
              <span className="about__link">investopedia.com</span>
            </Link>
          </h4>
          <h2 className="about__subtitle">
            Dollar-Cost Averaging vs. Timing the Market
          </h2>
          <p className="about__copy">
            Alternatively to DCA, another approach by investors, and a common
            fallacy from outsiders of the unique successful strategy, is Time
            the Market. It requires long hours of dedicatoin over exetensive
            analisys and close market monitoring and most of time can be
            impossible to predict the next low. To illustrate, the chart below
            demonstrate an overall return following both strategies betwwen
            1975-2014:
          </p>
          <div className="about__image"></div>
          <p className="about__copy">
            Although, buying the dip of the market outperforms DCA, there are
            periods where DCA follows closely the same trend and over time
            there's minimal gap in the final gains.
          </p>
          <h2 className="about__subtitle">Benefits</h2>
          <ul className="about__copy">
            <li className="about__text">
              <span className="about__icon">💸 </span>It allows investors to
              build wealth in the long term by reinforcing the practice of
              commitment to its regular purchases.
            </li>
            <li className="about__text">
              <span className="about__icon">💸 </span>It prevents investors from
              behavioral impulses and biases, by not having to time the market.
            </li>
            <li className="about__text">
              <span className="about__icon">💸 </span>It can help to prevent the
              volatility of prices and optimise te average cost per share, by
              buying more shares at lower price.
            </li>
            <li className="about__text">
              <span className="about__icon">💸 </span>It minimise the impact and
              consequences of having to trying to time the market or investing a
              lump sum at the wrong time.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
