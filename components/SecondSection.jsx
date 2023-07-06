"use client";

import Image from "next/image";
import AnimatedWaves from "./ui/AnimatedWaves";
import MySwiper from "./topSwipper/Swiper";
import { motion, useScroll } from "framer-motion";

const SecondSection = () => {
  const { scrollYProgress } = useScroll();

  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <div className="w-full font-montserrat">
      <section className="pt-16 px-9 lg:px-32 xl:pt-40 xl:flex xl:justify-between">
        <div className="w-full left-container xl:w-4/12">
          <p className="flex gap-3 lg:gap-4">
            {" "}
            <motion.span
              className="text-lg font-light underline lg:text-4xl"
              initial={{ x: "-100px" }}
              whileInView={{ x: "0px" }}
              transition={{ duration: 2 }}
              // style={{ transform: `translateX(${transformX})` }}
            >
              Нашето
            </motion.span>{" "}
            <motion.span
              className="text-xl text-gold font-donpoligrafbum lg:text-4xl"
              initial={{ y: "-100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              ПОРТ
            </motion.span>
            <span className="font-bold text-5xl lg:text-8xl relative bottom-8 lg:bottom-[70px] ">
              {" "}
              _
            </span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-40 text-xl translate-x-24 -translate-y-5 text-gold gold-underline font-donpoligrafbum lg:text-4xl lg:translate-x-48 lg:-translate-y-10"
          >
            ФОЛИО
          </motion.p>
        </div>
        <div className="flex w-full right-container xl:w-7/12 xl:pl-9">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src="/Group-118.webp"
              alt="logo"
              width={105}
              height={110}
              className="h-32"
            />
          </motion.div>
          <motion.p
            initial={{ x: "100px", opacity: 0 }}
            whileInView={{ x: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full text-xs font-semibold underline sm:text-sm lg:text-lg xl:max-w-4xl"
          >
            Тук нашите конкуренти слагат фейк ревюта от несъществуващи свои
            клиенти.{" "}
            <span className="green-underline text-[#44937D] ">
              Ние не правим така! Вместо това Ви приканваме, да позвъните по
              телефона, на който и да е от нашите клиенти и да ги попитате
              лично, дали са доволни от работата ни.
            </span>
            Всички проекти в нашето портфолио, са с активни линкове към тях.{" "}
          </motion.p>
        </div>
      </section>
      <div>
        {/* <AnimatedWaves /> */}
        <MySwiper />
      </div>
    </div>
  );
};

export default SecondSection;
