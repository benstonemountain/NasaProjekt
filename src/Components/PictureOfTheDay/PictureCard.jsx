import "./PictureCard.style.css";

const PictureCard = ({ spacePic, setVisibility}) => {
  console.log(spacePic);

  return (
   
    <div className="picture-overlay">
         <div className="picture-back-btn"
          onClick={() => {
            setVisibility(false);
          }}
        >
        <p>CLOSE IMAGE</p>
          <p>X</p> 
        </div>
      <div className="picture-container">
        <h2 className="picture-card-title">{spacePic.title}</h2>

        <div className="picture-card-container">
          <img
            className="picture-card-image"
            src={spacePic.hdurl}
            alt={spacePic.title}
          />
        </div>
        <div className="picture-card-explanation">
          <p>{spacePic.explanation}</p>
        </div>
     
      </div>
      </div>
  
  );
};

export default PictureCard;
