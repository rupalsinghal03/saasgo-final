import React from "react";
import Link from "next/link";
import styles from "@/components/Common/HowCanWeHelp2/HowCanWeHelp.module.css";

const HowCanWeHelp = () => {
  return (
    <>
      <div className={styles.technologyArea}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className={styles.technologyImage}>
                <img src="/images/technology/technology-2.png" alt="image" />
                <div className={styles.imageShape1}>
                  <img src="/images/technology/shape-1.png" alt="image" />
                </div>
                <div className={styles.contactBtn}>
                  <Link href="/contact">
                    <a className="default-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className={styles.technologyContent}>
                <span>HOW CAN WE HELP YOU?</span>
                <h3>
                  We can help in any way in the field of IT service and
                  technology
                </h3>
                <p>
                  At Saasgo, we take a comprehensive approach to solving IT
                  problems by working closely with our clients to assess their
                  needs, develop a detailed plan of action, implement solutions
                  using the latest tools and technologies, monitor system
                  performance, and evaluate effectiveness to continuously
                  improve and ensure that our clients achieve their technology
                  goals.
                </p>
                <div className={styles.technologyInnerContent}>
                  <div className={styles.number}>01</div>
                  <h4 className="pt-2">Ongoing maintenance and updates</h4>
                  {/* <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Praesent sapien pellentesque nec egestas non nisi.
                  </p> */}
                </div>
                <div className={styles.technologyInnerContent}>
                  <div className={styles.number}>02</div>
                  <h4 className="pt-2">Technical support</h4>
                  {/* <p>
                    Vehicula elementum sed sit amet dui. Praesent sapien massa
                    convallis a ellentesque nec egestas non nisi.
                  </p> */}
                </div>
                <div className={styles.technologyInnerContent}>
                  <div className={styles.number}>03</div>
                  <h4 className="pt-2">
                    Performance monitoring and optimization
                  </h4>
                </div>
                <div className={styles.technologyInnerContent}>
                  <div className={styles.number}>04</div>
                  <h4 className="pt-2">Data backup and recovery</h4>
                </div>
                <div className={styles.technologyInnerContent}>
                  <div className={styles.number}>05</div>
                  <h4 className="pt-2">Security updates</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowCanWeHelp;
