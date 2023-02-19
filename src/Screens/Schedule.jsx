import React, { useState } from 'react'
import Nav from '../Nav'
import '../styles.css'
import eventbanner from './../assets/images/events-banner.jpg'
import Footer from '../Footer'
import placeholder from './../assets/images/placeholder.png'
const events = [
  {
    name: 'V Stepup - Dance',
    day: 1,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '10:00 AM - 12:00 PM',
  },
  {
    name: 'V Rhythm - Singing',
    day: 2,
    image: placeholder,
    location: '-',
    timing: '10:00 AM - 12:00 PM',
  },
  {
    name: 'Battle of Bands- Music',
    day: 1,
    image: placeholder,
    location: '-',
    timing: '10:00 AM - 12:00 PM',
  },
  {
    name: 'Beat Boxing and Rap',
    day: 2,
    image: placeholder,
    location: '-',
    timing: '10:00 AM - 12:00 PM',
  },
  {
    name: 'VGlam-Fashion Show',
    day: 1,
    image: placeholder,
    location: '-',
    timing: '10:00 AM - 12:00 PM',
  },
]

const proshows = [
  {
    name: 'VIT-AP Students Show',
    day: 1,
    image: placeholder,
    location: 'nill',
  },

  { name: 'Prize Distribution', day: 2, image: placeholder, location: '-' },
  { name: 'Tribal Dance', day: 1, image: placeholder, location: '-' },
  { name: 'Beat Boxing and Rap', day: 2, image: placeholder, location: '-' },
  { name: 'Singing Concert', day: 1, image: placeholder, location: '-' },
  { name: 'DJ', day: 2, image: placeholder, location: '-' },
]

function Schedule() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDay, setSelectedDay] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDayFilter = (day) => {
    setSelectedDay(day)
  }

  const filteredEvents = events
    .filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((event) => {
      if (!selectedDay) {
        return true
      }
      return event.day === selectedDay
    })

  const filteredShows = proshows
    .filter((show) =>
      show.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((show) => {
      if (!selectedDay) {
        return true
      }
      return show.day === selectedDay
    })
  return (
    <>
      <Nav />
      <div
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="full-500"
      >
        <img className="full-width" alt="Vit-ap drone shot" src={eventbanner} />
      </div>
      <div className="container mx-auto p-4">
        <div className="">
          <form className="padding-bottom-25 flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required=""
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </form>

          {/* <div className="flex">
            <div className="relative">
              <button
                className={`p-2 mr-2 ${
                  selectedDay
                    ? 'bg-blue-500 text-white'
                    : 'bg-transparent text-blue-500'
                } hover:bg-blue-500 hover:text-white`}
                onClick={() => setSelectedDay(selectedDay ? '' : 1)}
              >
                {selectedDay ? `Day ${selectedDay}` : 'Filters'}
              </button>
              {selectedDay && (
                <div className="absolute z-10 bg-white rounded-lg shadow-lg mt-2">
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    onClick={() => setSelectedDay(1)}
                  >
                    Day 1
                  </button>
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    onClick={() => setSelectedDay(2)}
                  >
                    Day 2
                  </button>
                </div>
              )}
            </div>
          </div> */}
        </div>
        <h1 className="text-2xl font-bold mb-4">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <div
              data-aos="fade"
              data-aos-delay="50"
              data-aos-duration="1000"
              class="event-card flex justify-center"
            >
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg event-card-bg shadow-lg">
                <img
                  class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg filter brightness-75"
                  src={event.image}
                  alt=""
                />
                <div class="p-6 flex flex-col justify-start">
                  <h5 class="text-gray-100  text-xl font-semibold mb-2">
                    {event.name}
                  </h5>
                  <p class="text-gray-400 text-base mb-4">
                    <span className="font-bold text-white text-sm">
                      Location:{' '}
                    </span>{' '}
                    {event.location}
                  </p>
                  <p class="text-gray-500 text-xs">{event.timing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold mb-4">Pro Shows</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredShows.map((show) => (
            <div
              data-aos="fade"
              data-aos-delay="50"
              data-aos-duration="1000"
              class="event-card flex justify-center"
            >
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg event-card-bg shadow-lg">
                <img
                  class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg filter brightness-75"
                  src={show.image}
                  alt=""
                />
                <div class="p-6 flex flex-col justify-start">
                  <h5 class="text-gray-100  text-xl font-semibold mb-2">
                    {show.name}
                  </h5>
                  <p class="text-gray-400 text-base mb-4">
                    <span className="font-bold text-white text-sm">
                      Location:
                    </span>{' '}
                    {show.location}
                  </p>
                  <p class="text-gray-500 text-xs">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Schedule
