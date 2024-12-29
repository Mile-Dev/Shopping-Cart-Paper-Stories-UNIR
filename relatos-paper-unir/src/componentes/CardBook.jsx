import React from "react";
import { Link } from "react-router-dom";

export const CardBook = ({ id, name, autor, genero, valor, tipoRecurso, cantidad, imagen }) => {
    return (
        <div className="bg-white card max-w-xs border border-gray-300 rounded-lg p-4 shadow-md mx-auto">
            <div className="titlecard">
                <h3 className="text-lg text-gray-600 font-bold">{name}</h3>
            </div>
        {/* Mostrar la imagen */}
        <img
            src={imagen}
            alt={`Portada del libro ${name}`}
            className="w-full h-25 object-cover rounded-lg my-1"
        />
        <p className="text-sm text-gray-800 text-left">Autor: {autor}</p>
        <p className="text-sm text-gray-800 text-left">Género: {genero}</p>
        <p className="text-sm text-gray-800 text-left">Valor: {valor}</p>
        <p className="text-sm text-gray-800 text-left">Tipo de Recurso: {tipoRecurso}</p>
        <p className="text-sm text-gray-800 text-left">Cantidad: {cantidad}</p>

        {/* Enlace para más detalles */}
        <Link to={`/detail/${id}`}>
            <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
                Ver detalles
            </button>
        </Link>
    </div>
    );
}