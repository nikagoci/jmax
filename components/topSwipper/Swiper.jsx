"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";
import LargeSlide from "../ui/LargeSlide";
import SmallSlide from "../ui/SmallSlide";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./swiper.css";
import "swiper/css";

const slides = [
  {
    image: "/slides/screen1-big.png",
    size: "big",
    light: false,
    title: "UAI. Underwater acoustics international",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/usa.png",
  },
  {
    image: "/slides/screen1-small.png",
    size: "small",
    light: false,
    title: "UAI. Underwater acoustics international ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/usa.png",
  },
  {
    image: "/slides/screen2-big.png",
    size: "big",
    light: false,
    title: "Бира Батя Прошек",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    flag: "/flags/usa.png",
  },
  {
    image: "/slides/screen2-small.png",
    size: "small",
    light: false,
    title: "Бира Батя Прошек",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/usa.png",
  },
  {
    image: "/slides/screen3-big.png",
    size: "big",
    light: false,
    title: "Loren Networks ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen3-small.png",
    size: "small",
    light: false,
    title: "Loren Networks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen4-big.png",
    size: "big",
    light: false,
    title: "Grand Royale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen4-small.png",
    size: "small",
    light: false,
    title: "Grand Royale",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing... ",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen5-big.png",
    size: "big",
    light: true,
    title: "MyCopywriter.io",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen5-small.png",
    size: "small",
    light: true,
    title: "MyCopywriter.io",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen6-big.png",
    size: "big",
    light: true,
    title: "GD Media Ltd.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen6-small.png",
    size: "small",
    light: true,
    title: "GD Media Ltd.",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen7-big.png",
    size: "big",
    light: true,
    title: "Conso4s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/uk.png",
  },
  {
    image: "/slides/screen7-small.png",
    size: "small",
    light: true,
    title: "Conso4s",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/uk.png",
  },
  {
    image: "/slides/screen8-big.png",
    size: "big",
    light: true,
    title: "Camissafashion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen8-small.png",
    size: "small",
    light: true,
    title: "Camissafashion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/bulgaria.png",
  },
  {
    image: "/slides/screen9-big.png",
    size: "big",
    light: false,
    title: "Beatclub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    flag: "/flags/usa.png",
  },
  {
    image: "/slides/screen9-small.png",
    size: "small",
    light: false,
    title: "Beatclub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    flag: "/flags/usa.png",
  },
];

const MySwiper = () => {
  const [slideCount, setSlideCount] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [scrollValue, setScrollValue] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  // console.log(slideCount);
  // console.log(scrollValue);
  //   const handleSlideChange = (swiper) => {

  // setActiveIndex(swiper.activeIndex);
  //   };

  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
    setScrollValue((220 / slideCount) * swiper.realIndex);
    // console.log(scrollValue);
  };
  console.log(activeIndex);
  return (
    <>
    <div className="relative flex sm:hidden mt-4 w-[50%] mx-auto line">
          <Image src="/Group 159.svg" alt="scroll" width={280} height={6} />
          <div className="absolute transform -translate-y-1/2 top-1/2 ">
            <Image
              src="/Group 160.svg"
              alt="circle"
              width={14}
              height={14}
              className="transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${scrollValue + 220 / slideCount}px)`,
              }}
            />
          </div>
        </div>
      <div className="flex items-center justify-between w-full xl:justify-end md:px-8 lg:px-24 scrool h-36 pr-9 lg:pr-32">
        <div className="relative hidden sm:flex">
          <Image
            src="/finger.svg"
            alt="scroll"
            width={63}
            height={56}
            className="finger"
          />
          <Image
            src="/fingerarrow.svg"
            alt="scroll"
            width={43}
            height={56}
            className="absolute -top-1 left-9 rotate-12"
          />
        </div>
        <div className="relative justify-center hidden w-full sm:flex line">
          <Image src="/Group 159.svg" alt="scroll" width={280} height={6} />
          <div className="absolute transform -translate-y-1/2 top-1/2 ">
            <Image
              src="/Group 160.svg"
              alt="circle"
              width={14}
              height={14}
              className="transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${scrollValue + 220 / slideCount}px)`,
              }}
            />
          </div>
        </div>
        <div className="flex sm:hidden"></div>

        <div className="flex ml-5 gap-x-8 swiper-count">
          <Image src="/arrow.svg" alt="scroll" width={15} height={2} />
          <p className="text-2xl font-medium">
            <span className="text-primary"> {activeIndex + 1}</span>/
            {slideCount}
          </p>
          <Image src="/arrowr.svg" alt="arrow" width={15} height={2} />
        </div>
        <div className="relative flex sm:hidden ">
          <Image
            src="/finger.svg"
            alt="scroll"
            width={63}
            height={56}
            className="finger"
          />
          <Image
            src="/fingerarrow.svg"
            alt="scroll"
            width={43}
            height={56}
            className="absolute -top-1 left-9 rotate-12"
          />
        </div>
      </div>
      <Swiper
        onActiveIndexChange={handleChange}
        modules={[Navigation, Pagination, Scrollbar]}
        loop={true}
        mousewheel={true}
        spaceBetween={20}
        slidesPerView="auto"
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
        className="!h-[500px] !w-full "
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            style={{ width: slide.size === "big" ? "770px" : "260px" }}
            key={idx}
          >
            {slide.size === "big" ? (
              <LargeSlide
                image={slide.image}
                light={slide.light}
                title={slide.title}
                description={slide.description}
                flag={slide.flag}
              />
            ) : (
              <SmallSlide
                image={slide.image}
                light={slide.light}
                title={slide.title}
                description={slide.description}
                flag={slide.flag}
              />
            )}
          </SwiperSlide>
        ))}
        {/* <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen1-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen1-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen2-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen2-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen3-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen3-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen4-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen4-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen5-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen5-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen6-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen6-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen7-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen7-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen8-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen8-small.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "770px" }}>
          <LargeSlide image="/screen9-big.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "260px" }}>
          <SmallSlide image="/screen9-small.png" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default MySwiper;
