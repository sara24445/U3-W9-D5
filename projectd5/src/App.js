import logo from './logo.svg'
import './App.css'
import React from 'react'
import CNavbar from './components/CNavbar'
import CTrendingCarousel from './components/CTrendingcarosel'
import CWatchAgainCarousel from './components/CWatchAgainCarousel'
import CNewReleasesCarousel from './components/CNewReleasesCarousel'
import CFooter from './components/CFooter'
import HarryPotterGallery from './components/HarryPotterGallery'
import LordOfTheRingsGallery from './components/LordOfTheRingsGallery'
import StarWarsGallery from './components/StarWarsGallery'
import './netflix.css'

const App = () => {
  return (
    <div>
      <CNavbar />
      <main>
        <div className="container my-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1>TV Shows</h1>
            <div className="dropdown genre-dropdown">
              <button
                className="btn btn-dark text-white border border-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seleziona genere
              </button>
              <ul
                className="dropdown-menu bg-black"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Azione
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Commedia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Dramma
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Fantascienza
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center my-5">Movie Galleries</h1>
          <HarryPotterGallery />
          <LordOfTheRingsGallery />
          <StarWarsGallery />
        </div>
        <CTrendingCarousel />
        <CWatchAgainCarousel />
        <CNewReleasesCarousel />
      </main>
      <CFooter />
    </div>
  )
}

export default App
