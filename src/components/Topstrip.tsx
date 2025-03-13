import React from "react";
import Style from "./Topstrip.module.scss";

const TopStrip: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <ul>
          <li>ADMISSION OPEN FOR BATCH OF 2025-26</li>
          <li>ADMISSION OPEN FOR BATCH OF 2025-26</li>
          <li>ADMISSION OPEN FOR BATCH OF 2025-26</li>
        </ul>
      </div>
    </div>
  );
};

export default TopStrip;
