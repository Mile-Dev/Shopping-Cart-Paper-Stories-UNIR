import React, {useState, useContext, useRef, useEffect } from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import {BookContext} from "../context/BookContext";
import { SearchValueContext } from "../context/SearchValueContext";


const HeaderSearchBar = () => {
  const { updateSearchValue } = useContext(SearchValueContext); 

// se controla que por cada silaba no se realice una busqueda
  const [inputValue, setInputValue] = useState(""); 
  const timerRef = useRef(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value); 
  
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      updateSearchValue(value); 
      timerRef.current = null; 
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);


  return (
    <div className="col-span-4 relative">
      <div className="relative">
        <BookOpenIcon className="w-5 h-5 text-gray-500 absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Busca tu producto..."
          value={inputValue}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        />
      </div>
    </div>
  );
};

export default HeaderSearchBar;
