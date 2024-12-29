import React, {useContext}  from "react";
import { useParams } from 'react-router-dom';
import {BookContext} from "../context/BookContext";
import { Link } from "react-router-dom";

export const DetailCardBook = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);

    if (!books || books.length === 0) {
        return <p>Cargando libro...</p>;
      }
    
      const book = books.find((b) => String(b.id) === String(bookId));

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }

    return (
        <>
        <div className="card max-w-xs p-4 mx-auto">
        <h3 className="text-lg text-gray-600 font-bold">{book.name}</h3>
        {/* Mostrar la imagen */}
        <img
            src={book.imagen}
            alt={`Portada del libro Cambiar por el nombre`}
            className="w-full h-25 object-cover rounded-lg my-1"
        />
        <p className="text-sm text-gray-800 text-left">Formato: <strong className="text-red-900"> {book.formato}</strong></p>
        <p className="text-sm text-gray-800 text-left">Autor: <strong className="text-red-900"> {book.autor}</strong></p>
        <p className="text-sm text-gray-800 text-left">Editorial: <strong className="text-red-900"> {book.editorial}</strong></p>
        <p className="text-sm text-gray-800 text-left">Coleccion: <strong className="text-red-900"> {book.coleccion}</strong></p>
        <p className="text-sm text-gray-800 text-left">Año:<strong className="text-red-900">  {book.año}</strong></p>
        <p className="text-sm text-gray-800 text-left">Idioma:<strong className="text-red-900">  {book.idioma}</strong></p>
        <p className="text-sm text-gray-800 text-left">N de paginas: <strong className="text-red-900"> {book.numeroPaginas}</strong></p>
        <p className="text-sm text-gray-800 text-left">Encuadernacion:<strong className="text-red-900">  {book.encuadernacion}</strong></p>
        <p className="text-sm text-gray-800 text-left">Dimensiones:<strong className="text-red-900">  {book.dimensiones}</strong></p>
        <p className="text-sm text-gray-800 text-left">ISBN: <strong className="text-red-900"> {book.isbn}</strong></p>
        <p className="text-sm text-gray-800 text-left">ISBN13:<strong className="text-red-900">  {book.isbn13}</strong></p>
        <p className="text-sm text-gray-800 text-left">Numero de edición:<strong className="text-red-900">  {book.numeroEdicion}</strong></p>
        <p className="text-sm text-gray-800 text-left">Categorías:<strong className="text-red-900">  {book.categorias}</strong></p> 
    </div>

    </>
    );
}

export default DetailCardBook;
