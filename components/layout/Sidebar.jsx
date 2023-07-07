/* This example requires Tailwind CSS v2.0+ */
// import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'

import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", count: 3, current: false },
  { name: "Projects", href: "#", count: 4, current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", count: 12, current: false },
  { name: "Reports", href: "#", current: false },
];

function Sidebar({setOpenSidebar}) {
  return (
    <div className="absolute z-[100] sm:w-[90%] lg:w-[40%] flex flex-col w-full h-screen md:w-[60%] ">
      <div className="bg-gradient-to-l backdrop-blur-lg from-[rgba(29,33,28,1)] to-[rgba(16,17,16,1)] absolute w-full h-full -z-10" />
      <div className="absolute w-8 h-auto text-white right-10 top-14 lg:left-16 ">
        <Image src="/close-icon.png" alt="close" className="cursor-pointer" width={20} height={20} onClick={() => setOpenSidebar(false)} />
      </div>
      <div className="flex justify-center pt-8 lg:hidden">
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={80}
          className="w-[54px] mt-2 lg:mt-6 m-auto translate-y-3 lg:translate-y-1 lg:w-[120px]"
        />
      </div>
      <div  className="hidden lg:pt-16 lg:flex" />
      <ul className="flex flex-col gap-y-8 text-[#EFF6F4] p-16 text-xl font-bold ">
        <li className="hover:text-[#51C14F] hover:underline transition duration-150 cursor-pointer">Portfolio</li>
        <li className="hover:text-[#51C14F] hover:underline transition duration-150 cursor-pointer">Develop Process</li>
        <li className="hover:text-[#51C14F] hover:underline transition duration-150 cursor-pointer">Prices</li>
        <li className="hover:text-[#51C14F] hover:underline transition duration-150 cursor-pointer">F.A.Q</li>
        <li className="hover:text-[#51C14F] hover:underline transition duration-150 cursor-pointer">Team</li>
      </ul>

      <div className="flex gap-x-4 text-[#51C14F] px-16 mt-48">
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
    </div>
  );
}

export default Sidebar;
