import React, { useContext } from "react";
import { CarShopingContext } from "../context/CarShopingContext";
import { Link } from "react-router-dom";


const ShoppingCar = () => {
  const { cart, totalItems, addToCart, removeFromCart, clearCart  } = useContext(CarShopingContext);

  return (
    <section className="m-6 pt-24 pl-5 gap-4 h-screen overflow-hidden">
      <div>
       <h1 className="text-wrap font-bold text-amber-950 text-2xl mx-28 shadow">Carrito de Compras</h1>
      </div>
    <div className="w-full shadow-black mt-11">  
        {cart.map((item) => (
          <div>
          <div className="flex justify-center gap-14  w-full">
            <div className="w-52">
             <img
                  src={item.imagen}
                  alt={`Portada del libro ${item.name}`}
                  className="w-full h-40 object-cover rounded-lg my-1"
              />
            </div>
            <div className="w-52 p-4 text-gray-800 ">
              <ul className="pl-5 text-left">
               <li>
                  <strong>Nombre:</strong>
                  <label> {item.name} </label>
               </li>
               <li>
                <strong>Editorial:</strong> 
                 <label> {item.editorial} </label>
               </li>  
               <li>
                  <strong>Idioma:</strong>
                  <label> {item.idioma} </label>
                </li>
                <li>
                  <strong>Estado:</strong>
                  <label> {item.estado} </label>
                </li>
                <li>
                  <strong>unidades:</strong>
                  <label> {item.quantity} </label>
                </li>
              </ul>
            </div>
            <div className="p-4 flex flex-col items-start ">
            <ul className="text-left space-y-8">
              <li key={item.id} className="flex flex-col">
                <div className="flex justify-items-center mt-2">
                  <span className="text-lg font-extrabold text-gray-600 mr-2">➔ Valor Unitario:</span>
                  <span className="text-base font-bold text-black">{item.valor}</span>
                </div>
                </li>
                <li>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
                </li>
             
            </ul>
            </div>  
          </div>
          <div className="border-b border-gray-600 w-11/12 mx-auto my-4"></div>

          </div>
        ))}
        
    </div>
    <div className="flex justify-around">
      <div>
      <h2 className="text-wrap font-bold text-amber-950 text-2xl mx-28 shadow">Total de libros: {totalItems}</h2>
      </div>
      <div>
        <Link to={`/home/`}>
          <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
              Volver al inicio
              </button>
                </Link>
              </div>
              <div>
                <Link to={`/finish`}>
                      <button 
                      onClick={() => clearCart()}
                      className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
                          Comprar
                      </button>
                  </Link>
              </div>
            </div>
    </section>      

  );
};

export default ShoppingCar;

