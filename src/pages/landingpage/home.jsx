import React from "react";
import Header from "../../layout/header/header";
import styles from "./homey.module.css";
import Svgherosection from "../../components/svg/svgherosection";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className={`col-12 col-md-6 p-4 ${styles.heroSectionP1}`}>
            <h6>Discover the Ultimate Online Learning Hub</h6>
            <h1>Curated Selection of Premier Online Courses</h1>
            <h6 className="text-muted" >
              Elevate your skills with top-notch courses on the best platforms
            </h6>
            <button type="button" class="btn btn-success"> Get Started</button>
          </div>
          <div className={`col-12 col-md-6  ${styles.heroSectionP2} `}>
            <div className={`${styles.heroSectionSvg} `}>
              <Svgherosection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
