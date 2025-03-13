import React from "react";
import styles from "./OurSpaceSlider.component.module.scss";
import { Link } from "react-router-dom";
import ourSpaceSlider from "../../assets/images/our-space-slider-01.png";

const OurSpaceSliderComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <h2 className={styles.mainTitle}>Our Space</h2>
        <p>
          At Little Lantern, we have created more than just a preschool—we've
          built a home away from home where children feel safe, inspired, and
          excited to learn.
        </p>
        <Link to="/" className={styles.exploreBtn}>
          Explore More
        </Link>
      </div>
      <div className={styles.rightBox}>
        <img src={ourSpaceSlider} alt="" />
      </div>
    </div>
  );
};

export default OurSpaceSliderComponent;
