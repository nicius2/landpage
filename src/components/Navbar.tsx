import logoDesktop from "../assets/LogoDesktop.svg";
import logoMobile from "../assets/LogoMobile.svg";

export function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-between p-8 w-full max-w-[70rem] ">
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

        <div className="gap-6 flex items-center ">

          {/* links */}
          <a href="/" className="text-[#2C85FC] text-sm hidden md:block"> 
            Home
          </a>
          <a href="#" className="text-gray-100 text-sm hidden md:block">
            blog
          </a>

          {/* button*/}
          <div>
            <button className="text-black bg-white px-4 py-2 rounded-full hover:bg-blue-100">
              Começar
            </button>
          </div>

          {/* menu hamburguer */}
          
        </div>
      </div>
    </div>
  );
}
