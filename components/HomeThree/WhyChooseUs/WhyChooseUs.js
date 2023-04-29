import React from "react";
import styles from "@/components/HomeThree/WhyChooseUs/WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <>
      <div className={styles.chooseUsArea}>
        <div className="container ptb-100">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.chooseUsContent}>
                <span>WHY CHOOSE US</span>
                <h3>
                  Any IT related work solution can be easily found from us
                </h3>
                <p>
                  We provide the best support on industry level to make your
                  product reach the heights you dreamed
                </p>

                <div className={styles.chooseInnerContent}>
                  {/* <div className={styles.icon}>
                    <i className="flaticon-technical-support-1"></i>
                  </div> */}
                  <h4>Wide Skill Set</h4>
                  <ul className={styles.list}>
                    <li>
                      We have verified and trained experts in different service
                      categories.
                    </li>
                    <li>
                      No need of hiring employees of particular skill for small
                      features in project.
                    </li>
                  </ul>
                </div>

                <div className={styles.chooseInnerContent}>
                  {/* <div className={styles.icon}>
                    <i className="flaticon-laptop"></i>
                  </div> */}
                  <h4>100% Reliability</h4>
                  <ul className={styles.list}>
                    <li>
                      SaasGO provides on time service delivery , with the proper
                      satisfaction of the client.
                    </li>
                    <li>Gives easy access to required changes in project.</li>
                  </ul>
                </div>
                <div className={styles.chooseInnerContent}>
                  {/* <div className={styles.icon}>
                    <i className="flaticon-laptop"></i>
                  </div> */}
                  <h4>Full Ownership</h4>
                  <ul className={styles.list}>
                    <li>
                      Assigned project expert will be whole time available for
                      doubts and queries.
                    </li>
                    <li>
                      Time to time updates will be provided for full
                      transparency.
                    </li>
                  </ul>
                </div>
                <div className={styles.chooseInnerContent}>
                  {/* <div className={styles.icon}>
                    <i className="flaticon-laptop"></i>
                  </div> */}
                  <h4>Pocket Friendly</h4>
                  <ul className={styles.list}>
                    <li>
                      Outsourced project cost will be lesser than your current
                      development & execution cost.
                    </li>
                    <li>
                      We customise our services according your Plan & Budget.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={styles.chooseUsImage}>
                <img src="/images/choose/choose-3.png" alt="Choose Image" />
                <div className={styles.imageShape1}>
                  <img src="/images/choose/shape-1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
