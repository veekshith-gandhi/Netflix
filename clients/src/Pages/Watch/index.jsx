/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className="watch-container">
      <Link to="/" className="link">
        <div className="nav-back">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Home</span>
        </div>
      </Link>
      <div className="video-element">
        <video
          controls
          autoPlay
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
        />
      </div>
    </div>
  );
};

export default Watch;
