import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../componentes/Loading';
import Home from '../componentes/Home';
import Footer from '../componentes/FooterApp';
import Header from '../componentes/Header';
import DetailBook from '../componentes/DetailBook';
import ShoppingCar from '../componentes/ShoppingCar';


function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/home" element={<Layout><Home/></Layout>} />
                <Route path="/detail/:bookId" element={<Layout><DetailBook/></Layout>} />
                <Route path="/shoppingcar" element={<Layout><ShoppingCar/></Layout>} />
                <Route path="/finish" element={<Loading />} />
                <Route path="*" element={<Loading />} />
            </Routes>
        </BrowserRouter>
        );
}

const Layout = ({children}) => (
    <>
        <Header /> {/* Agregamos el Header */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Agregamos el Footer */}
      
    </>
);
export default Router;
