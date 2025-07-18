import { useState } from "react";
import logoDesktop from "../assets/LogoDesktop.svg";
import logoMobile from "../assets/LogoMobile.svg";
import Hamburger from 'hamburger-react'
import { ResponsiveNavbar } from "./ResponsiveNavbar";



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex justify-center items-center flex-col">
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
          <div className="md:hidden z-50"> {/* Adicione z-50 aqui */}
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={20}
              color={isOpen ? "#000" : "#fff"} />
          </div>
        </div>
      </div>
      <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}
