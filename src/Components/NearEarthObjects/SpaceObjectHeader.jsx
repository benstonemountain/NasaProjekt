import { getData } from "../../Util/getData";
import { useState } from "react";
import "./SpaceObjectHeader.style.css";
import SpaceObjectCardlist from "./SpaceObjectCardlist";

const SpaceObjectHeader = () => {
  const [dateInputValue, setDateInputValue] = useState("");
  const [spaceObjects, setSpaceObjects] = useState([]);
  console.log("Spaceobjectheader-ben vagyok)");

  return (
    <div className="near-earth-container">
        <h2>Near Earth Objects</h2>
        <div className="near-earth-header-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis minus praesentium neque voluptate excepturi minima harum, dolore beatae fuga facilis amet, ipsum sequi fugit voluptatibus sunt! Nihil ullam asperiores enim!
        </div>
      <div className="near-earth-inputs">
        <label>Choose a date: </label>
        <input
          className="dateInput near-earth-inputs"
          type="date"
          onChange={(event) => {
            setDateInputValue(event.target.value);
          }}
        />
      </div>

      <button
        onClick={() => {
          getData(setSpaceObjects, dateInputValue);
        }}
      >
        Mehet
      </button>
      <SpaceObjectCardlist spaceObjects={spaceObjects} />
    </div>
  );
};

export default SpaceObjectHeader;
