/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../ListItem";
import "./list.scss";
import { useRef } from "react";
import { useState } from "react";

const List = () => {
  const listRef = useRef();
  const [isSlider, setIsSlider] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  let distance = Math.floor(listRef.current?.getBoundingClientRect()?.x - 50);

  const handleDirection = (direction) => {
    setIsMoved(true);
    if (direction === "left" && isSlider > 1) {
      setIsSlider(isSlider - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && isSlider < 5) {
      setIsSlider(isSlider + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span>Continue to watch</span>
      <div className="wrapper">
        <FontAwesomeIcon
          className="arrow left"
          style={{ display: !isMoved ? "none" : null }}
          icon={faAngleLeft}
          onClick={() => handleDirection("left")}
        />
        <div className="listContainer" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
        </div>
        <FontAwesomeIcon
          className="arrow right"
          onClick={() => handleDirection("right")}
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};
export default List;
