import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import "./Offer.css";

const Offer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  return (
    <div className="bg">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        className="bg"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <img
          src={img1}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
        <img
          src={img2}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
        <img
          src={img3}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
        <img
          src={img4}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
        <img
          src={img8}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
        <img
          src={img5}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
        <img
          src={img6}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
        <img
          src={img7}
          style={{
            display: "block",
            height: "100%",
            margin: "auto",
            width: "100%",
          }}
          alt=""
        />
      </Carousel>
      ;
    </div>
  );
};

export default Offer;
