import "./Footer.scss";
import homeIcon from "../../assets/icons/home-icon.svg";
import portfolioIcon from "../../assets/icons/wallet-icon.svg";
import aboutIcon from "../../assets/icons/globe-icon.svg";
import moreIcon from "../../assets/icons/more-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <article className="footer__wrapper">
          <img
            src={homeIcon}
            alt="Home icon"
            className="footer__icon footer__icon-home"
          />
          <p className="footer__icon-title">Home</p>
        </article>
        <article className="footer__wrapper">
          <img
            src={portfolioIcon}
            alt="Wallet icon"
            className="footer__icon footer__icon-portfolio"
          />
          <p className="footer__icon-title">Portfolio</p>
        </article>
        <article className="footer__wrapper-dca">
          <p className="footer__icon-title">
            <span className="footer__logo-bold">DCA</span>
            <br />
            <span className="footer__logo-italic">now</span>
          </p>
        </article>
        <article className="footer__wrapper">
          <img
            src={aboutIcon}
            alt="About icon"
            className="footer__icon footer__icon-about"
          />
          <p className="footer__icon-title">About</p>
        </article>
        <article className="footer__wrapper">
          <img
            src={moreIcon}
            alt="More icon"
            className="footer__icon footer__icon-more"
          />
          <p className="footer__icon-title">More</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
