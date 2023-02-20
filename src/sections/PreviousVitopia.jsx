import React from "react";
import "./../css/previous.css";
import dsp from "./../assets/images/dsp-2.jpeg";
import sindhu from "./../assets/images/pvsindhu.webp";
import sandhya from "./../assets/images/sandhya.jpeg";
import shanumukh from "./../assets/images/shanumukh.jpeg";
import bobby from "./../assets/images/bobby.jpeg";
import payal from "./../assets/images/payal.jpeg";
import rajasekhar from "./../assets/images/rajasekhar.jpeg";
import twinstring from "./../assets/images/twin-string.webp";
export default function PreviousVitopia() {
  return (
    <>
      <div className="container-fluid vitopia-guests-padding">
        <h1
          data-aos="fade"
          data-aos-delay="20"
          data-aos-duration="1000"
          className="mt-3 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
        >
          Our Guests
        </h1>
        <span
          data-aos="fade"
          data-aos-delay="40"
          data-aos-duration="1100"
          className="mt-3 text-base font-thin text-gray-800 dark:text-white md:text-3xl"
        >
          Check the Guests of #VITOPIA '23
        </span>
        <div className="mt-3 row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div
              data-aos="fade-right"
              data-aos-delay="30"
              data-aos-duration="1000"
              className=" vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={dsp}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                Devi Sri Prasad
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Indian Music Director
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="40"
              data-aos-duration="1000"
              className=" vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={twinstring}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                Twin Strings
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Indie boy band
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div
              data-aos="fade-down"
              data-aos-delay="30"
              data-aos-duration="1000"
              className="vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={sindhu}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                PV Sindhu
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Indian badminton player
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="40"
              data-aos-duration="1000"
              className=" vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={bobby}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                Bobby Kolli
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Indian film director
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              className=" vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={sandhya}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                Sandhya Raju
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Indian dancer
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1000"
              className=" vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={rajasekhar}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                Rajasekhar Mamidanna
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Stand up comedian
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div
              data-aos="fade-left"
              data-aos-delay="40"
              data-aos-duration="1000"
              className=" vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={shanumukh}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                Shanmukha Priya
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Singer
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="40"
              data-aos-duration="1000"
              className=" vitopia-image-card relative md:col-span-2 h-40 vitopia-image-card-height md:h-auto"
            >
              <img
                src={payal}
                alt="Gallery image 1"
                className="w-full h-full object-cover vitopia-image-position"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-4 text-white text-lg font-medium">
                Payal Rajput
              </div>
              <div className="absolute bottom-4 left-4 text-gray-300 text-sg font-small">
                Indian actress
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-all-events">
        <button>View all Events</button>
      </div>
    </>
  );
}
