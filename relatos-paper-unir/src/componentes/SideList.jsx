import React from "react";

const SideList = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Primera Lista */}
      <div className="p-4">
    <h3 className="text-lg text-left font-bold text-black mb-2">Categorias</h3>
            <ul className="list-none space-y-1">
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="todo"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="todo" className="text-sm text-gray-800">
                  Todo
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="artes"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="artes" className="text-sm text-gray-800">
                  Artes
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="arquitectura"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="arquitectura" className="text-sm text-gray-800">
                  Arquitectura
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="diseño"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="diseño" className="text-sm text-gray-800">
                  Diseño
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="fotografia"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="fotografia" className="text-sm text-gray-800">
                  Fotografia
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="literatura"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="literatura" className="text-sm text-gray-800">
                    Literatura
                </label>
              </li>
            </ul>
        </div>

      {/* Segunda Lista */}
      <div className="flex flex-col">
      <h3 className="text-lg text-left font-bold text-black mb-2">Fecha de lanzamiento</h3>
        <label htmlFor="fecha" className="text-sm text-left mb-1 text-gray-800">
          Seleccione fecha:
         </label>
          <input
            type="date"
            id="fecha"
            className="bg-white border text-gray-800 border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
  </div>

      {/* Tercera Lista */}
  <div className="p-4">
    <h3 className="text-lg text-left font-bold text-black mb-2">Recomendaciones</h3>
            <ul className="list-none space-y-1">
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="vendidos"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="vendidos" className="text-sm text-gray-800">
                  Mas vendidos
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="antiguos"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="antiguos" className="text-sm text-gray-800">
                 Mas antiguos
                </label>
              </li>
              <li className="flex items-start">
                <input
                  type="checkbox"
                  id="economicos"
                  className="mr-2 w-4 h-4 accent-blue-500"
                />
                <label htmlFor="economicos" className="text-sm text-gray-800">
                  Mas economicos
                </label>
              </li>
            </ul>
        </div>
      </div>
  );
};

export default SideList;
