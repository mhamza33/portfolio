import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Modal from "react-modal";

const ImageSlider = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  const images = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/moon-rover-flat-composition-with-view-planetary-surface-with-lunar-roving-vehicle-astronaut-character-illustration_1284-61094.jpg",
      title: "Lorem Ipsum Dolor Sit Amet",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      image:
        "https://i.graphicmama.com/blog/wp-content/uploads/2018/06/18061810/Children-Book-Illustration-man-woman-and-dog.jpg",
      title: "Sed Do Eiusmod Tempor",
      desc:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      image:
        "https://www.amandahall-illustration.com/wp-content/uploads/2020/10/BIOGRAPHY-HERO-IMAGE.jpg",
      title: "Consectetur Adipiscing Elit",
      desc:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      image:
        "https://blog-cdn.reedsy.com/directories/admin/featured_image/417/large_how-to-become-a-childrens-book-illustrator-7396c5.jpg",
      title: "Tempor Incididunt",
      desc:
        "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 5,
      image:
        "https://www.vectornator.io/blog/content/images/2022/03/611b8c046cc4036b1b6fc8e2_Cover-Children-Book--1-.png",
      title: "Ut Labore Et Dolore Magna Aliqua",
      desc:
        "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const handleSlideClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setCurrentSlide(current)
  };

  return (
    <>

      {/* <button onClick={() => setModalIsOpen(true)}>Open Slider Modal</button> */}
      {/* <OpenSlider setModalIsOpen={setModalIsOpen} /> */}
      {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}> */}
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column"
          }}
          className="slider-container"
        >
          <Slider {...settings} ref={sliderRef}>
            {images.map((img) => (
              <div  key={img.id} className="slide">
                <img
                  style={{ height: "35vh", margin: "4rem auto 0px auto" }}
                  src={img.image}
                  alt={img.title}
                />
              </div>
            ))}
          </Slider>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="dots"
          >
            {images.map((img, index) => (
              <div
                key={img.id}
                className={index === currentSlide ? "dot active" : "dot"}
                onClick={() => handleSlideClick(index)}
              >
                <img src={img.image} alt={img.title} />
              </div>
            ))}
          </div>
        </div>
      {/* </Modal> */}
    </>
  );
};

export default ImageSlider;
