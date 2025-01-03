import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './routes/Router';
import {BookContext} from "./context/BookContext";
import {useBooks} from "./hooks/useBooks";
import { CarShoppingProvider } from "./hooks/useCartShoping";
import { SearchValueProvider  } from "./hooks/useSearchValue";

import './styles/styles.css'


function App() {
  const books = useBooks();


  return (
    <>
    <CarShoppingProvider>
    <BookContext.Provider value={{books }}>
    <SearchValueProvider>
     <Router> </Router> 
    </SearchValueProvider>
    </BookContext.Provider>   
    </CarShoppingProvider>  
    </>
  )
}

export default App
