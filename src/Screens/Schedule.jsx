import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
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
    timing: '2:00 PM - 3:00 PM',
    categorie: 'Solo',
    sub_categorie: 'Classical',
  },
  {
    name: 'V Stepup - Dance',
    day: 1,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '3:00 PM - 5:00 PM',
    categorie: 'Solo',
    sub_categorie: 'Modern',
  },
  {
    name: 'V Stepup - Dance',
    day: 1,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '2:00 PM - 3:00 PM',
    categorie: 'Group',
    sub_categorie: 'Classical',
  },
  {
    name: 'V Stepup - Dance',
    day: 1,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '11:00 AM - 1:00 PM',
    categorie: 'Group',
    sub_categorie: 'Modern',
  },
  {
    name: 'V Stepup - Dance',
    day: 1,
    image: placeholder,
    location: 'NEWTON HAll',
    timing: '11:00 AM - 1:00 PM',
    categorie: 'Battle',
    sub_categorie: '-',
  },
  {
    name: 'V Stepup - Dance',
    day: 2,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '2:00 PM - 3:00 PM',
    categorie: 'Solo',
    sub_categorie: 'Classical',
  },
  {
    name: 'V Stepup - Dance',
    day: 2,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '3:00 PM - 4:30 PM',
    categorie: 'Solo',
    sub_categorie: 'Modern',
  },
  {
    name: 'V Stepup - Dance',
    day: 2,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '10:30 AM - 11:30 AM',
    categorie: 'Group',
    sub_categorie: 'Classical',
  },
  {
    name: 'V Stepup - Dance',
    day: 2,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '11:30 AM - 2:00 PM',
    categorie: 'Group',
    sub_categorie: 'Modern',
  },
  {
    name: 'V Stepup - Dance',
    day: 2,
    image: placeholder,
    location: 'NEWTON HAll',
    timing: '11:00 AM - 1:00 PM',
    categorie: 'Battle',
    sub_categorie: '-',
  },
  {
    name: 'V Rhythm - Singing',
    day: 1,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '10:00 AM - 1:00 PM',
    categorie: 'Solo',
    sub_categorie: 'Classical'
  },
  {
    name: 'V Rhythm - Singing',
    day: 1,
    image: placeholder,
    location: 'NEWTON HALL',
    timing: '1:00 PM - 3:00 PM',
    categorie: 'Solo',
    sub_categorie: 'Modern'
  },
  {
    name: 'V Rhythm - Singing',
    day: 1,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '1:00 PM - 2:00 PM',
    categorie: 'Group',
    sub_categorie: 'Classical'
  },
  {
    name: 'V Rhythm - Singing',
    day: 1,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '10:00 AM - 11:00 AM',
    categorie: 'Group',
    sub_categorie: 'Modern'
  },
  {
    name: 'V Rhythm - Singing',
    day: 2,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '2:00 PM - 3:00 PM',
    categorie: 'Solo',
    sub_categorie: 'Classical'
  },
  {
    name: 'V Rhythm - Singing',
    day: 2,
    image: placeholder,
    location: 'AUDITORIUM',
    timing: '10:30 AM - 12:30 PM',
    categorie: 'Solo',
    sub_categorie: 'Modern'
  },
  {
    name: 'V Rhythm - Singing',
    day: 2,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '10:00 AM - 11:30 AM',
    categorie: 'Group',
    sub_categorie: 'Classical'
  },
  {
    name: 'V Rhythm - Singing',
    day: 2,
    image: placeholder,
    location: 'AB2 AMPHI',
    timing: '12:00 PM - 1:00 PM',
    categorie: 'Group',
    sub_categorie: 'Modern'
  },
  {
    name: 'Battle of Bands- Music',
    day: 1,
    image: placeholder,
    location: 'AUDITORIUM',
    timing: '2:00 PM - 3:00 PM',
    categorie: 'Classical',
    sub_categorie:'-'
  },
  {
    name: 'Battle of Bands- Music',
    day: 1,
    image: placeholder,
    location: 'AUDITORIUM',
    timing: '3:00 PM - 4:00 PM',
    categorie: 'Western',
    sub_categorie:'-'
  },
  {
    name: 'Battle of Bands- Music',
    day: 1,
    image: placeholder,
    location: 'AUDITORIUM',
    timing: '4:00 PM - 5:00 PM',
    categorie: 'Instrumental',
    sub_categorie:'-'
  },
  {
    name: 'Battle of Bands- Music',
    day: 2,
    image: placeholder,
    location: 'AUDITORIUM',
    timing: '2:00 PM - 3:00 PM',
    categorie: 'Classical',
    sub_categorie:'-'
  },
  {
    name: 'Battle of Bands- Music',
    day: 2,
    image: placeholder,
    location: 'AUDITORIUM',
    timing: '3:00 PM - 4:00 PM',
    categorie: 'Western',
    sub_categorie:'-'
  },
  {
    name: 'Battle of Bands- Music',
    day: 2,
    image: placeholder,
    location: 'AUDITORIUM',
    timing: '4:00 PM - 5:00 PM',
    categorie: 'Instrumental',
    sub_categorie:'-'
  },
  {
    name: 'Beat Boxing and Rap',
    day: 1,
    image: placeholder,
    location: 'NEWTON HALL',
    timing: '3:00 PM - 4:00 PM',
    categorie:'Individual',
    sub_categorie:'-'

  },
  {
    name: 'Beat Boxing and Rap',
    day: 1,
    image: placeholder,
    location: 'NEWTON HALL',
    timing: '4:00 PM - 5:00 PM',
    categorie:'Group',
    sub_categorie:'-'

  },
  {
    name: 'Beat Boxing and Rap',
    day: 2,
    image: placeholder,
    location: 'NEWTON HALL',
    timing: '3:00 PM - 4:00 PM',
    categorie:'Individual',
    sub_categorie:'-'

  },
  {
    name: 'Beat Boxing and Rap',
    day: 2,
    image: placeholder,
    location: 'NEWTON HALL',
    timing: '4:00 PM - 5:00 PM',
    categorie:'Group',
    sub_categorie:'-'

  },

  {
    name: 'VGlam-Fashion Show',
    day: 1,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '3:00 PM - 4:00 PM',
    categorie:'Traditional',
    sub_categorie:'-'
  },
  {
    name: 'VGlam-Fashion Show',
    day: 1,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '4:00 PM - 5:00 PM',
    categorie:'Western',
    sub_categorie:'-'
  },
  {
    name: 'VGlam-Fashion Show',
    day: 2,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '3:00 PM - 4:00 PM',
    categorie:'Traditional',
    sub_categorie:'-'
  },
  {
    name: 'VGlam-Fashion Show',
    day: 2,
    image: placeholder,
    location: 'AB1 GROUND',
    timing: '4:00 PM - 5:00 PM',
    categorie:'Western',
    sub_categorie:'-'
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
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedShow, setSelectedShow] = useState(null)
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

  let [isOpen, setIsOpen] = useState(false)
  let [isOpenShow, setIsOpenShow] = useState(false)
  function closeModalEvent() {
    setIsOpen(false)
  }

  function openModal(event) {
    setIsOpen(true)
    setSelectedEvent(event)
  }

  function openModalShow(show) {
    setIsOpenShow(true)
    setSelectedShow(show)
  }
  function closeModalShow() {
    setIsOpenShow(false)
  }
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
        </div>
        <h1 className="text-2xl font-bold mb-4">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              onClick={() => openModal(event)}
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
          {filteredShows.map((show, index) => (
            <div
              key={index}
              onClick={() => openModalShow(show)}
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
          {selectedEvent && (
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={closeModalEvent}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {selectedEvent.name}
                        </Dialog.Title>
                        <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Day: {selectedEvent.day}
                          </p>
                          <p className="text-sm text-gray-500">
                            Category: {selectedEvent.categorie}
                          </p>
                          <p className="text-sm text-gray-500">
                            Sub-Category: {selectedEvent.sub_categorie}
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModalEvent}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          )}
          {selectedShow && (
            <Transition appear show={isOpenShow} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={closeModalShow}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {selectedShow.name}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            No Description Available for the Event
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModalShow}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Schedule
