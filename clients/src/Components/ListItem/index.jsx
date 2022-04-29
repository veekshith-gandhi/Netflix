/** @format */

import "./listitem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faPlayCircle,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API, token } from "../../api";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const AuthStr = "Bearer ".concat(token);
      try {
        const { data } = await axios.get(`${API}/movie/find/${item}`, {
          headers: {
            Authorization: AuthStr,
          },
        });
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <>
      <Link to={{ pathname: "/watch" }}>
        <div
          className="listitem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseLeave={() => setIsHovered(false)}
          onMouseEnter={() => setIsHovered(true)}
        >
          <img src={movie.img} alt={movie.imgTitle} />

          {isHovered && (
            <>
              <video controls autoPlay src={movie.video} />
              <div className="iteminfo">
                <div className="itemicon">
                  <FontAwesomeIcon
                    className="itemlisticon"
                    icon={faPlayCircle}
                  />
                  <FontAwesomeIcon className="itemlisticon" icon={faAdd} />
                  <FontAwesomeIcon className="itemlisticon" icon={faThumbsUp} />
                  <FontAwesomeIcon
                    className="itemlisticon"
                    icon={faThumbsDown}
                  />
                </div>
                <div className="itemtimeinfo">
                  <span>1 hr 14 min</span>
                  <span className="limit"> {movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="itemdesc">{movie.desc}</div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default ListItem;
