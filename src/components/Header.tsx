import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/dropdown-arrow.svg";
import TopStrip from "./Topstrip";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [arrowActive, setArrowActive] = useState<{ [key: string]: boolean }>(
    {}
  );
  const dropdownRefs = useRef<{ [key: string]: HTMLUListElement | null }>({});
  const handleMouseEnter = (key: string) => {
    const dropdown = dropdownRefs.current[key];
    if (dropdown) {
      const dropdownHeight = dropdown.offsetHeight;
      setHeaderHeight(0 + dropdownHeight);
      setArrowActive((prev) => ({ ...prev, [key]: true }));
    }
  };

  const handleMouseLeave = (key: string) => {
    setHeaderHeight(0);
    setArrowActive((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <>
      <TopStrip />
      <header className={styles.container}>
        <div
          className={styles.dropdownBox}
          style={{
            height: `${headerHeight}px`,
            transition: "height 0.3s ease-in-out",
          }}
        ></div>
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={styles.mainNav}>
            <li
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={() => handleMouseLeave("about")}
            >
              <Link
                to="/about"
                className={location.pathname === "/about" ? styles.active : ""}
              >
                About Us
                <span
                  className={arrowActive["about"] ? styles.rotateArrow : ""}
                >
                  <img src={arrow} alt="Arrow" />
                </span>
              </Link>

              <ul
                className={styles.dropdown}
                ref={(el) => {
                  dropdownRefs.current["about"] = el;
                }}
              >
                <li>
                  <Link to="/mission-philosophy">Mission & Philosophy</Link>
                </li>
                <li>
                  <Link to="/the-lantern-difference">
                    The Lantern Difference
                  </Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/our-space">Our Space</Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("programs")}
              onMouseLeave={() => handleMouseLeave("programs")}
            >
              <Link to="/programs">
                Programs
                <span
                  className={arrowActive["programs"] ? styles.rotateArrow : ""}
                >
                  <img src={arrow} alt="Arrow" />
                </span>
              </Link>
              <ul
                className={styles.dropdown}
                ref={(el) => {
                  dropdownRefs.current["programs"] = el;
                }}
              >
                <li>
                  <Link to="/overview">Overview</Link>
                </li>
                <li>
                  <Link to="/parent-toddler">Parent Toddler</Link>
                </li>
                <li>
                  <Link to="/toddler">Toddler</Link>
                </li>
                <li>
                  <Link to="/playgroup">Playgroup</Link>
                </li>
                <li>
                  <Link to="/nursery">Nursery</Link>
                </li>
                <li>
                  <Link to="/kg1">KG1</Link>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("learning")}
              onMouseLeave={() => handleMouseLeave("learning")}
            >
              <Link to="/learning">
                Learning
                <span
                  className={arrowActive["learning"] ? styles.rotateArrow : ""}
                >
                  <img src={arrow} alt="Arrow" />
                </span>
              </Link>
              <ul
                className={styles.dropdown}
                ref={(el) => {
                  dropdownRefs.current["learning"] = el;
                }}
              >
                <li>
                  <Link to="/pedagogy">Pedagogy</Link>
                </li>
                <li>
                  <Link to="/curriculum">Curriculum</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/activity">Activity hub</Link>
            </li>
          </ul>
          <Link className={styles.applyBtn} to="/">
            Apply Now
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
