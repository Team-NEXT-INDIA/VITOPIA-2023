import React from 'react'
import appstore from './../assets/images/appstore.png'
import playstore from './../assets/images/playstore.png'
export default function Apppromo() {
  return (
    <div className="flex items-center justify-center h-screen flex-col ">
      <h3 className="text-center mt-0 mb-2 text-md-left">
        <span className="text-center title-main">VITOPIA '23</span>
      </h3>

      <div id="download" className="store-logos">
        <div className="logo-as text-center text-md-left">
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
        <div className="text-center text-md-left">
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
  )
}
