import { DetailsCard } from "./Container/DetailsCard/DetailCard";
import { Topbar } from "./Container/Topbar";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="SA-Home-main-div">
        <Topbar />
        <div className="SA-home-details-card">
          <DetailsCard />
        </div>
      </div>
    </>
  );
};
