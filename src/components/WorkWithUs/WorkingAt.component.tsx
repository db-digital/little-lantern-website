import React from "react";
import styles from "./WorkingAt.component.module.scss";
import ClosePeople from "../../assets/images/work-with-close-up-people.png";
import HandIcon from "../../assets/images/work-hand-up-icon.png";

const WorkingAtComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          working at <br />
          little lantern
        </h2>
        <div className={styles.description}>
          Little Lantern is an equal opportunity employer. We celebrate
          diversity and are committed to creating an inclusive environment for
          all employees.
        </div>
        <div className={styles.bannerBox}>
          <div className={styles.bannerImg}>
            <img src={ClosePeople} alt="" />
          </div>
          <div className={styles.bannerContent}>
            <div className={styles.box}>
              <div className={styles.iconImg}>
                <img src={HandIcon} alt="" />
              </div>
              <div className={styles.itemContent}>
                <span>Impactful Work</span>
                <p>
                  Be part of a team that makes a real difference in the lives of
                  young learners, fostering curiosity, creativity, and a love
                  for learning.
                </p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.iconImg}>
                <img src={HandIcon} alt="" />
              </div>
              <div className={styles.itemContent}>
                <span>Impactful Work</span>
                <p>
                  Be part of a team that makes a real difference in the lives of
                  young learners, fostering curiosity, creativity, and a love
                  for learning.
                </p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.iconImg}>
                <img src={HandIcon} alt="" />
              </div>
              <div className={styles.itemContent}>
                <span>Impactful Work</span>
                <p>
                  Be part of a team that makes a real difference in the lives of
                  young learners, fostering curiosity, creativity, and a love
                  for learning.
                </p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.iconImg}>
                <img src={HandIcon} alt="" />
              </div>
              <div className={styles.itemContent}>
                <span>Impactful Work</span>
                <p>
                  Be part of a team that makes a real difference in the lives of
                  young learners, fostering curiosity, creativity, and a love
                  for learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingAtComponent;
