import React from "react";
import Link from "next/link";
import styles from "@/components/HomeThree/AboutCompany/AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <>
      <div className={styles.aboutArea}>
        <div className="container ptb-100">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.aboutImage}>
                <img src="/images/about/about-2.png" alt="image" />
                <div className={styles.imageShape1}>
                  <img src="/images/about/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={styles.aboutContent}>
                <span>ABOUT OUR COMPANY</span>
                {/* <h3>We formed the IT service in 2005 based on client requirements</h3> */}
                <h3>Who wre we ?</h3>
                <p>
                  SaasGO is an online platform that provides wide range of
                  professional services to Startups / Companies / Individuals.
                  We take full responsibility for the projects of client to get
                  the work done at low cost while meeting the deadline.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                    <div className={styles.contentBox}>
                      <h4>We Offer</h4>
                      <p>
                        We offer end-to-end mobile and web development services,
                        from Concept Validation and Business Analysis, to
                        Development and Launching.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                    <div className={styles.contentBox}>
                      <h4>Our vision</h4>
                      <p>
                        We create inspiring digital products as solutions for
                        Individuals, SMEs, and Large Companies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.aboutBtn}>
                  <Link href="/about">
                    <a className="default-btn rounded-pill">Learn more</a>
                  </Link>
                  <a href="tel:8506884052" className={styles.phoneNumber}>
                    <i className="ri-phone-fill"></i> +91 85068 84052
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
