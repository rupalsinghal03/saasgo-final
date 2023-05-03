import React from "react";
import Link from "next/link";
import styles from "@/components/Common/DropDown/DropDown.module.css";

const DropDown = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  BGImage,
}) => {
  return (
    <>
      <div className={`${styles.dropDownArea}`}>
        <div className={`${styles.dropDownContainer}`}> test</div>
      </div>
    </>
  );
};

export default DropDown;
