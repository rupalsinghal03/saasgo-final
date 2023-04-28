import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import styles from "@/components/Common/Services/ServicesSlider.module.css";

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

// Services Images
const ServicesImages = [
  {
    image: "/images/services/service-1.svg",
    imageAlt: "Services Image",
    title: "GRAPHIC DESIGN",
  },
  {
    image: "/images/services/service-2.svg",
    imageAlt: "Services Image",
    title: "WEB DEVELOPMENT",
  },
  {
    image: "/images/services/service-3.svg",
    imageAlt: "Services Image",
    title: "APP DEVELOPMENT",
  },
  {
    image: "/images/services/service-4.svg",
    imageAlt: "Services Image",
    title: "ANIMATION",
  },
  {
    image: "/images/services/service-5.svg",
    imageAlt: "Services Image",
    title: "PRODUCT DESIGN",
  },
  // {
  //   image: "/images/services/services-6.svg",
  //   imageAlt: "Services Image",
  // },
  // {
  //   image: "/images/services/services-7.svg",
  //   imageAlt: "Services Image",
  // },
  //   {
  //     image: "/images/services/services-8.png",
  //     imageAlt: "Services Image",
  //   },
];

const ServicesSlider = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className={styles.partnerArea}>
        <div className="container">
          <div className={styles.servicesTitle}>
            <span>SERVICES WE OFFER</span>
          </div>

          {display ? (
            <OwlCarousel
              className="partner-slides owl-carousel owl-theme"
              {...options}
            >
              {ServicesImages.map((val, i) => (
                <div className={styles.imageBox} key={i}>
                  <img src={val.image} alt={val.imageAlt} />
                  <h6>{val.title}</h6>
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

export default ServicesSlider;
