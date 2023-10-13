import React, { useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Controller } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import Header from "@components/Header";
import Footer from "@components/Footer";

const initHeaderSwiper = [
  {
    mainDate: 31,
    mainMounth: "Aug",
    mainYear: 2020,
    dateTitle: "Launch: New STAMINA4Space Website",
    dateContent: "Welcome to the new website! Hope you like the new look.",
    img: 'https://stamina4space.upd.edu.ph/wp-content/uploads/2020/08/website-post-1.jpg',
  },
  {
    mainDate: 31,
    mainMounth: "Oct",
    mainYear: 2020,
    dateTitle: "ULyS³ES Inauguration 1st Anniversary",
    dateContent: "",
    img: 'https://stamina4space.upd.edu.ph/wp-content/uploads/2019/09/ULY1.jpeg',
  },
  {
    mainDate: 24,
    mainMounth: "Sep",
    mainYear: 2020,
    dateTitle: "Maya-2 Turnover to JAXA",
    dateContent: "",
    img: 'https://stamina4space.upd.edu.ph/wp-content/uploads/2020/08/maya-2-website.jpg',
  },
  {
    mainDate: 7,
    mainMounth: "Oct",
    mainYear: 2020,
    dateTitle: "Data Brew 4",
    dateContent: "Data Brew 4: Space and Ground Data for the Betterment of Human Condition.",
    img: 'https://stamina4space.upd.edu.ph/wp-content/uploads/2020/10/DATA-BREW_webiste-1.jpg',
  },
  {
    mainDate: 8,
    mainMounth: "Oct",
    mainYear: 2020,
    dateTitle: "Start Up In Space",
    dateContent: "Start Up in Space: Opportunities for R&D and Commercialization in the Field of Space S&T Applications",
    img: 'https://stamina4space.upd.edu.ph/wp-content/uploads/2020/10/WEBSITE.jpg',
  },
]

function Event() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  // Configure Swiper options
  const swiperOptions = {
    loop: true,
    autoplay: {
      // delay: 2000, // Delay between slides in milliseconds (e.g., 2 seconds)
      // disableOnInteraction: false, // Allow autoplay to continue after user interaction
    },
    onSlideChange: handleOnSwiper,
  };

  function handleOnSwiper(swiper) {
    setCurrentIndex(swiper?.activeIndex || 0)
  }

  const displayHeaderSwiper = useMemo(() => {
    let returnValue = []

    initHeaderSwiper.map((headerSwiper, idx) => {
      returnValue.push(
        <SwiperSlide key={idx}>
          <div className="event__nav-date-container">
            <div className="event__date-container">
              <div className="event__main-date">
                {headerSwiper.mainDate}
              </div>
              <div className="event__date-myear">
                <span> {headerSwiper.mainMounth}</span>
                <span> {headerSwiper.mainYear}</span>
              </div>
            </div>
            <div className="event__date-content-container">
              <div className="event__date-title">
                {headerSwiper.dateTitle}
              </div>
              <div className="event__date-content">
                {headerSwiper.dateContent}
              </div>
            </div>
          </div>
        </SwiperSlide>
      )
    })

    return returnValue
  }, [initHeaderSwiper])

  const displayFooter = useMemo(() => {
    let swiper = initHeaderSwiper[currentIndex]

    return (
      <>
        <div className="event__date-title">
          {swiper.dateTitle}
        </div>
        <div className="event__date-content">
          {swiper.dateContent}
        </div>
      </>
    )
  }, [initHeaderSwiper, currentIndex])

  const displaySwiperImg = useMemo(() => {
    let returnValue = []

    initHeaderSwiper.map((headerSwiper, idx) => {
      returnValue.push(
        <SwiperSlide key={idx} className="d-flex justify-content-center">
          <img className="lazyload event__swiper-img" src={headerSwiper.img} />
        </SwiperSlide>
      )
    })

    return returnValue
  }, [initHeaderSwiper])

  return (
    <>
      <Header />

      {/* main containt */}
      <div className="row mx-0">
        <div className="container event">
          <div className="event__title">
            Events
          </div>
          <div className="event__gallery row">
            <Swiper
              {...swiperOptions}
              modules={[Autoplay, Controller]}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
            >
              {displayHeaderSwiper}
            </Swiper>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Swiper
            loop={true}
            modules={[Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            className="mx-1 mb-2 mt-2"
          >
            {displaySwiperImg}
          </Swiper>
        </div>
        <div className="row mb-5">
          {displayFooter}
        </div>
      </div>

      <div className="row mx-0">
        <Footer />
      </div>
    </>
  )
}

export default Event;
