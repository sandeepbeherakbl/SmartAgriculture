import { WeatherCard } from "../WeatherCard/WeatherCard";
import Moisture from "../../../assets/moisturizing.png";
import PH from "../../../assets/ph-meter.png";
import NPK from "../../../assets/npk.png";
import "./DetailCard.css";
import MoistureLevel from "./MoistureLevel";
import { dataRef } from "../Firebase";
import { useEffect, useState } from "react";
import { MoistureChart } from "./MoistureGrafh";

export const DetailsCard = () => {
  const [valueIs] = useState("agriculture");
  const [data, setData] = useState();
  const [waterPumpBtn, setWaterPumpBtn] = useState(false);
  const [medicine1Btn, setMedicine1Btn] = useState(false);
  const [medicine2Btn, setMedicine2Btn] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      dataRef
        .ref()
        .child(valueIs)
        .on("value", (fullData) => {
          const getData = fullData.val();
          console.log("get data", getData);
          setData(getData);

          // Update button states based on Firebase data
          setWaterPumpBtn(getData?.water_pump || false);
          setMedicine1Btn(getData?.medicine1_pump || false);
          setMedicine2Btn(getData?.medicine2_pump || false);
        });
    };

    fetchData();

    return () => {
      dataRef.ref().child(valueIs).off("value", fetchData);
    };
  }, [dataRef, valueIs]);

  const handleWaterPumpClick = () => {
    setWaterPumpBtn((prevValue) => !prevValue);
    dataRef.ref().child(valueIs).update({ water_pump: !waterPumpBtn });
  };

  const handleMedicine1Click = () => {
    setMedicine1Btn((prevValue) => !prevValue);
    dataRef.ref().child(valueIs).update({ medicine1_pump: !medicine1Btn });
  };

  const handleMedicine2Click = () => {
    setMedicine2Btn((prevValue) => !prevValue);
    dataRef.ref().child(valueIs).update({ medicine2_pump: !medicine2Btn });
  };

  return (
    <>
      <div className="content_wrapper">
        <div className="card_bg">
          <WeatherCard />
          <div className="details-card">
            <div className="card 1st_card">
              <div className="card-content">
                <p className="location">Moisture</p>
                <h1 className="degree">{data?.moisture_level}</h1>
              </div>
              <div className="card-image">
                <img src={Moisture} alt="cloud" border="0" />
              </div>
            </div>
            <div className="card 2nd_card">
              <div className="card-content">
                <p className="location">pH</p>
                <h1 className="degree">18</h1>
              </div>
              <div className="card-image">
                <img src={PH} alt="rain" border="0" />
              </div>
            </div>
            <div className="card 3rd_card">
              <div className="card-content">
                <p className="location">N P K</p>
                <h1 className="degree">3 1 1 </h1>
              </div>
              <div className="card-image">
                <img src={NPK} alt="wind" border="0" />
              </div>
            </div>
          </div>
          <MoistureLevel />
          <div className="card-buttons">
            <button
              className={`details-water-button ${waterPumpBtn ? "active" : ""}`}
              onClick={handleWaterPumpClick}
            >
              Water
              <div
                className={`indicator ${waterPumpBtn ? "green" : "grey"}`}
              ></div>
            </button>
            <button
              className={`details-med1-button ${medicine1Btn ? "active" : ""}`}
              onClick={handleMedicine1Click}
            >
              Medicine
              <div
                className={`indicator ${medicine1Btn ? "green" : "grey"}`}
              ></div>
            </button>
            <button
              className={`details-med2-button ${medicine2Btn ? "active" : ""}`}
              onClick={handleMedicine2Click}
            >
              Fertilizer
              <div
                className={`indicator ${medicine2Btn ? "green" : "grey"}`}
              ></div>
            </button>
          </div>
          <div className="moisture-card-container">
            <MoistureChart />
          </div>
        </div>
      </div>
    </>
  );
};
