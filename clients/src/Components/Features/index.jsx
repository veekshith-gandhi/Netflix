/** @format */

import "./features.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { API, token } from "../../api";

const Features = ({ type }) => {
  const [isType, setIsType] = useState("");

  useEffect(() => {
    const getRandomType = async () => {
      const Authstr = "Baerer ".concat(token);
      try {
        const { data } = await axios.get(`${API}/movie/random?type=${type}`, {
          headers: {
            Authorization: Authstr,
          },
        });
        setIsType(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomType();
  }, [type]);
  // console.log(isType);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "Movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option className="ad" value="adventure">
              Adventures
            </option>
            <option value="comedy">Comedys</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="westren">Westren</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
          </select>
        </div>
      )}
      <img src={isType.img} alt="netflix" />
      <div className="info">
        <img src={isType.imgsm} alt="title" />
        <span className="description">{isType.desc}</span>
        <div className="button">
          <button className="play">
            <FontAwesomeIcon icon={faPlay} />
            <span>Play</span>
          </button>
          <button className="more">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
