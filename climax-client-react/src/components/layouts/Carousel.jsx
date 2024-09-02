import React from "react";

function Carousel() {
  return (
    <div className="bd-example">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className=""
          />
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={1}
            className="active"
          />
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={2}
            className=""
          />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="assets/images/small/img-1.jpg"
              className="d-block w-100"
              alt="#"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 className="text-white">First slide label</h4>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="assets/images/small/img-1.jpg"
              className="d-block w-100"
              alt="#"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 className="text-white">Second slide label</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/small/img-1.jpg"
              className="d-block w-100"
              alt="#"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 className="text-white">Third slide label</h4>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
