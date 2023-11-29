// import React, { useEffect, useState, useRef } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const SmallSlider = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const carouselRef = useRef(null);

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 464);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleSlideChange = (currentIndex, totalSlides) => {
//     if (currentIndex === totalSlides - 1) {
//       // Reset to the first slide
//       carouselRef.current.goToSlide(0);
//     }
//   };

//   return (
//     <div>
//       <Carousel
//         ref={carouselRef}
//         responsive={responsive}
//         autoPlay={!isMobile}
//         autoPlaySpeed={3000}
//         afterChange={(currentIndex, totalSlides) =>
//           handleSlideChange(currentIndex, totalSlides)
//         }
//       >
//         <div>
//           <img src={require("../images/img1.jpg")} alt="Image 1" />
//         </div>
//         <div>
//           <img src={require("../images/img2.jpg")} alt="Image 2" />
//         </div>
//         <div>
//           <img src={require("../images/img3.jpg")} alt="Image 3" />
//         </div>
//         <div>
//           <img src={require("../images/img4.jpg")} alt="Image 4" />
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default SmallSlider;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./SmallSlider.css"; // Import your own CSS for styling

// const SmallSlider = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const responsive = [
//     {
//       breakpoint: 4000,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 3000,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 464,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ];

//   const settings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     autoplay: !isMobile,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive,
//   };

//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 464);
//   };

//   window.addEventListener("resize", handleResize);

//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           <img src={require("../images/img1.jpg")} alt="Image 1" />
//         </div>
//         <div>
//           <img src={require("../images/img2.jpg")} alt="Image 2" />
//         </div>
//         <div>
//           <img src={require("../images/img3.jpg")} alt="Image 3" />
//         </div>
//         <div>
//           <img src={require("../images/img4.jpg")} alt="Image 4" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default SmallSlider;

import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SmallSlider.css";

const SmallSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 464);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBeforeChange = (oldIndex, newIndex, totalSlides) => {
    if (newIndex === totalSlides) {
      // Loop back to the first slide
      carouselRef.current.goToSlide(0);
      return false; // Prevent the default slide change
    }
    return true; // Allow the slide change
  };

  return (
    <div className="carousel-container">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        autoPlay={!isMobile}
        autoPlaySpeed={3000}
        beforeChange={handleBeforeChange}
        className="carousel-carousel"
      >
        <div>
          <img style={{width: "100%", height: '250px'}}  src={require("../images/img1.jpg")} alt="Image 1" />
        </div>
        <div>
          <img style={{width: "100%", height: '250px'}}  src={require("../images/img2.jpg")} alt="Image 2" />
        </div>
        <div>
          <img style={{width: "100%", height: '250px'}} src={require("../images/img3.jpg")} alt="Image 3" />
        </div>
        <div>
          <img style={{width: "100%", height: '250px'}} src={require("../images/img4.jpg")} alt="Image 4" />
        </div>
        <div>
          <img style={{width: "100%", height: '250px'}}  src={require("../images/img1.jpg")} alt="Image 1" />
        </div>
        <div>
          <img style={{width: "100%", height: '250px'}}  src={require("../images/img2.jpg")} alt="Image 2" />
        </div>
        <div>
          <img style={{width: "100%", height: '250px'}} src={require("../images/img3.jpg")} alt="Image 3" />
        </div>
        <div>
          <img style={{width: "100%", height: '250px'}} src={require("../images/img4.jpg")} alt="Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default SmallSlider;
