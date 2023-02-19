import React from 'react'
import vitap from './../assets/images/vitap.jpeg'
export default function Aboutvitap() {
  return (
    <div>
      <div className="bg-black container  px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div
          data-aos="fade-right"
          data-aos-delay="10"
          data-aos-duration="1000"
          id="NAV-HEAD"
          className="wf-ull lg:w-1/2"
        >
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            #VIT-AP
          </p>
          <h1 className="mt-3 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            About VIT-AP
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            VIT-AP University, established in 2017, is one of the sister
            universities of Vellore Institute of Technology VIT-AP offers
            distinctive education through its Undergraduate, Postgraduate and
            Ph.D Programmes. The teaching-learning process at the institute
            prepares students for the future. They are involved in an active
            process of applied learning with the help of experienced faculty who
            enable the students to channel their talent and intellect to
            contribute towards the development and sustainability of society.
            With an emphasis on innovation and applying technology to improve
            life, the institute offers the following programmes for students at
            various levels.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <a target="_blank" href="https://vitap.ac.in/" />
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              Know More
            </button>
            <a />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="10"
          data-aos-duration="1000"
          id="NAV-HEAD"
          className="relative w-full mt-12 lg:w-1/2 lg:mt-0"
        >
          <img
            style={{ borderRadius: '10px' }}
            className="w-full max-w-lg lg:mx-auto"
            src={vitap}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
