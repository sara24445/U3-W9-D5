import React from 'react'

const CNavbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./Netflix-assets/assets/netflix_logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="TV shows">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Recently Added">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="My List">
                  My List
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search m-2"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <a href="#" className="text-secondary m-2">
                <i className="fas fa-bell"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default CNavbar
