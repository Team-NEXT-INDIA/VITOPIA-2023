import React from 'react'
import vitopia from './../assets/images/vitopia-placeholder.png'
export default function Aboutvitopia() {
  return (
    <div>
      <div className="bg-black container  px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div
          data-aos="fade-right"
          data-aos-delay="10"
          data-aos-duration="1000"
          className="relative w-full mt-12 lg:w-1/2 lg:mt-0"
        >
          <img
            style={{ borderRadius: '10px' }}
            className="w-full max-w-lg lg:mx-auto"
            src={vitopia}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="10"
          data-aos-duration="1000"
          className="w-full lg:w-1/2"
        >
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            #VITOPIA
          </p>
          <h1 className="mt-3 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            About VITopia '23'
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            VITOPIA is the annual international cultural and sports festival
            conducted by VIT - AP University as a celebration of its endless
            enthusiasm towards various sport and art forms. VITOPIA 2023 is the
            fourth edition of this extravaganza of culture and sports, which is
            to be conducted on 4th and 5th of March 2023. The devotion and urge
            towards this event among the student population across the country
            is the distinguishing factor of VITOPIA from other cultural fests.
            VITOPIA 2023 brings eminent personalities including one of India’s
            most successful sportspersons, Ms. P V Sindhu, established musician
            Mr. Devi Sri Prasad (DSP), acclaimed film Director Mr. Narendra
            Nath, Stand up comedian Rajasekhar Mamidanna , as well as renowned
            music bands such as Indian Ocean, to the university. This is a
            grandeur event not just limited to music, dance, literary events,
            workshops, comic shows, marathons and other sports events, but it is
            also well known for raising awareness towards social causes.
          </p>

          <div id="NAV-HEAD" className="flex items-center mt-6 gap-x-3">
            <a target="_blank" href="https://vtop1.vitap.ac.in/vitopia/">
              <button className="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Register Now
              </button>
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-700">
            *External Participants only
          </p>
        </div>
      </div>
    </div>
  )
}
