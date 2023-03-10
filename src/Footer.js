import React from 'react'
import './footerCSS/footer.css'
import vitap from './assets/images/vitap-logo.png'
import appstore from './assets/images/appstore.png'
import playstore from './assets/images/playstore.png'
import appscreenshot from './assets/images/appscreenshot.png'
export default function Footer() {
  return (
    <div>
      <div className="promo-container-wrapper">
        <div></div>
        <div class="promo-container">
          <div>
            <div class="promo-container-text">
              <h5
                data-aos="fade"
                data-aos-delay="60"
                data-aos-duration="1000"
                className="promo-subtitle"
              >
                Grab Your Tickets
              </h5>
              <h6
                data-aos="fade"
                data-aos-delay="60"
                data-aos-duration="1000"
                className="promo-title"
              >
                Download the App
              </h6>
              <div className="">
                <div id="download" className="store-logos">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    className="logo-as text-center text-md-left"
                  >
                    <a
                      href="https://apps.apple.com/in/app/vitopia-event-app/id1671245463"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={appstore}
                        alt="App Store Link"
                        className="app-store-badge"
                      />
                    </a>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="1300"
                    className="text-center text-md-left"
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.arize.vitopia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={playstore}
                        alt="playstore Store Link"
                        className="app-store-badge"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="90"
            data-aos-duration="1400"
            className="app-screenshot"
          >
            <img
              src={appscreenshot}
              alt="App Store Link"
              className="app-screenshot"
            />
          </div>
        </div>
      </div>
      <footer className="text-center footer-bg-dark text-white">
        <div className="container px-6 pt-6">
          <div className="flex justify-center mb-6">
            <a
              href="https://twitter.com/VITAPuniversity"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>

            <a
              href="https://instagram.com/vitap.vitopia?igshid=YmMyMTA2M2Y="
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vit-ap-university-6488a1155"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="text-center p-4 font-bold"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          VITopia '23 | VITAP University - Amaravati
        </div>
      </footer>
    </div>

    // <footer class="p-4  sm:p-6 bg-black">
    //   <div class="md:flex md:justify-between">
    //     <div class="mb-6 md:mb-0">
    //       <a href="https://vitap.ac.in/" class="flex items-center">
    //         <img src={vitap} class="h-8 mr-3" alt="Vitap Logo" />
    //       </a>
    //     </div>
    //     <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    //       <div>
    //         <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
    //           Resources
    //         </h2>
    //         <ul class="text-gray-600 text-gray-400">
    //           <li class="mb-4">
    //             <a href="https://flowbite.com/" class="hover:underline">
    //               Flowbite
    //             </a>
    //           </li>
    //           <li>
    //             <a href="https://tailwindcss.com/" class="hover:underline">
    //               Tailwind CSS
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
    //           Follow us
    //         </h2>
    //         <ul class="text-gray-600 text-gray-400">
    //           <li class="mb-4">
    //             <a
    //               href="https://github.com/themesberg/flowbite"
    //               class="hover:underline "
    //             >
    //               Github
    //             </a>
    //           </li>
    //           <li>
    //             <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">
    //               Discord
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
    //           Legal
    //         </h2>
    //         <ul class="text-gray-600 text-gray-400">
    //           <li class="mb-4">
    //             <a href="#" class="hover:underline">
    //               Privacy Policy
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="hover:underline">
    //               Terms &amp; Conditions
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <hr class="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
    //   <div class="sm:flex sm:items-center sm:justify-between">
    //     <span class="text-sm text-gray-500 sm:text-center text-gray-400">
    //       ?? 2023{' '}
    //       <a href="https://flowbite.com/" class="hover:underline">
    //         Flowbite???
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //     <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    //       <a
    //         href="#"
    //         class="text-gray-500 hover:text-gray-900 hover:text-white"
    //       >
    //         <svg
    //           class="w-5 h-5"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //           aria-hidden="true"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //         <span class="sr-only">Facebook page</span>
    //       </a>
    //       <a
    //         href="#"
    //         class="text-gray-500 hover:text-gray-900 hover:text-white"
    //       >
    //         <svg
    //           class="w-5 h-5"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //           aria-hidden="true"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //         <span class="sr-only">Instagram page</span>
    //       </a>
    //       <a
    //         href="#"
    //         class="text-gray-500 hover:text-gray-900 hover:text-white"
    //       >
    //         <svg
    //           class="w-5 h-5"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //           aria-hidden="true"
    //         >
    //           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //         </svg>
    //         <span class="sr-only">Twitter page</span>
    //       </a>
    //       <a
    //         href="#"
    //         class="text-gray-500 hover:text-gray-900 hover:text-white"
    //       >
    //         <svg
    //           class="w-5 h-5"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //           aria-hidden="true"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //         <span class="sr-only">GitHub account</span>
    //       </a>
    //       <a
    //         href="#"
    //         class="text-gray-500 hover:text-gray-900 hover:text-white"
    //       >
    //         <svg
    //           class="w-5 h-5"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //           aria-hidden="true"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //         <span class="sr-only">Dribbbel account</span>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
  )
}
