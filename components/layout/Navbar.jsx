import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="h-28 md:h-[123px] w-full flex justify-between bg-transparent z-50  fixed overflow-hidden px-9 lg:px-24">
        <div className="left-container flex items-center relative w-[43%] lg:w-[40%] h-[80px] lg:h-[120px] border-b-[1px] border-b-primary">
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={7}
            height={7}
            className="absolute -bottom-1 right-[23px] lg:right-28"
          />
          <div className="menu-container w-20 lg:border-r-[1px] border-r-primary ">
            <Image
              src="/menu.svg"
              alt="menu"
              width={38}
              height={26}
              className=""
            />
          </div>
          <p className="hidden ml-10 text-lg font-semibold text-white font-montserrat lg:block">
            {" "}
            +1 234 56 78 90
          </p>
        </div>
        <div className="right-container  gap-2 flex justify-between relative w-[55%] lg:w-[58%] h-[80px] lg:h-[120px] border-b-[1px] border-b-primary">
          <div className="w-full -translate-x-8 border-l border-r logo-container lg:translate-x-0 lg:w-60 h-14 lg:h-20 border-primary">
            <Image
              src="/logo.svg"
              alt="logo"
              width={90}
              height={80}
              className="w-[54px] mt-2 lg:mt-6 m-auto translate-y-3 lg:translate-y-1 lg:w-[90px]"
            />
          </div>
          <div className="flex items-center justify-center w-full h-full lg:hidden">

          <p className="block font-bold text-white font-montserrat lg:ml-9 text-md lg:font-semibold sm:text-lg lg:hidden">
            {" "}
            +1 234 56 78 90
          </p>
          </div>
          <div className="relative z-30 items-center justify-around hidden buttons-container lg:flex xl:w-96 h-28">
            <Link href="#" className="relative z-0 lg:w-5/12">
              <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
              <Image
                src="/get consulting btn.svg"
                alt="button"
                width={170}
                height={54}
                className="w-full"
              />
            </Link>
            <Link href="#" className="lg:w-5/12">
              <Image
                src="/order free audit.svg"
                alt="button"
                width={170}
                height={54}
                className="w-full"
              />
            </Link>
          </div>
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={7}
            height={7}
            className="absolute -bottom-1 right-20 lg:right-80"
          />
        </div>
        <Image
          src="/Vector 19.png"
          alt="greenlight"
          width={1098}
          height={593}
          className="absolute top-0 right-0 z-0 green-light"
        />
      </nav>
    </div>
  );
};

export default Navbar;
