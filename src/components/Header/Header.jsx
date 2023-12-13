import "./Header.scss";
import logo from "../../assets/netflix-logo-png-2562.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header-container">
      <div className="main-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <div className="header-right-side-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Header;
