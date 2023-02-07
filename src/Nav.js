import React from "react";
import "./styles.css";
import "./stylev2.css";

export default function Nav() {
  return (
    <div>
      <div
        id="NAV-HEAD"
        data-animation="over-left"
        className="navbar w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="ad0925c3-4db7-e584-bbd6-dfdc92cee912"
        role="banner"
        data-duration={400}
        data-doc-height={1}
      >
        <div className="nav-container w-container">
          <div className="nav-menu-wrapper">
            <a href="/home" className="brand w-nav-brand">
              <img
                className="vtop-png"
                src="https://vtop2.vitap.ac.in/vtop/assets/img/new%20VIT_AP%20logo.png"
                loading="lazy"
                height="Auto"
                alt=""
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="tablet-menu">
                <a href="#" className="brand-tablet w-nav-brand" />
                <div className="close-menu-button w-nav-button">
                  <img
                    src="https://assets.website-files.com/636e23ecf118df495e7a2aca/636e23edf118df5e017a2b18_x_icon.png"
                    loading="lazy"
                    alt=""
                    className="nav-close-icon"
                  />
                </div>
              </div>
              <div id="SECTION-HOME" className="menu-wrap">
                <div
                  data-hover="true"
                  data-delay={0}
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" />
                    <a href="#">
                      <p className="nav-item-title">Home</p>
                    </a>
                    <div className="home-tab-underline" />
                  </div>
                  {/* <nav class="nav-dropdown-list w-dropdown-list">
                                <div class="nav-dropdown-column">
                                    <div class="nav-dropdown-link-wrapper"><a href="/home" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Home 1</a><a href="/home-2" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Home 2</a>
                                        <a
                                            href="/home-3" aria-current="page" class="nav-dropdown-link w-dropdown-link w--current"><span class="nav-dropdown-link-line"> </span>Home 3</a>
                                    </div>
                                </div>
                            </nav> */}
                </div>
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="ad0925c3-4db7-e584-bbd6-dfdc92cee963"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" />
                    <a href="#SECTION-ABOUT">
                      <p className="nav-item-title">About</p>
                    </a>
                  </div>
                  {/* <nav class="nav-dropdown-list w-dropdown-list">
                                <div class="nav-dropdown-link-wrapper"><a href="/about-us" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>About 1</a><a href="/about-us-2" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>About 2</a>
                                    <a
                                        href="/about-us-3" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>About 3</a>
                                </div>
                            </nav> */}
                </div>
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="a6fdb6f4-b917-73e8-43aa-9aca0856e073"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" />
                    <a href="#SECTION-SCHEDULE">
                      <p className="nav-item-title">Schedule</p>
                    </a>
                  </div>
                  {/* <nav class="nav-dropdown-list w-dropdown-list">
                                <div class="nav-dropdown-column">
                                    <div class="nav-dropdown-link-wrapper"><a href="/works" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 1</a><a href="/works-2" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 2</a>
                                        <a
                                            href="/works-3" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 3</a><a href="/works/saloni-production" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Works Details</a></div>
                                </div>
                            </nav> */}
                </div>
                <div className="nav-dropdown-toggle w-dropdown-toggle">
                  <div className="nav-dropdown-icon w-icon-dropdown-toggle" />
                  <p className="nav-item-title">Ticket</p>
                </div>
                {/* <div data-w-id="fe060b5d-81e8-a354-cdf4-64669c4ad870" class="nav-link-wrapper"><a href="/blog" class="nav-link">Team</a></div> */}
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="ad0925c3-4db7-e584-bbd6-dfdc92cee93f"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" />
                    <p className="nav-item-title">Team</p>
                  </div>
                  <nav className="nav-dropdown-list ticket w-dropdown-list">
                    <div className="nav-dropdown-column">
                      <div className="nav-dropdown-link-wrapper">
                        <a href="#SECTION-COORDI">
                          {" "}
                          <a
                            href="/contact-us"
                            className="nav-dropdown-link w-dropdown-link"
                          >
                            <span className="nav-dropdown-link-line"> </span>
                            Co-ordinators
                          </a>
                        </a>

                        <a
                          href="/401"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          <span className="nav-dropdown-link-line"> </span>
                          Developers
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </nav>
            <div className="navbar-button-wrapper">
              <a
                href="https://vtop2.vitap.ac.in/vtop/initialProcess"
                target="_blank"
                className="primary-button2 arrow-link-icon w-button"
              >
                Register Here
              </a>
            </div>
            <div className="menu-button w-nav-button">
              <img
                src="https://assets.website-files.com/636e23ecf118df495e7a2aca/636e23edf118df60ad7a2afe_Burger-button.png"
                loading="lazy"
                height={16}
                alt=""
                className="image-burger"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
