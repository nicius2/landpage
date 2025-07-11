import { useState } from "react";
import logoDesktop from "../assets/LogoDesktop.svg";
import logoMobile from "../assets/LogoMobile.svg";
import { IoMenu } from "react-icons/io5";
import { ResponsiveNavbar } from "./ResponsiveNavbar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-between p-8 w-full max-w-[70rem]">
        {/* logo para aparecer para o mobile */}
        <div>
          <img
            src={logoMobile}
            alt="logo do Site"
            className="md:hidden block h-8 w-auto"
          />

          {/* logo para o desktop */}
          <img
            src={logoDesktop}
            alt="logo do site"
            className="hidden md:block h-8 w-auto"
          />
        </div>

        <div className="md:gap-6 gap-2 flex items-center ">

          {/* links */}
          <a href="/" className="text-[#2C85FC] hover:text-blue-200 text-sm hidden md:block">
            Home
          </a>
          <a href="#" className="text-gray-100 hover:text-blue-300 text-sm hidden md:block">
            blog
          </a>

          {/* button*/}
          <div>
            <button className="text-black bg-white px-4 py-2 rounded-full hover:bg-blue-100">
              Começar
            </button>
          </div>

          {/* menu hamburguer */}
          <div className="bg-[#20242C] hover:bg-gray-800 p-4 rounded-full md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <IoMenu className="text-xl text-gray-100" />
          </div>
        </div>
      </div>
        <ResponsiveNavbar isOpen={isOpen}/>
    </div>
  );
}
