import React from 'react'

const CNewReleasesCarousel = () => {
  return (
    <section className="container my-5">
      <h2>New Releases</h2>
      <div
        id="newReleasesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media27.jpg"
                  className="d-block"
                  alt="New Release 1"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media28.jpg"
                  className="d-block"
                  alt="New Release 2"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media29.jpg"
                  className="d-block"
                  alt="New Release 3"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media3.webp"
                  className="d-block"
                  alt="New Release 4"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media30.jpg"
                  className="d-block"
                  alt="New Release 5"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media31.webp"
                  className="d-block"
                  alt="New Release 6"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#newReleasesCarousel"
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
          data-bs-target="#newReleasesCarousel"
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

export default CNewReleasesCarousel
