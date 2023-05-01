import React from "react";
import Link from "next/link";

import styles from "@/components/ServicesDetails/ServicesSidebar/ServicesSidebar.module.css";

const ServicesSidebar = () => {
  return (
    <>
      <div className={styles.widgetArea}>
        <div className={`${styles.widget} ${styles.widgetServices}`}>
          <h3 className={styles.widgetTitle}>All Services</h3>

          <ul className={styles.servicesList}>
            <li>
              <Link href="/services-details">
                <a className={styles.active}>
                  iOS All Service lists
                  <i className="ri-arrow-right-s-line"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services-details">
                <a>
                  UX/UI Design <i className="ri-arrow-right-s-line"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services-details">
                <a>
                  Frontend Development <i className="ri-arrow-right-s-line"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services-details">
                <a>
                  Backend Development <i className="ri-arrow-right-s-line"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services-details">
                <a>
                  API Integration
                  <i className="ri-arrow-right-s-line"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services-details">
                <a>
                  Others Development <i className="ri-arrow-right-s-line"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.widget} ${styles.widgetContact}`}>
          <div className={styles.discussWithUs}>
            <img src="/images/discuss-with-us.svg" alt="image" />
            <Link href="/contact" activeClassName="active">
              <a className="default-btn">Discuss With Us +</a>
            </Link>
          </div>
        </div>
        <div className={`${styles.widget} ${styles.widgetContact}`}>
          <h3 className={styles.widgetTitle}>Contact us for any services</h3>

          <ul className={styles.contactList}>
            <li>
              <span>Address : </span>413 XYZ North Delhi 110007, India
            </li>
            <li>
              <span>Phone : </span>
              <a href="tel:+91 8506884052">+91 85068 84052</a>
            </li>
            <li>
              <span>Email : </span>
              <a href="mailto:hello@biza.com">contact@saasgo.in</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServicesSidebar;
