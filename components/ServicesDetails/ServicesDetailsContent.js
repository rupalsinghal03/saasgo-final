import React from "react";
import styles from "@/components/ServicesDetails/ServicesDetailsContent.module.css";
import ServicesSidebar from "./ServicesSidebar/ServicesSidebar";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const ServicesDetailsContent = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <ServicesSidebar />
            </div>

            <div className="col-lg-8 col-md-12">
              <div className={styles.servicesDetailsContent}>
                <div className={styles.img}>
                  <img
                    src="/images/services-details/services-1.svg"
                    alt="image"
                  />
                </div>
                <span>iOS All Service lists</span>

                <h1>Why iOS apps service is top option?</h1>

                <p>
                  The finest option for developing safe, scalable digital
                  solutions is iOS application development. Our iOS software
                  developers make sure that your applications are designed to
                  propel your company into the future.
                </p>
                <p>
                  Depending on their features, iOS applications are better
                  suited for a particular kind of business. Our team of iOS app
                  developers assists companies in determining whether iOS is the
                  right platform for them and which tech stack best meets their
                  requirements.
                </p>
                <p>
                  The designs of iOS applications are renowned for being
                  memorable and captivating. We match your brand with the
                  expectations of your target audience for the Apple
                  environment. Our iOS app design team specialises in making
                  memorable user experiences.
                </p>
                <p>
                  Our iPhone application developers have experience developing
                  extensible, cutting-edge iOS solutions. We specialise in
                  providing unique iOS apps to both established businesses and
                  startups throughout the world.
                </p>
                <p>
                  The layout of our iPhone mobile development approach places
                  security and performance first. Through the use of a
                  combination of manual and AI-driven automated testing methods,
                  we ensure that your application is bug-free and hack-proof.
                </p>

                <h3>Get touch have any question ?</h3>
                <p>
                  It is a long established fact that a reader will be distr
                  acted bioiiy the end gail readable content of a page when
                  looking.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
