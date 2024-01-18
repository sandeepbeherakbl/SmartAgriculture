import Notification from "../../assets/notification.png";
import Field from "../../assets/field.png"

export const Topbar = () => {
  return (
    <>
      <div className="top-bar">
        <div className="title-container">
          <img className="title-icon" src={Field} alt="Field" />
          <h1>CropConnect</h1>
        </div>
        <div className="notification-icon">
          <img className="notification-img-icon" src={Notification} alt="Notification" />
        </div>
      </div>
    </>
  );
};
