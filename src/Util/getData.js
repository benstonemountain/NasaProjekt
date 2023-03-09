import axios from "axios";

export const getData = async (setSpaceObjects, date) => {
  let key = "W0btOR8pcmLwfRn1cY1zZZaMfczgrvt0hpTKZLq5";
 
  let request = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${key}`
  );

  let objectArray = request.data.near_earth_objects[date];
  console.log(objectArray);
  setSpaceObjects(objectArray);
 
};
