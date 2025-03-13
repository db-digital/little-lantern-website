import React from "react";
import styles from "./OurSpaceSlider.component.module.scss";
import { Link } from "react-router-dom";

const OurSpaceSliderComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <h2>Our Space</h2>
        <p>
          At Little Lantern, we have created more than just a preschool—we've
          built a home away from home where children feel safe, inspired, and
          excited to learn.
        </p>
        <Link to="/">Explore More</Link>
      </div>
      <div className={styles.rightBox}></div>
    </div>
  );
};

export default OurSpaceSliderComponent;
