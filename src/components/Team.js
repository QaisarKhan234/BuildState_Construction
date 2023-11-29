import React from "react";
import "./Team.css"

const Team = () => {
    const teamData = [
        {
            image: require("../images/team-img1.jpg"),
            heading: "John Doe",
            span: "Project Manager",
            icons: (
                <div className="custom-icons">
                    <i className="fa-brands fa-facebook-f cc"></i>
                    <i className="fa-brands fa-twitter cc"></i>
                    <i className=" fa-brands fa-linkedin-in cc"></i>
                </div>
            )
        },

        {
            image: require("../images/team-img2.jpg"),
            heading: "Renita",
            span: "Project Director",
            icons: (
                <div className="custom-icons">
                    <i className="fa-brands fa-facebook-f cc"></i>
                    <i className="fa-brands fa-twitter cc"></i>
                    <i className=" fa-brands fa-linkedin-in cc"></i>
                </div>
            )
        },
        {
            image: require("../images/team-img3.jpg"),
            heading: "Steve Makelew",
            span: "CEO",
            icons: (
                <div className="custom-icons">
                    <i className="fa-brands fa-facebook-f cc"></i>
                    <i className="fa-brands fa-twitter cc"></i>
                    <i className=" fa-brands fa-linkedin-in cc"></i>
                </div>
            )
        },
        {
            image: require("../images/team-img4.jpg"),
            heading: "Jess Parker",
            span: "Business Dev",
            icons: (
                <div className="custom-icons">
                    <i className="fa-brands fa-facebook-f cc"></i>
                    <i className="fa-brands fa-twitter cc"></i>
                    <i className=" fa-brands fa-linkedin-in cc"></i>
                </div>
            )
        },
    ]
  return (
    <div className="container custom-container">
      <div className="wrap-news cd">
        {teamData.map((item, index) => {
          return (
            <>
              <div className="card card-hover">    
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title">{item.heading}</h3>
                  <p>{item.span}</p>
                  <a href="#">
                    {item.icons}
                  </a>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
