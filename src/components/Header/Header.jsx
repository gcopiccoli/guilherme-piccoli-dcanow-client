import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__container">
        <div className="header__logo">
          <h3 className="header__logo-icon">
            <span className="header__logo-bold">DCA</span>
            <span className="header__logo-italic">now</span>
          </h3>
        </div>
        <div className="header__avatar">
          <div className="header__avatar-icon"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
