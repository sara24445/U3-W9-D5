import React from 'react'

const CWatchAgainCarousel = () => {
  return (
    <section className="container my-5">
      <h2>Watch It Again</h2>
      <div
        id="watchAgainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media9.jpg"
                  className="d-block"
                  alt="Watch Again 1"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media8.webp"
                  className="d-block"
                  alt="Watch Again 2"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media7.webp"
                  className="d-block"
                  alt="Watch Again 3"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media5.webp"
                  className="d-block"
                  alt="Watch Again 4"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media4.jpg"
                  className="d-block"
                  alt="Watch Again 5"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media20.jpg"
                  className="d-block"
                  alt="Watch Again 6"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#watchAgainCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#watchAgainCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default CWatchAgainCarousel
