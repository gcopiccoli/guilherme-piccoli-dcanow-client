import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/icons/person-icon.svg";
import "./Header.scss";

const Header = ({ setUserIdFromDb }) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      setUserIdFromDb(0);
      navigate("/land");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header">
      <nav className="header__container">
        <div className="header__logo">
          <Link to="/">
            <h3 className="header__logo-icon">
              <span className="header__logo-bold">DCA</span>
              <span className="header__logo-italic">now</span>
            </h3>
          </Link>
        </div>
        <article className="header__auth">
          {user?.displayName ? (
            <div className="header__login">
              <button onClick={handleSignOut} className="header__text">
                logout
              </button>
              <div className="header__avatar-icon">
                <img
                  src={`${user.photoURL}`}
                  alt="User avatar"
                  className="header__avatar-image"
                  referrerPolicy="no-referrer"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = userImg;
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="header__login">
              <Link to="/signin">
                <p className="header__text">sign in</p>
              </Link>
            </div>
          )}
        </article>
      </nav>
    </header>
  );
};

export default Header;
