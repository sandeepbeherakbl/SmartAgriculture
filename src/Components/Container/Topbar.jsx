import Agriculture from "../../assets/agriculture.png";
import Notification from "../../assets/notification.png";

export const Topbar = () => {
  return (
    <>
      <div className="top-bar">
        <div className="title-container">
          <img className="title-icon" src={Agriculture} alt="Agriculture" />
          <h1>Smart Agriculture</h1>
        </div>
        <div className="notification-icon">
          <img className="notification-img-icon" src={Notification} alt="Notification" />
        </div>
      </div>
    </>
  );
};
