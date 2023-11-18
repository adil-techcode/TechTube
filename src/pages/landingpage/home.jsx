import React from "react";
import Header from "../../layout/header/header";
import styles from "./homey.module.css";
import Svgherosection from "../../components/svg/svgherosection";
import { Link } from "react-router-dom";
import Videosvg from "../../components/svg/videosvg";

const Home = () => {
  return (
    <div>
      <Header />
  
     {/* Hero Section */}

      <div className="container-fluid">
        <div className="row">
          <div className={`col-12 col-md-6 p-4 ${styles.heroSectionP1}`}>
            <h6>Discover the Ultimate Online Learning Hub</h6>
            <h1>Curated Selection of Premier Online Courses</h1>
            <h6 className="text-muted" >
              Elevate your skills with top-notch courses on the best platforms
            </h6>
            <button type="button" class="btn btn-success">  <Link className="text-decoration-none text-white " to={"/courses"}  >   Get Started </Link> </button>
          </div>
          <div className={`col-12 col-md-6  ${styles.heroSectionP2} `}>
            <div className={`${styles.heroSectionSvg} `}>
              <Svgherosection />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mt-5 ">
  <div className="row justify-content-center ">
    <div className={` col-10 col-sm-4 col-md-4 col-lg-2  m-3 shadow   ${styles.statsbox}`}>
      <div className={`${styles.statsSectionsvg}`}>
        <Videosvg />
      </div>
      <p className="text-muted fw-bold mt-2 mx-3" >100+  <br /> Courses</p>
    </div>
    <div className={`col-10 col-sm-4 col-md-4 col-lg-2 m-3 shadow   ${styles.statsbox}`}>
      <div className={`${styles.statsSectionsvg}`}>
        <Videosvg />
      </div>
      <p className="text-muted fw-bold mt-2  mx-3" >Expert  <br /> Mentors</p>
    </div>
    <div className={`col-10 col-sm-4 col-md-4 col-lg-2 m-3 shadow  ${styles.statsbox}`}>
      <div className={`${styles.statsSectionsvg}`}>
        <Videosvg />
      </div>
      <p className="text-muted fw-bold mt-2  mx-3" >High-Quality <br /> Videos  </p>
    </div>
    <div className={`col-10 col-sm-4 col-md-4 col-lg-2 m-3 shadow  ${styles.statsbox}`}>
      <div className={`${styles.statsSectionsvg}`}>
        <Videosvg />
      </div>
      <p className="text-muted fw-bold mt-2 mx-3" >24/7 <br /> Support </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
