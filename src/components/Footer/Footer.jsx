import "./Footer.scss";
import homeIcon from "../../assets/icons/home-icon.svg";
import portfolioIcon from "../../assets/icons/wallet-icon.svg";
import aboutIcon from "../../assets/icons/globe-icon.svg";
import moreIcon from "../../assets/icons/more-icon.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <footer className="footer">
      <section className="footer__container">
        <article
          className={
            splitLocation[1] === "home"
              ? "footer__wrapper--active"
              : "footer__wrapper"
          }
        >
          <Link className="footer__link" to="/home">
            <img
              src={homeIcon}
              alt="Home icon"
              className="footer__icon footer__icon-home"
            />
            <p className="footer__icon-title">Home</p>
          </Link>
        </article>
        <article
          className={
            splitLocation[1] === ":userId"
              ? "footer__wrapper--active"
              : "footer__wrapper"
          }
        >
          <Link className="footer__link" to="/:userId/positions/all">
            <img
              src={portfolioIcon}
              alt="Wallet icon"
              className="footer__icon footer__icon-portfolio"
            />
            <p className="footer__icon-title">Portfolio</p>
          </Link>
        </article>
        <article className="footer__wrapper-dca">
          <Link className="footer__link" to="/:userId/dca/all">
            <p className="footer__icon-title">
              <span className="footer__logo-bold">DCA</span>
              <br />
              <span className="footer__logo-italic">now</span>
            </p>
          </Link>
        </article>
        <article
          className={
            splitLocation[1] === "about"
              ? "footer__wrapper--active"
              : "footer__wrapper"
          }
        >
          <Link className="footer__link" to="/about">
            <img
              src={aboutIcon}
              alt="About icon"
              className="footer__icon footer__icon-about"
            />
            <p className="footer__icon-title">About</p>
          </Link>
        </article>
        <article
          className={
            splitLocation[1] === "more"
              ? "footer__wrapper--active"
              : "footer__wrapper"
          }
        >
          <Link className="footer__link" to="/more">
            <img
              src={moreIcon}
              alt="More icon"
              className="footer__icon footer__icon-more"
            />
            <p className="footer__icon-title">More</p>
          </Link>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
