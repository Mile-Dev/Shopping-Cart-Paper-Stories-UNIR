import React, {useState, useContext} from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import {BookContext} from "../context/BookContext";


const HeaderSearchBar = () => {
   
  return (
    <div className="col-span-4 relative">
      <div className="relative">
        <BookOpenIcon className="w-5 h-5 text-gray-500 absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Busca tu producto..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        />
      </div>
    </div>
  );
};

export default HeaderSearchBar;
