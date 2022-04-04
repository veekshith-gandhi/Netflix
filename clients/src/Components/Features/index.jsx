/** @format */

import "./features.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

const Features = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
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
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-movies-netflix-kissing-booth-2-1596718460.jpg?crop=0.5625xw:1xh;center,top&resize=480:*"
        alt="netflix"
      />
      <div className="info">
        <img
          src="https://w7.pngwing.com/pngs/613/889/png-transparent-mitch-buchannon-paramount-s-film-poster-movie-titles-text-poster-logo.png"
          alt="title"
        />
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sunt
          eaque corporis debitis, ab officia minus qui explicabo voluptatibus
        </span>
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
