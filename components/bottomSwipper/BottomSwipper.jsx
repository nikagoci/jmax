"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import "./bottomSwiper.css";
import "swiper/css";

import ExperienceSlide from "../ui/ExperienceSlide";

const BottomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };
  console.log(activeIndex);
  return (
    <div className="flex flex-col items-start md:flex-row">
      <div className={`relative flex mt-6 bg-transparent -z-10`}>
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
      <Swiper
        // loop={true}
        freeMode={true}
        mousewheel={true}
        spaceBetween={50}
        slidesPerView="auto"
        onActiveIndexChange={handleChange}
        className="!w-full !flex !justify-between"
      >
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 85.svg"
            title="QUESTIONNAIRE"
            numeration="01"
          >
            It is a long established{" "}
            <span className="font-bold underline">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </ExperienceSlide>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 86.svg"
            title="WIREFRAME"
            numeration="02"
          >
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
          </ExperienceSlide>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 87.svg"
            title="COPYWRITING"
            numeration="03"
          >
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
          </ExperienceSlide>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 87.svg"
            title="FIGMA DESIGN"
            numeration="04"
          >
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
          </ExperienceSlide>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide image="/Group 87.svg" title="Video" numeration="05">
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
          </ExperienceSlide>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 87.svg"
            title="DEVELOPMENT"
            numeration="06"
          >
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
          </ExperienceSlide>
        </SwiperSlide>
        {/* <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 87.svg"
            title="SEO SPEED"
            numeration="07"
          >
            <p className="mt-6 text-lg font-semibold leading-7 w-96">
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
            </p>
          </ExperienceSlide>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 87.svg"
            title="SOCIAL MEDIA GOOGLE ADS FB ADS IG ADS
            TIK TOK"
            numeration="08"
          >
            <p className="mt-6 text-lg font-semibold leading-7 w-96">
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
            </p>
          </ExperienceSlide>
        </SwiperSlide>
        <SwiperSlide className="!w-[400px] !h-96 px-6 !bg-white">
          <ExperienceSlide
            image="/Group 87.svg"
            title="FURTHER IMPROVEMENT & OPTIMIZATION"
            numeration="09"
          >
            <p className="mt-6 text-lg font-semibold leading-7 w-96">
              It is a long established{" "}
              <span className="font-bold underline">
                fact that a reader will be distracted
              </span>{" "}
              by the readable content of a page when looking at its layout.
              <span className="underline">The point of using Lorem Ipsum</span>
            </p>
          </ExperienceSlide>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default BottomSwiper;
