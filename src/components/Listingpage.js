import React from "react";
import "./Listingpage.css";
const Listingpage = () => {
  return (
    <div className="Listingpage">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{top: "140px"}}
      >
        <div className="carousel-inner " >
          <div className="carousel-item active container custom-blockquote">
            <blockquote className="row col-md-10 offset-1 col-sm-12 blockquote">
              <h2>Steve Makelew</h2>
              <p>
                Look famous. Be legendary. Appear complex. Act easy. Radiate
                presence. Travel light. Seem a dream. Prove real.
              </p>
              <small>
                Someone famous in.
                <cite title="Source Title">Source Title</cite>
              </small>
            </blockquote>
          </div>
          <div className="carousel-item container custom-blockquote">
            <blockquote className="row col-md-10 offset-1 col-12 blockquote" >
              <h2>Nathan Swaim</h2>
              <p>
                Look famous. Be legendary. Appear complex. Act easy. Radiate
                presence. Travel light. Seem a dream. Prove real.
              </p>
              <small>
                Someone famous in.
                <cite title="Source Title">Source Title</cite>
              </small>
            </blockquote>
          </div>
          <div className="carousel-item container custom-blockquote">
            <blockquote className="row col-md-10 offset-1 col-12 blockquote">
              <h2>Ian Murphy</h2>
              <p>
                Look famous. Be legendary. Appear complex. Act easy. Radiate
                presence. Travel light. Seem a dream. Prove real.
              </p>
              <small>
                Someone famous in.
                <cite title="Source Title">Source Title</cite>
              </small>
            </blockquote>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Listingpage;
