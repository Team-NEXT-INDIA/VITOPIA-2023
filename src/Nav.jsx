import React from 'react'
import './styles.css'
import './stylev2.css'
import './scroll.js'
import ScrollToTop from 'react-scroll-to-top'
import { Outlet, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import vitap from './assets/images/vitap-logo.png'
import closeicon from './assets/images/close.svg'
export default function Nav() {
  window.addEventListener('scroll', function () {
    const header = document.getElementById('NAV-HEAD')
    if (window.scrollY > 10) {
      header.style.backgroundColor = 'rgb(0, 0, 0)'
    } else {
      header.style.backgroundColor = 'initial'
    }
  })

  return (
    <div>
      <ScrollToTop smooth />
      <div
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        id="NAV-HEAD"
        data-animation="over-left"
        className="navbar navbar-fixed-top scrolled w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="ad0925c3-4db7-e584-bbd6-dfdc92cee912"
      >
        <div className="nav-container w-container">
          <div className="nav-menu-wrapper">
            <a href="/" className="brand w-nav-brand">
              <img
                className="vtop-png"
                src={vitap}
                loading="lazy"
                height="Auto"
                alt=""
              />
            </a>
            <nav className="nav-menu w-nav-menu">
              <div className="tablet-menu">
                <a href="#" className="brand-tablet w-nav-brand" />
                <div className="close-menu-button w-nav-button">
                  <img
                    src={closeicon}
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
                    <Link to="/">
                      <p className="nav-item-title">Home</p>
                    </Link>
                    <div />
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
                {/* <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="ad0925c3-4db7-e584-bbd6-dfdc92cee963"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" />
                    <Link to="/about">
                      <p className="nav-item-title">About</p>
                    </Link>
                  </div>
                </div> */}
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="a6fdb6f4-b917-73e8-43aa-9aca0856e073"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" />

                    <Link to="/schedule">
                      <p className="nav-item-title">Schedule</p>
                    </Link>
                  </div>
                  {/* <nav class="nav-dropdown-list w-dropdown-list">
                                <div class="nav-dropdown-column">
                                    <div class="nav-dropdown-link-wrapper"><a href="/works" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 1</a><a href="/works-2" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 2</a>
                                        <a
                                            href="/works-3" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 3</a><a href="/works/saloni-production" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Works Details</a></div>
                                </div>
                            </nav> */}
                </div>

                {/* <div data-w-id="fe060b5d-81e8-a354-cdf4-64669c4ad870" class="nav-link-wrapper"><a href="/blog" class="nav-link">Team</a></div> */}
                <div
                  data-hover="true"
                  data-delay={0}
                  data-w-id="a6fdb6f4-b917-73e8-43aa-9aca0856e073"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle" />

                    <Link to="/team">
                      <p className="nav-item-title">Team</p>
                    </Link>
                  </div>
                  {/* <nav class="nav-dropdown-list w-dropdown-list">
                                <div class="nav-dropdown-column">
                                    <div class="nav-dropdown-link-wrapper"><a href="/works" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 1</a><a href="/works-2" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 2</a>
                                        <a
                                            href="/works-3" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Our Works 3</a><a href="/works/saloni-production" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-line"> </span>Works Details</a></div>
                                </div>
                            </nav> */}
                </div>
              </div>
            </nav>
            <div className="navbar-button-wrapper">
              <a
                id="register-btn"
                href="https://vtop1.vitap.ac.in/vitopia/"
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
  )
}
