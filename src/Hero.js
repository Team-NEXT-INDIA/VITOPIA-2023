import React from 'react'
import './styles.css'
import './stylev2.css'
import './custom.css'
import herowebp from './assets/videos/Fireworks.webm'
import heromp from './assets/videos/Fireworks.mp4'
import appstore from './assets/images/appstore.png'
import playstore from './assets/images/playstore.png'
import appscreenshot from './assets/images/appscreenshot.png'
import Slider from './sections/GuestSlider'
import Aboutvitap from './sections/Aboutvitap'
import Aboutvitopia from './sections/AboutVitopia'
export default function Hero() {
  return (
    <div>
      <>
        {/* <div className="top-banner-section wf-section">
         <div
            // data-poster-url="https://assets.website-files.com/636e23ecf118df495e7a2aca/6384f5628f6ff67f3b33a32d_181818-poster-00001.jpg"
            data-video-urls={herowebp}
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="background-video home-3 w-background-video w-background-video-atom"
          >
            <video
              id="12f3846a-c722-4d2e-501f-c59b8940beee-video"
              autoPlay=""
              loop=""
              style={
                {
                  // backgroundImage:
                  //   'url("https://assets.website-files.com/636e23ecf118df495e7a2aca/6384f5628f6ff67f3b33a32d_181818-poster-00001.jpg")',
                }
              }
              playsInline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src={heromp} data-wf-ignore="true" />
              <source src={herowebp} data-wf-ignore="true" />
            </video>
            <p
              data-w-id="1c9cda6e-3134-5f79-77cb-35e762ae8c71"
              style={{ opacity: 0 }}
              className="max-width-580"
            />
            <div>
              <img
                className="Vitopia21"
                src="https://i.ibb.co/M7JKbgz/vitopia-white.png"
                alt="Vitpoia image"
              />
            </div>
            <div
              data-w-id="207116ee-d667-c943-61b4-25b21a5e4272"
              style={{ opacity: 0 }}
              className="button-wrapper"
            ></div>
            <a href="/contact-us" className="primary-button w-button">
              Explore Now
            </a>
          </div> 
          
          
        </div> */}
        <div
          data-aos="fade"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="top-banner-section wf-section"
        >
          <div
            data-poster-url="https://i.ibb.co/N3mvRPn/Fireworks-img.png"
            data-video-urls={heromp}
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="background-video home-3 w-background-video w-background-video-atom"
          >
            <video
              id="12f3846a-c722-4d2e-501f-c59b8940beee-video"
              autoPlay
              loop
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/N3mvRPn/Fireworks-img.png")',
              }}
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src={heromp} data-wf-ignore="true" />
              <source src={herowebp} data-wf-ignore="true" />
            </video>
            <p
              data-w-id="1c9cda6e-3134-5f79-77cb-35e762ae8c71"
              style={{ opacity: 0 }}
              className="max-width-580"
            />

            <div
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1000"
            >
              <img
                className="Vitopia21"
                src="https://i.ibb.co/M7JKbgz/vitopia-white.png"
                alt="Vitpoia image"
              />
            </div>
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-w-id="6c989e35-61e6-1bb0-755b-8f234f641608"
              className="landing-title-sub"
            >
              Get Ready For
            </h3>
            <h3
              data-aos="fade-up"
              data-aos-delay="130"
              data-aos-duration="1000"
              data-w-id="6c989e35-61e6-1bb0-755b-8f234f641608"
              className="landing-title-main"
            >
              International Sports and Cultural Fiesta
            </h3>

            <div
              data-aos="fade"
              data-aos-delay="180"
              data-aos-duration="1000"
              className="explor-hero"
            >
              <h6 className="explore-title">Explore Now</h6>
              <svg
                className="arrow"
                fill="#ffffff"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  />{' '}
                </g>
              </svg>
            </div>
          </div>

          <div
            data-w-id="207116ee-d667-c943-61b4-25b21a5e4272"
            style={{ opacity: 0 }}
            className="button-wrapper"
          ></div>
        </div>
        <div className="divider" />
        <div className="loop-section wf-section">
          <div className="base-container align-left w-container">
            <div
              data-w-id="7ec9c576-eb64-d0a7-d052-094a080c1486"
              className="overflow-hidden-container"
            >
              <div
                data-w-id="7ec9c576-eb64-d0a7-d052-094a080c1487"
                className="logo-loop-wrapper"
              ></div>
            </div>
          </div>
        </div>
        <Aboutvitap />
        <Aboutvitopia />
        {/* <div className="section wf-section">
          <div className="base-container w-container">
            <div className="w-dyn-list">
              <div
                role="list"
                className="our-clients-names-wrapper w-dyn-items"
              >
                <div
                  data-w-id="50dbf892-e80d-880a-ca7d-bfc6bb2f89ba"
                  style={{ opacity: 0 }}
                  role="listitem"
                  className="w-dyn-item"
                ></div>
                <a href="/schedule" className="w-inline-block">
                  <div
                    id="SECTION-EXPLORE"
                    className=" extra-bold-text hover-animation"
                  >
                    Events
                  </div>
                </a>
                <div
                  data-w-id="50dbf892-e80d-880a-ca7d-bfc6bb2f89ba"
                  style={{ opacity: 0 }}
                  role="listitem"
                  className="w-dyn-item"
                ></div>
                <a
                  href="/schedule"
                  className="w-inline-block"
                >
                  <div className="extra-bold-text hover-animation">
                    Pro-Show
                  </div>
                </a>
                <div
                  data-w-id="50dbf892-e80d-880a-ca7d-bfc6bb2f89ba"
                  style={{ opacity: 0 }}
                  role="listitem"
                  className="w-dyn-item"
                ></div>
                <a href="/schedule" className="w-inline-block">
                  <div className="extra-bold-text hover-animation">Venues</div>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="section wf-section">
          <div className="base-container w-container">
            <div className="text-lines-wrapper">
              <div
                data-w-id="ad328879-4704-47e5-1199-4f1daa319f53"
                className="w-dyn-list"
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div role="list" className="text-lines-wrapper w-dyn-items">
                  <div
                    role="listitem"
                    className="text-and-image-lines-wrapper w-dyn-item"
                  >
                    <a
                      href="/schedule"
                      className="category-ablsolute-link w-inline-block"
                    >
                      <div
                        className="extra-bold-text hover-animation"
                        style={{}}
                      >
                        Events
                      </div>
                    </a>
                    <div className="image-wrapped-down first-item">
                      <a href="/schedule" className="absolte w-inline-block" />
                      <div
                        style={{ paddingTop: '74.94252873563218%' }}
                        className="background-video-visual w-video w-embed"
                      >
                        <iframe
                          className="embedly-embed"
                          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2FL95TJSriuxoCPCguRE%2Ftwitter%2Fiframe&display_name=Giphy&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FL95TJSriuxoCPCguRE%2Fgiphy.gif&image=https%3A%2F%2Fi.giphy.com%2Fmedia%2FL95TJSriuxoCPCguRE%2Fgiphy-downsized-large.gif&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=giphy"
                          width={435}
                          height={326}
                          scrolling="no"
                          title="Giphy embed"
                          frameBorder={0}
                          allow="autoplay; fullscreen"
                          allowFullScreen="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-id="ad328879-4704-47e5-1199-4f1daa319f5e"
                className="w-dyn-list"
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div role="list" className="text-lines-wrapper w-dyn-items">
                  <div
                    role="listitem"
                    className="text-and-image-lines-wrapper reversed w-dyn-item"
                  >
                    <div className="image-wrapped-down mid-item">
                      <a href="/schedule" className="absolte w-inline-block" />
                      <div
                        style={{ paddingTop: '56.32183908045977%' }}
                        className="background-video-animation w-video w-embed"
                      >
                        <iframe
                          className="embedly-embed"
                          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2F44F9m2Uaonygg%2Ftwitter%2Fiframe&display_name=Giphy&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F44F9m2Uaonygg%2Fgiphy.gif&image=https%3A%2F%2Fi.giphy.com%2Fmedia%2F44F9m2Uaonygg%2Fgiphy.gif&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=giphy"
                          width={435}
                          height={245}
                          scrolling="no"
                          title="Giphy embed"
                          frameBorder={0}
                          allow="autoplay; fullscreen"
                          allowFullScreen="true"
                        />
                      </div>
                    </div>
                    <a
                      href="/schedule"
                      className="category-ablsolute-link right-align w-inline-block"
                    >
                      <div
                        className="extra-bold-text hover-animation"
                        style={{}}
                      >
                        ProShows
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-w-id="ad328879-4704-47e5-1199-4f1daa319f69"
                className="w-dyn-list"
                style={{
                  opacity: 1,
                  transform:
                    'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div role="list" className="w-dyn-items">
                  <div
                    role="listitem"
                    className="text-and-image-lines-wrapper w-dyn-item"
                  >
                    <a
                      href="/schedule"
                      className="category-ablsolute-link w-inline-block"
                    >
                      <div
                        className="extra-bold-text hover-animation"
                        style={{}}
                      >
                        Venues
                      </div>
                    </a>
                    <div className="image-wrapped-down last-item">
                      <div
                        style={{ paddingTop: '56.09195402298851%' }}
                        className="background-video-colors w-video w-embed"
                      >
                        <iframe
                          className="embedly-embed"
                          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgiphy.com%2Fembed%2Fyq5UdrX0j9780maQuO%2Ftwitter%2Fiframe&display_name=Giphy&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fyq5UdrX0j9780maQuO%2Fgiphy.gif&image=https%3A%2F%2Fi.giphy.com%2Fmedia%2Fyq5UdrX0j9780maQuO%2Fgiphy-downsized-large.gif&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=giphy"
                          width={435}
                          height={244}
                          scrolling="no"
                          title="Giphy embed"
                          frameBorder={0}
                          allow="autoplay; fullscreen"
                          allowFullScreen="true"
                        />
                      </div>
                      <a href="/schedule" className="absolte w-inline-block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    </div>
  )
}
