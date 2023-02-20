import React from 'react'
import './css/navbar2.css'
export default function Navbar2() {
  const searchButton = document.querySelector('nav .desktop-nav .link-search')
  const closeButton = document.querySelector('.search-container .link-close')
  const desktopNav = document.querySelector('.desktop-nav')
  const searchContainer = document.querySelector('.search-container')
  const overlay = document.querySelector('.overlay')

  searchButton.addEventListener('click', () => {
    desktopNav.classList.add('hide')
    searchContainer.classList.remove('hide')
    overlay.classList.add('show')
  })

  closeButton.addEventListener('click', () => {
    desktopNav.classList.remove('hide')
    searchContainer.classList.add('hide')
    overlay.classList.remove('show')
  })

  overlay.addEventListener('click', () => {
    desktopNav.classList.remove('hide')
    searchContainer.classList.add('hide')
    overlay.classList.remove('show')
  })

  // Mobile Version

  const menuIconContainer = document.querySelector('nav .menu-icon-container')
  const navContainer = document.querySelector('.nav-container')

  menuIconContainer.addEventListener('click', () => {
    navContainer.classList.toggle('active')
  })

  const searchBar = document.querySelector(
    '.mobile-search-container .search-bar',
  )
  const nav = document.querySelector('.nav-container nav')
  const searchInput = document.querySelector('.mobile-search-container input')
  const cancelBtn = document.querySelector(
    '.mobile-search-container .cancel-btn',
  )

  searchInput.addEventListener('click', () => {
    searchBar.classList.add('active')
    nav.classList.add('move-up')
    desktopNav.classList.add('move-down')
  })

  cancelBtn.addEventListener('click', () => {
    searchBar.classList.remove('active')
    nav.classList.remove('move-up')
    desktopNav.classList.remove('move-down')
  })
  return (
    <div className="nav-container">
      <nav>
        <ul className="mobile-nav">
          <li>
            <div className="menu-icon-container">
              <div className="menu-icon">
                <span className="line-1" />
                <span className="line-2" />
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="link-logo" />
          </li>
          <li>
            <a href="" className="link-bag" />
          </li>
        </ul>
        <ul className="desktop-nav">
          <li>
            <a href="#" className="link-logo" />
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#" className="link-search" />
          </li>
          <li>
            <a href="#" className="link-bag" />
          </li>
        </ul>
      </nav>
      {/* End of navigation menu items */}
      <div className="search-container hide">
        <div className="link-search" />
        <div className="search-bar">
          <form action="">
            <input type="text" placeholder="Search apple.com" />
          </form>
        </div>
        <div className="link-close" />
        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Visiting an Apple Store FAQ</a>
            </li>
            <li>
              <a href="#">Shop Apple Store Online</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">AirPods</a>
            </li>
            <li>
              <a href="#">AirTag</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-search-container">
        <div className="link-search" />
        <div className="search-bar">
          <form action="">
            <input type="text" placeholder="Search apple.com" />
          </form>
        </div>
        <span className="cancel-btn">Cancel</span>
        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Visiting an Apple Store FAQ</a>
            </li>
            <li>
              <a href="#">Shop Apple Store Online</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">AirPods</a>
            </li>
            <li>
              <a href="#">AirTag</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
