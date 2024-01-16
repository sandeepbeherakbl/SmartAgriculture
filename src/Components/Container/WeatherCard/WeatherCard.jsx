import "./WeatherCard.css";
import Wind from "../../../assets/wind.png";
import Humidity from "../../../assets/humidity.png";
import Rain from "../../../assets/rain.png";
import { dataRef } from "../Firebase";
import { useEffect, useState } from "react";

export const WeatherCard = () => {
  const [valueIs] = useState("agriculture");
  const [data, setData] = useState();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  useEffect(() => {
    dataRef
      .ref()
      .child(valueIs)
      .on("value", (fullData) => {
        const getData = fullData.val();
        setData(getData);
      });
  }, [dataRef]);

  let Night = data?.night;
  
  const mainDivBackgroundColor = Night === 1 ? '#5C6BC0' : '';
  const circle1BackgroundColor = Night === 1 ? 'rgb(255, 255, 255)' : '';
  const circle2BackgroundColor = Night === 1 ? 'rgba(112, 188, 255, 0.7)' : '';
  const circle3BackgroundColor = Night === 1 ? 'rgba(108, 147, 255, 0.7)' : '';

  return (
    <div className="main-div-container" style={{ backgroundColor: mainDivBackgroundColor }}>
      <div className="container">
        <div className="background">
        <div className="Circle1" style={{ backgroundColor: circle1BackgroundColor }}></div>
          <div className="Circle2" style={{ backgroundColor: circle2BackgroundColor }}></div>
          <div className="Circle3" style={{ backgroundColor: circle3BackgroundColor }}></div>
          <div className="content">
            <h1 className="Condition">
              <i className="material-icons sun"></i> Temp
            </h1>
            <h1 className="Temp">
              {data?.air_temperature}
              <span id="F">&#8451;</span>
            </h1>
            <h1 className="Time">{formattedTime}</h1>
            <h1 className="Location">
              <i className="material-icons locationIcon"></i> Bhubaneswar,
              Odisha
            </h1>
          </div>
        </div>
      </div>
      <div className="parameters">
        <div className="wind  parameter-details-container">
          <div className="parameter-title">
            <p>Wind</p>
            <h1>0 km/hr</h1>
          </div>
          <img className="parameter-icons" src={Wind} alt="wind" />
        </div>
        <div className="humid parameter-details-container">
          <div className="parameter-title">
            <p>Humidity</p>
            <h1>{data?.air_humidity}%</h1>
          </div>
          <img className="parameter-icons" src={Humidity} alt="Humidity" />
        </div>
        <div className="rain parameter-details-container">
          <div className="parameter-title">
            <p>Rain</p>
            <h1>4%</h1>
          </div>
          <img className="parameter-icons" src={Rain} alt="Rain" />
        </div>
      </div>
    </div>
  );
};
