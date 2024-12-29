import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


const Footer = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el colapso

  const collapse = () => {
    setIsOpen(!isOpen); // Cambia el estado al hacer clic
  };




  return (
    <footer className="bg-white text-gray-600 text-center py-4 bottom-0 left-0 w-full h-30">
      <div
        className="flex items-center justify-center bg-gray-200 cursor-pointer py-1"
        onClick={collapse}
      >
      {isOpen ? (
          <ChevronUpIcon className="w-5 h-3 text-gray-700 ml-2" />
        ) : (
          <ChevronDownIcon className="w-5 h-3 text-gray-700 ml-2" />
        )}
      </div>
      {isOpen && (
        <div className="bg-gray-50 text-center py-4">
          <div className="m-1 grid grid-cols-4 gap-4 items-center">
            <div className="flex flex-col items-center justify-center text-black font-semibold">
            <p>Socializando</p>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Compras</li>
              <li>Servicios</li>
            </ul>
            </div>
            <div className="flex flex-col items-center justify-center text-black font-semibold">
            <p>Ayuda/PQR</p>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Pedidos</li>
              <li>Comentarios</li>
            </ul>
            </div>
            <div className="flex flex-col items-center justify-center text-black font-semibold">
            <p> Mi cuenta</p>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Ingresar</li>
              <li>Registrarse</li>
              <li>Recuperar</li>
            </ul>
            </div>
            <div className="flex flex-col items-center justify-center text-black font-semibold">
            <p>Descuentos</p>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Aplicar</li>
    
            </ul>
            </div>
          </div>          
        </div>
      )}
       <div className="m-3 grid grid-cols-4 gap-4 items-center mt-4">
        <div className="flex items-center justify-center text-black font-semibold">
              Contactanos
        </div>
        <div className="flex items-center justify-center text-black font-semibold">
              Ayuda/PQR
        </div>
        <div className="flex items-center justify-center text-black font-semibold">
               Terminos y condiciones
        </div>
        <div className="flex items-center justify-center text-black font-semibold">
               WWW.relatosdepapel.com
        </div>
      </div>
      <p className="text-sm">© 2024 Relatos de Papel. Todos los derechos reservados.</p>

    </footer>
  );
};



export default Footer;
