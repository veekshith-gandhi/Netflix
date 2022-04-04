/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../ListItem";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <span>Continue to watch</span>
      <div className="wrapper">
        <FontAwesomeIcon icon={faAngleLeft} />
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};
export default List;
