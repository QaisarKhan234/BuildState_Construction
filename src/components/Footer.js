import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="mt-3">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#222222" }}
        >
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="mb-4 ">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </h6>
                  <p className="pStyle">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec mollis. Quisque convallis libero in sapien pharetra
                    tincidunt. Aliquam elit ante, malesuada id, tempor eu,
                    gravida id, odio. Maecenas suscipit, risus et eleifend
                    imperdiet, nisi orci ullamcorper massa adipiscing.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Recent Posts
                  </h6>
                  <p className="recentPosts">
                    <a className="text-white sub-container">
                      <div className="date">
                        <div className="month">
                          <span className="date-month">22</span>
                          <br></br>
                          <span className="name-month">APR</span>
                        </div>
                      </div>
                      <div className="news">
                        Donec mollis. Quisque convallis libero in sapien
                        pharetra tincidunt. Aliquam elit ante
                      </div>
                    </a>
                  </p>

                  <p className="recentPosts">
                    <a className="text-white sub-container">
                      <div className="date">
                        <div className="month">
                          <span className="date-month">12</span>
                          <br></br>
                          <span className="name-month">JUL</span>
                        </div>
                      </div>
                      <div className="news">
                        Donec mollis. Quisque convallis libero in sapien
                        pharetra tincidunt. Aliquam elit ante
                      </div>
                    </a>
                  </p>

                  <p className="recentPosts">
                    <a className="text-white sub-container">
                      <div className="date">
                        <div className="month">
                          <span className="date-month">28</span>
                          <br></br>
                          <span className="name-month">DEC</span>
                        </div>
                      </div>
                      <div className="news">
                        Donec mollis. Quisque convallis libero in sapien
                        pharetra tincidunt. Aliquam elit ante
                      </div>
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p >
                    <i className="fas fa-home mr-3"></i> <span className="pStyle1">New York, NY 10012, US</span>
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> <span className="pStyle1">info@gmail.com</span>
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> <span className="pStyle1"> + 01 234 567 88 </span>
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> <span className="pStyle1">+ 01 234 567 89 </span> 
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    Buildstate © Copyright 2017 by on3-step
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
