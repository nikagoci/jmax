import Image from "next/image";

function TeamSection() {
  return (
    <section className="team-section-container relative flex flex-col xl:flex-row-reverse xl:justify-between items-end w-fullpx-9 lg:px-32 mt-[80px] pb-16 sm:mt-[100px] xl:mt-[160px] pt-12 xl:pb-[120px] xl:pt-[151px] ">
      <Image
        src="/tlight.svg"
        alt="green top"
        fill
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src="/blight.svg"
        alt="green bottom"
        fill
        className="absolute bottom-0 right-0 z-0 "
      />
      <div className="first-container relative z-20  xl:w-[35%] flex xl:flex-col items-end ">
        <div className="flex flex-col items-start justify-between w-12 h-full first-left-container xl:w-20 xl:hidden ">
          <div className="line-container relative w-[68px] xl:w-[138px] rotate-90 origin-left -translate-x-2 -translate-y-5">
            <hr className="w-[full] border-primary border-t-[1px]" />
            <Image
              src="/Rectangle 15.svg"
              alt="rectangle"
              width={7}
              height={7}
              className="absolute -bottom-[3px] -left-[2px] "
            />
          </div>
          <p className="-rotate-90 origin-bottom-left text-[10px] sm:text-xs xl:text-base translate-x-6 text-secondary w-[130px] xl:w-[209px] ">
            Landing pages & online shops optimized for higher conversion rate
          </p>
        </div>
        <div className="first-right-container ">
          <div className="flex items-center justify-end big-text text-gold">
            <p>
              <span className="font-montserrat text-[18px] xl:text-[37px] font-light underline ">
                our
              </span>{" "}
              {""}
              <span className="font-donpoligrafbum text-[20px] sm:text-[36px] xl:text-[33px] 2xl:text-[56px] font-bold gold-underline xl:ml-2 ">
                TEAM{" "}
              </span>
            </p>
            <hr className="w-[30px] sm:w-[40px] xl:w-[58px] h-1 border-gold border-t-[7px] sm:border-t-[10px] xl:border-t-[13px] ml-5 xl:ml-5 " />
          </div>
          <p className="text-secondary text-base sm:text-lg xl:text-[22px] 2xl:text-4xl w-full mt-3 xl:mt-10 text-end pr-6 xl:pr-12 ">
            of developing products of
          </p>
          <p className="text-secondary text-base sm:text-lg xl:text-[22px] 2xl:text-4xl text-end">
            varying complexity
          </p>
          <p className="font-montserrat text-[#EFF6F4] text-[10px] sm:text-sm xl:text-lg mt-3 xl:mt-16">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
        </div>
      </div>
      <div className="second-container xl:max-w-[700px] flex relative z-20 mt-10 xl:mt-0">
        <div className="flex-col items-start justify-between hidden w-16 left-container xl:flex ">
          <div className="line-container relative w-[40%] xl:w-[138px] rotate-90 origin-left xl:mt-10">
            <hr className="w-[full] border-primary border-t-[1px]" />
            <Image
              src="/Rectangle 15.svg"
              alt="rectangle"
              width={7}
              height={7}
              className="absolute -bottom-[3px] -left-[2px] "
            />
          </div>
          <div className="-rotate-90 origin-bottom-left translate-x-16 text-secondary xl:w-[209px] ">
            Landing pages & online shops optimized for higher conversion rate
          </div>
        </div>
        <div className="right-container flex flex-wrap justify-center items-end xl:w-[750px] gap-10 2xl:gap-20 ">
          <div className="flex flex-col items-center gap-2 person-container">
            <div className="frame w-[74px] h-[74px] hover:scale-110 rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/5.svg"
                alt="rectangle"
                width={50}
                height={50}
                className=""
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              John Done
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 person-container">
            <div className="frame w-[74px] h-[74px] hover:scale-110 rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/5.svg"
                alt="rectangle"
                width={50}
                height={50}
                className=""
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              John Done
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 manager-container">
            <div className="frame w-[74px] h-[74px] hover:scale-110 rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/5.svg"
                alt="rectangle"
                width={50}
                height={50}
                className=""
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              Mike Green
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Preject Manager
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 person-container">
            <div className="frame w-[74px] h-[74px] hover:scale-110 rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/5.svg"
                alt="rectangle"
                width={50}
                height={50}
                className=""
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              John Done
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 person-container">
            <div className="frame w-[74px] h-[74px] hover:scale-110 rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/5.svg"
                alt="rectangle"
                width={50}
                height={50}
                className=""
              />
            </div>
            <p className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              John Done
            </p>
            <p className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Marketer
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 z-0 w-full overflow-hidden top-9">
        <div className="waves h-[550px] w-[3200px] relative z-0">
          <Image
            src="/wawes.webp"
            alt="wave"
            width={5690}
            height={550}
            className="absolute w-[5690px] max-h-[550px] -z-10"
          />
        </div>
      </div>{" "}
    </section>
  );
}

export default TeamSection;
