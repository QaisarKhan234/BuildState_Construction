import React from "react";
import "./YellowPage2.css";
const YellowPage2 = () => {
  return (
    <div className="yellowpage">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-1">
           <div className="milestone-counter"> 
            <div className="icon">
              <i class="fa-regular fa-clock"></i>
            </div>

            <div className="highlight">1822</div>

            <div className="milestone-details">Hours</div></div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-1">
           <div className="milestone-counter"> 
            <div className="icon">
            <i class="fa-regular fa-copy"></i>
            </div>

            <div className="highlight">922</div>

            <div className="milestone-details">Projects Completed</div></div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-1">
           <div className="milestone-counter"> 
            <div className="icon">
            <i class="fa-solid fa-arrow-rotate-left"></i>
            </div>

            <div className="highlight">600</div>

            <div className="milestone-details">Clients Repeated</div></div>
          </div>


          <div className="col-md-3 col-sm-6 col-xs-1">
           <div className="milestone-counter"> 
            <div className="icon">
            <i class="fa-solid fa-crown"></i>
            </div>

            <div className="highlight">432</div>

            <div className="milestone-details">Clients Satisfied</div></div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default YellowPage2;
