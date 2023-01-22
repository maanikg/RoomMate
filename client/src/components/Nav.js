//import whiteLogo from "../images/tinder_logo_white.png";
//import whiteLogo from "../images/drop.png";
//import whiteLogo from "../images/roommatelogo.jpg";
//import whiteLogo from "../images/New Project (39).png";
import whiteLogo from "../images/New Project (41).png";
import colorLogo from "../images/roommate_whitelogo.png";

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (

        <button 
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Login
        </button>
      )}
    </nav>
  );
};
export default Nav;
