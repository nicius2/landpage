import Hamburger from 'hamburger-react'
import type { Dispatch, SetStateAction } from 'react';

interface ResponsiveNavbar {
    isOpen: Boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>; // Correct type for setIsOpen
}

export function ResponsiveNavbar({ isOpen, setIsOpen }: ResponsiveNavbar) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40 md:hidden">
          {/* Overlay escuro que cobre toda a tela */}
          <div className="absolute top-0 right-0 h-screen w-64 bg-white shadow-lg p-4 flex flex-col items-end">
            {/* O conteúdo do menu, com cor de fundo branca */}
            <div
              className=" p-4 rounded-full mb-4 cursor-pointer" // Adicione cursor-pointer
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
            >
             
            </div>

            <ul className="text-black text-lg w-full"> {/* Adicione w-full para preencher a largura */}
              <li className="py-2"><a href="#">Home</a></li>
              <li className="py-2"><a href="#">About</a></li>
              <li className="py-2"><a href="#">Blog</a></li>
              <li className="py-2 mt-4"> {/* Adicione um pouco de margem superior para o botão */}
                <button className="bg-[#2C85FC] text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full"> {/* w-full para o botão preencher */}
                  Começar
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}