/** @format */

import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
            alt="netflix"
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          <span>Kids</span>
          <FontAwesomeIcon className="icon" icon={faBell} />
          <img
            className="icon"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-movies-netflix-kissing-booth-2-1596718460.jpg?crop=0.5625xw:1xh;center,top&resize=480:*"
            alt="netflix"
          />
          <div className="profile">
            <FontAwesomeIcon className="icon" icon={faCaretDown} />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
