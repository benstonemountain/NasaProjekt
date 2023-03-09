import "./FullCard.style.css";

function FullCard({spaceObject, setVisibility}) {

  const digitFormatter = (anyNum) => {
    if (anyNum.length < 7) {
      return anyNum;
    } else if (anyNum.length >= 7) {
      let firstDigits = anyNum.slice(0, anyNum.length - 6);
      let thousands = anyNum.slice(anyNum.length - 6, anyNum.length - 3);
      let lastThreeDigits = anyNum.slice(anyNum.length - 3, anyNum.length);
      return firstDigits + " " + thousands + " " + lastThreeDigits;
    }
  };

    const distanceFromEarth = Math.trunc(
        spaceObject.close_approach_data[0].miss_distance.kilometers
      ).toString();
      const minDiameter = Number(
        spaceObject.estimated_diameter.kilometers.estimated_diameter_min
      ).toFixed(2);
      const maxDiameter = Number(
        spaceObject.estimated_diameter.kilometers.estimated_diameter_max
      ).toFixed(2);
      const relativeVelocity = Math.trunc(
        spaceObject.close_approach_data[0].relative_velocity.kilometers_per_hour
      );
      const luminance = Math.round(spaceObject.absolute_magnitude_h);
      const isDangerous = spaceObject.is_potentially_hazardous_asteroid ? "IGEN" : "NEM";

     
  return (
<div className="overlay">   
<div className="full-card">
<table className="object-table">
    <tr>
      <td>Földtől mért távolság (km)</td>
      <td>{digitFormatter(distanceFromEarth)}</td>
    </tr>
    <tr>
      <td>Átmérő (km, min-max)</td>
      <td>{`${minDiameter} - ${maxDiameter}`}</td>
    </tr>
    <tr>
      <td>Relatív sebesség (km/h)</td>
      <td>{relativeVelocity}</td>
    </tr>
    <tr>
      <td>Abszolút fényesség (M)</td>
      <td>{luminance}</td>
    </tr>
    <tr>
      <td>Potenciálisan veszélyes a Földre?</td>
      <td>{isDangerous}</td>
    </tr>
  </table>
  <span  className="back-btn" onClick={ () => {
    setVisibility(false);
  }}>X</span>
</div>
</div>

  );
}

export default FullCard;