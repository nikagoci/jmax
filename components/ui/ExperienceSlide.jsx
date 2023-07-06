import Image from "next/image"

function ExperienceSlide({image, title, children, numeration}) {
    return (
        <>
        <Image
            src={image}
            alt="icon"
            width={80}
            height={80}
            className="mt-6 "
          />
          <Image
            src="/Vector 8 (1).svg"
            alt="line"
            width={202}
            height={2}
            className="w-1/2 "
          />

          <p className="flex gap-4 mt-6 ">
            <span className="text-2xl font-semibold font-montserrat">{numeration}.</span>
            <span className="text-xl font-bold font-donpoligrafbum text-primary">
              {title}{" "}
            </span>
          </p>
          <p className="mt-6 text-lg font-semibold leading-7 w-96">
            {/* It is a long established{" "}
            <span className="font-bold underline">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span> */}
            {children}
          </p></>
    )
}

export default ExperienceSlide