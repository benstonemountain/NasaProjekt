import { useState } from "react";
import SpaceObjectCard from "./SpaceObjectCard";
import "./SpaceObjectCardlist.css";

const SpaceObjectCardlist = ({ spaceObjects }) => {
 

  return (
    <>
    
      <div className="object-list-container">
        {spaceObjects.map((spaceObject, index) => {
          return <SpaceObjectCard spaceObject={spaceObject} index={index} />;
        })}
      </div>
    </>
  );
};

export default SpaceObjectCardlist;
