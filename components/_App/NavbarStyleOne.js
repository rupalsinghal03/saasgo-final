// Navbar Component Style File Path: styles/navbar/navbar.css

import React, { useState } from "react";
import Link from "@/utils/ActiveLink";

const NavbarStyleOne = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-navbar bg-f3f8ff">
          <div className="">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/logo_svg.svg" alt="Site Logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 1</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 2</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Home Demo - 3</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item megamenu">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Pages <i className="ri-arrow-down-s-line"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/about" activeClassName="active">
                          <a onClick={toggleNavbar}>About</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing" activeClassName="active">
                          <a onClick={toggleNavbar}>Pricing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team" activeClassName="active">
                          <a onClick={toggleNavbar}>Team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gallery" activeClassName="active">
                          <a onClick={toggleNavbar}>Gallery</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointment" activeClassName="active">
                          <a onClick={toggleNavbar}>Appointment</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/testimonials" activeClassName="active">
                          <a onClick={toggleNavbar}>Testimonials</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq" activeClassName="active">
                          <a onClick={toggleNavbar}>FAQ</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="#">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="dropdown-toggle nav-link"
                          >
                            Career <i className="ri-arrow-right-s-line"></i>
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/career" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Career
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/career-details"
                              activeClassName="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                Career Details
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="#">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="dropdown-toggle nav-link"
                          >
                            User Pages <i className="ri-arrow-right-s-line"></i>
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/sign-in" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Sign In
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/sign-up" activeClassName="active">
                              <a onClick={toggleNavbar} className="nav-link">
                                Sign Up
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/forgot-password"
                              activeClassName="active"
                            >
                              <a onClick={toggleNavbar} className="nav-link">
                                Forgot Password
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/terms-of-service" activeClassName="active">
                          <a onClick={toggleNavbar}>Terms of Service</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy" activeClassName="active">
                          <a onClick={toggleNavbar}>Privacy Policy</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/coming-soon" activeClassName="active">
                          <a onClick={toggleNavbar}>Coming Soon</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link href="/services">
                      <a
                        onClick={toggleNavbar}
                        className="dropdown-toggle nav-link"
                      >
                        Services
                        {/* <i className="ri-arrow-down-s-line"></i> */}
                      </a>
                    </Link>
                    <section className="dropdown-menu">
                      <div className="row">
                        <div className="col-lg-7 services-item">
                          <ul className="">
                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-1.svg"
                                    alt=""
                                  />
                                  iOS
                                </a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-2.svg"
                                    alt=""
                                  />
                                  Cloud Service
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-3.svg"
                                    alt=""
                                  />
                                  Blockchain
                                </a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-4.svg"
                                    alt=""
                                  />
                                  Android
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-5.svg"
                                    alt=""
                                  />
                                  Software development
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-6.svg"
                                    alt=""
                                  />
                                  DevOps
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-7.svg"
                                    alt=""
                                  />
                                  Flutter
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-8.svg"
                                    alt=""
                                  />
                                  UX/UI Design
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-9.svg"
                                    alt=""
                                  />
                                  Business Intelligence
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-10.svg"
                                    alt=""
                                  />
                                  React Native
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-11.svg"
                                    alt=""
                                  />
                                  AI/ML
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-12.svg"
                                    alt=""
                                  />
                                  Data Science Analytics
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-5 services-connect">
                          <div className="services-contact">
                            <img
                              src="/images/services/service-26.png"
                              className="services-contact-img"
                              alt=""
                            />
                            <h5>Needed an IT Service?</h5>
                            <p>
                              We are here to get a solution for the work causing
                              you trouble. You just need to call us.
                            </p>
                            <li>
                              <a href="/contact" className="default-btn">
                                Contact Now
                              </a>
                            </li>
                            <p>
                              Welcome to saasGO! Please let us know how we can
                              assist you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="nav-item">
                    <Link href="/products">
                      <a onClick={toggleNavbar} className="nav-link">
                        Products
                        {/* <i className="ri-arrow-down-s-line"></i> */}
                      </a>
                    </Link>
                    <section className="dropdown-menu">
                      <div className="row">
                        <div className="col-lg-7 services-item">
                          <ul className="">
                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/services/services-5.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/product/products-1.svg"
                                    alt=""
                                  />
                                  Hospital management software
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <p><b>Know more about</b> <a href="/products.js">Our Products</a></p>
                          </div>
                        </div>
                        <div className="col-lg-5 services-connect">
                          <div className="services-contact">
                            <img
                              src="/images/product/product-1.png"
                              className="services-contact-img product-img"
                              alt=""
                            />
                            <h5>Needed an IT Service?</h5>
                            <p>
                              We are here to get a solution for the work causing
                              you trouble. You just need to call us.
                            </p>
                            <li>
                              <a href="/contact" className="default-btn">
                                Contact Now
                              </a>
                            </li>
                            <p>
                              Welcome to saasGO! Please let us know how we can
                              assist you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="nav-item">
                    <Link href="/industry">
                      <a onClick={toggleNavbar} className="nav-link">
                        Industry
                        {/* <i className="ri-arrow-down-s-line"></i> */}
                      </a>
                    </Link>
                    <section className="dropdown-menu">
                      <div className="row">
                        <div className="col-lg-7 services-item">
                          <ul className="">
                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-1.svg"
                                    alt=""
                                  />
                                  On Demand
                                </a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-2.svg"
                                    alt=""
                                  />
                                  Travel
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="#" activeClassName="active">
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-3.svg"
                                    alt=""
                                  />
                                  Education
                                </a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-4.svg"
                                    alt=""
                                  />
                                  Healthcare
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-5.svg"
                                    alt=""
                                  />
                                  Insurance
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-6.svg"
                                    alt=""
                                  />
                                  News
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-7.svg"
                                    alt=""
                                  />
                                  Entertainment
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-8.svg"
                                    alt=""
                                  />
                                  Ecommerce
                                </a>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                href="#"
                                activeClassName="active"
                              >
                                <a onClick={toggleNavbar} className="nav-link">
                                  <img
                                    src="/images/industry/industry-9.svg"
                                    alt=""
                                  />
                                  Real Estate
                                </a>
                              </Link>
                            </li>
                          </ul>
                          <div>
                            <p><b>Know more about</b> <a href="/industry.js">Industry we serve</a></p>
                          </div>  
                        </div>
                        <div className="col-lg-5 services-connect">
                          <div className="services-contact">
                            <img
                              src="/images/industry/industies-1.svg"
                              className="services-contact-img"
                              alt=""
                            />
                            <h5>Needed an IT Service?</h5>
                            <p>
                              We are here to get a solution for the work causing
                              you trouble. You just need to call us.
                            </p>
                            <li>
                              <a href="/contact" className="default-btn">
                                Contact Now
                              </a>
                            </li>
                            <p>
                              Welcome to saasGO! Please let us know how we can
                              assist you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="nav-item">
                    <Link href="/portfolio">
                      <a onClick={toggleNavbar} className="nav-link">
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link href="/career" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Careers
                      </a>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        About Us
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact Us
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>

              <div className="others-options d-flex align-items-center">
                {/* <div className="option-item">
                  <div className="search-box" onClick={handleToggleSearchModal}>
                    <i className="ri-search-line"></i>
                  </div>
                </div> */}
                <div className="option-item">
                  <a href="tel:8506884052" className="default-btn rounded-pill">
                    +91 85068 84052
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="ri-search-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default NavbarStyleOne;
