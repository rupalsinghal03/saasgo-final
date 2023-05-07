import React from 'react'
import Link from 'next/link'
import styles from '@/components/Common/HowCanWeHelp/HowCanWeHelp.module.css'

const whyChooseUs = () => {
    return (
        <>
            <div className={styles.technologyArea}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.technologyContent}>
                                <span>WHY CHOOSE US</span>
                                <h3>Any IT related work solution can be easily found from us</h3>
                                <p>SaasGO is an online platform that provides wide range of professional services to Startups /
                                    Companies / Individuals.
                                    We take full responsibility for the projects of
                                    client to get the work done at low cost while
                                    meeting the deadline.</p>

                                <div className={styles.technologyInnerContent}>
                                    <div className={styles.number}>01</div>
                                    <h4>IT solution</h4>
                                    <p>We create inspiring digital products
                                        as solutions for Individuals, SMEs,
                                        and Large Companies.</p>
                                </div>

                                <div className={styles.technologyInnerContent}>
                                    <div className={styles.number}>02</div>
                                    <h4>Technical Support</h4>
                                    <p>We offer end-to-end mobile and
                                        web development services, from
                                        Concept Validation and Business
                                        Analysis, to Development and
                                        Launching.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                        {display ? (
            <OwlCarousel
              className="services-slides owl-carousel owl-theme"
              {...options}
            >
              <div className={`${styles.singleServicesCard} ${styles.bgImg1}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-web-development"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>Web Development</a>
                    </Link>
                  </h3>
                  <p>
                    Our web development services are designed to be flexible and
                    scalable, so you can start small and grow your online
                    presence over time. We use the latest technologies and
                    development methodologies to ensure that your website is
                    fast, secure, and user-friendly.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg5}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-mobile-app"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>App Development</a>
                    </Link>
                  </h3>
                  <p>
                    With our cutting-edge app development services, you can
                    create a mobile app that is fast, secure, and user-friendly.
                    Whether you need an app for iOS, Android, or both, we have
                    the skills and expertise to help you succeed.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg5}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-ux-design"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>UX/UI Design</a>
                    </Link>
                  </h3>
                  <p>
                    We believe that great UX and UI design is a key component of
                    any successful digital product. Our team of experienced
                    designers and developers are passionate about creating
                    designs that not only look great, but also deliver results.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg2}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-product-design"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>Product Development</a>
                    </Link>
                  </h3>
                  <p>
                    Whether you're a startup looking to launch a new product or
                    an established business looking to diversify your product
                    line, we can help you bring your ideas to life. Our product
                    development services are designed to be scalable and
                    adaptable, so we can help you grow your business over time.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg1}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-consulting"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>IT Consultancy</a>
                    </Link>
                  </h3>
                  <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Vivamus magna justo lacinia eget consectetur sed convallis
                    at tellus.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg3}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-technical-support"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>IT Support</a>
                    </Link>
                  </h3>
                  <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Vivamus magna justo lacinia eget consectetur sed convallis
                    at tellus.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg4}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-cyber-security"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>Cyber Security</a>
                    </Link>
                  </h3>
                  <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Vivamus magna justo lacinia eget consectetur sed convallis
                    at tellus.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg2}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-digital-marketing"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Vivamus magna justo lacinia eget consectetur sed convallis
                    at tellus.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>

              <div className={`${styles.singleServicesCard} ${styles.bgImg3}`}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <i className="flaticon-consulting"></i>
                  </div>
                  <h3>
                    <Link href="/services-details">
                      <a>IT Consultancy</a>
                    </Link>
                  </h3>
                  <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                    Vivamus magna justo lacinia eget consectetur sed convallis
                    at tellus.
                  </p>
                  <Link href="/services-details">
                    <a className={styles.servicesBtn}>Learn more</a>
                  </Link>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default whyChooseUs;