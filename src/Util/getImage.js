import axios from "axios";


export const getImage = async (setImageFromApi, date, setIsError, setErrMessage) => {
    const key = "W0btOR8pcmLwfRn1cY1zZZaMfczgrvt0hpTKZLq5";

    try {
      let request = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`
      );

      setImageFromApi(request.data);
      setIsError(false);
    } catch (error) {
      setErrMessage(error.response.data.msg);
      setIsError(true);
    }
  };
