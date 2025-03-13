import React from "react";
import styles from "./About.module.scss"; // SCSS for styling

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      <p>We build amazing static websites using React + TypeScript!</p>
    </div>
  );
};

export default About;
