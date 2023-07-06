import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className=" relative bg-[rgba(24,32,30,1)] py-4 px-16 ">
        <Image className="absolute top-0 left-0 w-full h-full " src='/Vector 19.png' width={100} height={100}  />
        <div className="flex items-center justify-center py-6">
          <Image width={67} height={100} alt="logo" src="/logo.svg" />
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row gap-y-6">
          <div className="md:flex hidden text-[#51C14F] gap-x-2">
          <h5>+1 234 67 89</h5>
          <h5>jmax@mail.com</h5>
        </div>
          <ul className="flex font-montserrat text-sm gap-x-4 text-[#EFF6F4]">
            <li>Portfolio</li>
            <li>Prices</li>
            <li>Develop Process</li>
            <li>F.A.Q</li>
          </ul>
          <div className="flex gap-x-4 text-[#51C14F]">
            <Image
              src="/facebook.png"
              className="w-[24px] h-[24px]"
              width={24}
              height={24}
              alt="facebook"
            />
            <Image
              src="/instagram.png"
              className="w-[24px] h-[30px]"
              width={24}
              height={24}
              alt="instagram"
            />
            <Image
              src="/linkedin.png"
              className="w-[24px] h-[24px]"
              width={24}
              height={24}
              alt="linkedin"
            />
          </div>
          <div className="flex text-[#51C14F] gap-x-4 md:hidden">
            <h5>+1 234 67 89</h5>
            <h5>jmax@mail.com</h5>
          </div>
        </div>
      </div>
      <ul className="py-4 bg-black flex justify-center gap-x-8 text-[#7D7D7D]">
        <li>Privacy Policy</li>
        <li>2023 JMAX</li>
        <li>Terms of use</li>
      </ul>
    </footer>
  );
}

export default Footer;
