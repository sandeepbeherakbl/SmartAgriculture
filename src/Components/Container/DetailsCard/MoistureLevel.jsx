import { useState, useEffect } from "react";
import "./DetailCard.css";
import { dataRef } from "../Firebase";

const MoistureLevel = () => {
  const [valueIs] = useState("agriculture");
  const [data, setData] = useState();

  useEffect(() => {
    dataRef
      .ref()
      .child(valueIs)
      .on("value", (fullData) => {
        const getData = fullData.val();
        setData(getData);
      });
  }, [dataRef]);

  let moistureValue = data?.moisture_level
  let minMoistureValue = data?.min_moisture_level;
  let minNoramlValue = data?.min_normal_moisture_level;
  let maxNormalValue = data?.max_normal_moisture_level;
  let maxMoistureValue = data?.max_moisture_level;

  const getIndicatorClass = () => {
    if (moistureValue < minMoistureValue || moistureValue > maxMoistureValue) {
      return "SA-MoistureLevel-indicator SA-MoistureLevel-red";
    } else if (
      (moistureValue >= minMoistureValue && moistureValue <= minNoramlValue) ||
      (moistureValue >= maxNormalValue && moistureValue <= maxMoistureValue)
    ) {
      return "SA-MoistureLevel-indicator SA-MoistureLevel-orange";
    } else if (
      moistureValue >= minNoramlValue &&
      moistureValue <= maxNormalValue
    ) {
      return "SA-MoistureLevel-indicator SA-MoistureLevel-green";
    }
  };

  const getMoistureValueColor = () => {
    if (moistureValue < minMoistureValue || moistureValue > maxMoistureValue) {
      return "SA-MoistureLevel-text-red";
    } else if (
      (moistureValue >= minMoistureValue && moistureValue <= minNoramlValue) ||
      (moistureValue >= maxNormalValue && moistureValue <= maxMoistureValue)
    ) {
      return "SA-MoistureLevel-text-orange";
    } else if (
      moistureValue >= minNoramlValue &&
      moistureValue <= maxNormalValue
    ) {
      return "SA-MoistureLevel-text-green";
    }
  };

  const getMoistureLevelText = () => {
    if (moistureValue < minMoistureValue) {
      return "Low";
    } else if (
      moistureValue >= minMoistureValue &&
      moistureValue <= minNoramlValue
    ) {
      return "Medium";
    } else if (
      moistureValue >= minNoramlValue &&
      moistureValue <= maxNormalValue
    ) {
      return "Normal";
    } else if (
      moistureValue >= maxNormalValue &&
      moistureValue <= maxMoistureValue
    ) {
      return "Medium";
    } else if (moistureValue > maxMoistureValue) {
      return "High";
    }
  };

  return (
    <div className="SA-MoistureLevel-container">
      <div className="SA-MoistureLevel-title">Moisture Value</div>
      <div className="SA-MoistureLevel-content">
        <div
          className={`SA-MoistureLevel-moisture-value ${getMoistureValueColor()}`}
        >
          Moisture Value: {moistureValue}
        </div>
        <div className="SA-MoistureLevel-indicatorDiv">
          <div className={getIndicatorClass()}></div>
          <div
            className={`SA-MoistureLevel-moisture-level-text ${getMoistureValueColor()}`}
          >
            {getMoistureLevelText()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoistureLevel;
