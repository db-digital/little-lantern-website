import React from "react";
import styles from "./Home.module.scss";
import TopBannerComponent from "../components/Homepage/TopBanner.component";
import InfoStripComponent from "../components/Homepage/InfoStrip.component";
import OurSpaceComponent from "../components/Homepage/OurSpace.component";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <TopBannerComponent />
      <InfoStripComponent />
      <OurSpaceComponent />
    </div>
  );
};

export default HomePage;
