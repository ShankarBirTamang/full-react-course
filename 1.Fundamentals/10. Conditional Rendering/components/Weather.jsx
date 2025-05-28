const Weather = ({temperature}) => {

  // If the temperature is below 15, display: "It's cold outside!"
  // If the temperature is between 15 and 25, display: "It's nice outside!"
  // If the temperature is above 25, display: "It's hot outside!"

  if (temperature < 15) {
    return <div>It's cold outside!</div>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <div>It's nice outside!</div>;
  } else if (temperature > 25) {
    return <div>It's hot outside!</div>;
  }
};

export default Weather;
