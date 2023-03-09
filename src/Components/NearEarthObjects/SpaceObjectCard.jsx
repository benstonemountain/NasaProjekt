import "./SpaceObjectCard.css";
import { useState } from "react";
import FullCard from "./FullCard";

const SpaceObjectCard = ({ spaceObject, index }) => {
  console.log("Ez mikor fut le? (card)");
  console.log(spaceObject);
  const [visibility, setVisibility] = useState(false);

  function handleClick() {
    setVisibility(true);
  }

  return (
    <>
    <div className="content-header">
      <h3>Név: {spaceObject.name}</h3>
      <p className="more-or-less" onClick={handleClick}>
        Több
      </p>
    </div>

{
  visibility &&
  <FullCard spaceObject={spaceObject} setVisibility = {setVisibility}/>
}

</>
  )
}
export default SpaceObjectCard;
