import React, {useContext, useEffect, useState } from 'react';
import { CardBook } from "./CardBook";
import SideList from "./SideList";
import {BookContext} from "../context/BookContext";
import { SearchValueContext } from "../context/SearchValueContext";


const Home = () => {
  const { books } = useContext(BookContext);
  const { searchValue } = useContext(SearchValueContext);
  const [displayBooks, setDisplayBooks] = useState(books);

  useEffect(() => {
    if (searchValue) {
      const filteredBooks = books.filter((book) =>
        (book.name || "").toLowerCase().includes(searchValue.toLowerCase())
      );
      setDisplayBooks(filteredBooks);
    } else {
      setDisplayBooks(books); 
    }
  }, [searchValue, books]); 


    return (  
     <section className="pt-24 pl-5 flex gap-4 h-screen overflow-hidden">
        {/* SideList - Panel Lateral */}
        <div className="w-64 flex-shrink-0">  
          <SideList />
        </div>
      
        {/* Contenido Principal */}
        <div className="flex-grow overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 contentcard">
            {displayBooks.map((book) => (
              <CardBook
                key={book.id}
                id={book.id}
                name={book.name}
                Autor={book.autor}
                genero={book.genero}
                valor={book.valor}
                tipoRecurso={book.tipoRecurso}
                cantidad={book.cantidad}
                imagen={book.imagen}
              />
            ))}
          </div>
        </div>
      </section>      
      );
}

export default Home;
