import React from "react";
import styles from "@/components/Contact/ContactInfo/ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <>
      <div className={styles.contactGetInTouch}>
        <h3>Get in touch</h3>

        <div className={styles.innerBox}>
          <div className={styles.icon}>
            <i className="flaticon-pin"></i>
          </div>
          <span>Address :</span>
          <p>413 XYZ North Delhi 110007, India</p>
        </div>

        <div className={styles.innerBox}>
          <div className={styles.icon}>
            <i className="flaticon-call"></i>
          </div>
          <span>Phone :</span>
          <p>
            <a href="tel:15143125678">+91 85068 84052</a>
          </p>
        </div>

        <div className={styles.innerBox}>
          <div className={styles.icon}>
            <i className="flaticon-email"></i>
          </div>
          <span>Email :</span>
          <p>
            <a href="mailto:hello@biza.com">contact@saasgo.in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
