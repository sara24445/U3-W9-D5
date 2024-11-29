import React from 'react'

const CTrendingCarousel = () => {
  return (
    <section className="container my-5">
      <h2>Trending Now</h2>
      <div
        id="trendingCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media1.jpg"
                  className="d-block"
                  alt="Trending 1"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media10.jpg"
                  className="d-block"
                  alt="Trending 2"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media11.jpg"
                  className="d-block"
                  alt="Trending 3"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media12.jpg"
                  className="d-block"
                  alt="Trending 4"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media13.jpg"
                  className="d-block"
                  alt="Trending 5"
                />
              </div>
              <div className="col">
                <img
                  src="./Netflix-assets/assets/media/media14.webp"
                  className="d-block"
                  alt="Trending 6"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#trendingCarousel"
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
          data-bs-target="#trendingCarousel"
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

export default CTrendingCarousel
