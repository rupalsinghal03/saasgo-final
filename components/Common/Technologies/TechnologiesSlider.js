import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import styles from "@/components/Common/Technologies/TechnologiesSlider.module.css";

const options = {
  loop: false,
  nav: false,
  dots: false,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,

  responsive: {
    0: {
      items: 3,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

// Technologies Images
const TechnologiesImages = [
  {
    image: "/images/technologies/technologies-1.svg",
    imageAlt: "Technologies Image",
  },
  {
    image: "/images/technologies/technologies-2.svg",
    imageAlt: "Technologies Image",
  },
  {
    image: "/images/technologies/technologies-3.svg",
    imageAlt: "Technologies Image",
  },
  {
    image: "/images/technologies/technologies-4.svg",
    imageAlt: "Technologies Image",
  },
  {
    image: "/images/technologies/technologies-5.svg",
    imageAlt: "Technologies Image",
  },
  {
    image: "/images/technologies/technologies-6.svg",
    imageAlt: "Technologies Image",
  },
  {
    image: "/images/technologies/technologies-7.svg",
    imageAlt: "Technologies Image",
  },
//   {
//     image: "/images/technologies/technologies-8.png",
//     imageAlt: "Technologies Image",
//   },
];

const TechnologiesSlider = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className={styles.partnerArea}>
        <div className="container">
          <div className={styles.technologiesTitle}>
            <span>TECHNOLOGY WE USE</span>
          </div>

          {display ? (
            <OwlCarousel
              className="partner-slides owl-carousel owl-theme"
              {...options}
            >
              {TechnologiesImages.map((val, i) => (
                <div className={styles.imageBox} key={i}>
                  <img src={val.image} alt={val.imageAlt} />
                </div>
              ))}
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default TechnologiesSlider;
