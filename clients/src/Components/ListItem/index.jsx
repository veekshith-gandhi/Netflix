/** @format */

import "./listitem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faPlayCircle,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "http://www.youtube.com/embed/JW5meKfy3fY?autoplay=1";

  return (
    <div
      className="listitem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <img
        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUD92whdwqVnEPh5fMHOBL5vext3SdEnKXR03ZDZ7on7yhm0es-61Q_70kKhas_PtfHMDD49bJJ4F3w015XiAFW7H9cDUzEDl8TFSKPAHWhImqoatBUPOMxuj2N.jpg?r=1f7"
        alt="title "
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="iteminfo">
            <div className="itemicon">
              <FontAwesomeIcon className="itemlisticon" icon={faPlayCircle} />
              <FontAwesomeIcon className="itemlisticon" icon={faAdd} />
              <FontAwesomeIcon className="itemlisticon" icon={faThumbsUp} />
              <FontAwesomeIcon className="itemlisticon" icon={faThumbsDown} />
            </div>
            <div className="itemtimeinfo">
              <span>1 hr 14 min</span>
              <span className="limit"> +16</span>
              <span>1999</span>
            </div>
            <div className="itemdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              voluptatem accusantium necessitatibus recusandae rerum laudantium
              vero porro?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
