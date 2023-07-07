"use client";
import { useState } from "react";

import Image from "next/image";
import Input from "./ui/Form/Input";
import Radio from "./ui/Form/Radio";
import Checkbox from "./ui/Form/Checkbox";

function OrderSection() {
  const [value, setValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <section className="flex flex-col py-6 lg:flex-row">
      <div className="lg:flex lg:basis-1/2 lg:flex-col lg:justify-center lg:gap-y-6">
        <div className="flex items-center justify-between px-16 lg:px-6 big-text text-gold">
          <span className="font-montserrat text-[18px] xl:text-[37px] font-light underline ">
            Do
          </span>{" "}
          {""}
          <span className="font-donpoligrafbum text-[20px] sm:text-[36px] xl:text-[33px] 2xl:text-[56px] font-bold xl:ml-2 ">
            YOU WANT{" "}
          </span>
          <hr className="w-[45px] sm:w-[40px] xl:w-[58px] h-1 border-gold border-t-[7px] sm:border-t-[10px] xl:border-t-[13px] ml-5 xl:ml-5 " />
        </div>
        <div className="px-16 py-4 text-center w-fit text-[rgba(41,41,41,1)] font-montserrat">
          <h5>
            to order a website or <br />
            application
          </h5>
        </div>
        <div className="flex items-center gap-x-8">
          <Image
            src="/Group 40.png"
            alt="rectangle"
            width={68}
            height={10}
            className="w-[68px] h-[10px]"
          />
          <h4 className="text-[#44937D] font-montserrat max-w-[140px]">
            ro do you have <span className="underline">questions?</span>
          </h4>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className="z-10 flex flex-col items-start w-full px-16 py-6 gap-y-4 lg:basis-1/2 "
      >
        <Input placeholder="Paul" />
        <Input placeholder="Phone" />
        <Input placeholder="Email" />
        <div>
          <Radio
            title="I don't have a website"
            id="no-web"
            setValue={setValue}
            selected={value === "no-web"}
          />
          <Radio
            title="I have a website and want to order a review"
            id="web"
            setValue={setValue}
            selected={value === "web"}
          />
        </div>
        <Checkbox
          title="I agree to the rules of personal data processing"
          id="rules"
        />
        <div className="flex justify-center w-full py-4">
          <button type="submit">
            <Image
              src="/submit.png"
              alt="submit"
              width={270}
              height={80}
              className="w-[270px] h-[80px]"
            />
          </button>
        </div>
      </form>
    </section>
  );
}

export default OrderSection;
