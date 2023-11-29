import React from "react";
import "./MyCard.css";

const MyCard = () => {
  const dataList = [
    {
      Image: require("../images/img-news.jpg"),
      title: "DESIGN & BUILD",
      description:
        "Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei",
    },
    {
      Image: require("../images/img-news1.jpg"),
      title: "RENOVATION",
      description:
        "Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei",
    },
    {
      Image: require("../images/img-news2.jpg"),
      title: "TILING AND PANTING",
      description:
        "Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei",
    },
  ];
  return (
    <div class="container">
      <div className="wrap-news">
        {dataList.map((item) => {
          return (
            <>
              <div
                class="card"
                data-aos="zoom-in-up"
                data-aos-offset="50"
                data-aos-delay="10"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                style={{ width: "18rem" }}
              >
                <img
                  class="card-img-top"
                  src={item.Image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h3 class="card-title">{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#" class="btn btn-light">
                    MORE DETAILS
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

export default MyCard;
