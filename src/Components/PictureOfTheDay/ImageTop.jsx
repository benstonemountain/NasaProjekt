import { getImage } from "../../Util/getImage";
import { useState } from "react";
import "./ImageTop.Style.css";
import PictureCard from "./PictureCard";

const ImageTop = () => {
  const [InputValue, setInputValue] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [imageFromApi, setImageFromApi] = useState([]);
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <div className="image-header-container">
        <h2>Picture of The Day</h2>
        <div className="image-header-text">
          Discover the cosmos! Each day a different image or photograph of our
          fascinating universe is featured, along with a brief explanation
          written by a professional astronomer.
        </div>
        <div className="image-inputField">
          <label>Choose a date: </label>
          <input
            className="image-inputField"
            type="date"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>

        <div className="btn">
          <button
            onClick={() => {
              getImage(setImageFromApi, InputValue, setIsError, setErrMessage);
              setVisibility(true);
            }}
          >
            Mehet
          </button>
        </div>
      </div>

      {isError && <h2 className="error-message">{errMessage}</h2>}
      {
        visibility &&
        <PictureCard spacePic={imageFromApi} setVisibility = {setVisibility}/>
      }
    </>
  );
};

export default ImageTop;
