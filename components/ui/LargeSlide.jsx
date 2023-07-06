import Image from "next/image";

function LargeSlide({ image, light, title, description, flag }) {
  return (
    <div className="relative w-[770px] h-[480px] rounded-tl-lg">
      <Image
        src={image}
        alt={title}
        width={1500}
        height={1500}
        className="w-full h-full"
      />
      <div
        className={`${
          light ? "text-[#292929]" : "text-[#EFF6F4]"
        } absolute top-10 left-3  `}
      >
        <h4 className="font-semibold font-montserrat text-md">Technologies</h4>
        <h4 className="text-sm font-normal font-montserrat">
          HTML, CSS, NODE.JS, React.JS
        </h4>
      </div>
      <div
        className={` ${
          light
            ? "bg-[rgba(255,255,255,0.1)] text-[#292929]"
            : "bg-[rgba(0,0,0,0.47) text-[#EFF6F4]"
        }  w-full absolute bottom-0 left-0 backdrop-blur-lg ] py-4 px-6`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <Image src={flag} alt="flag" width={28} height={20} />
              <h4 className="font-montserrat text-[20px] font-bold">{title}</h4>
            </div>
            <p className="font-montserrat text-[10px] max-w-[70%]">
              "{description}
            </p>
          </div>

          <div>
            <Image src="/btn.png" width={150} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeSlide;
