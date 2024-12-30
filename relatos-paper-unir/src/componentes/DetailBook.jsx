import React, {useContext, useState}  from "react";
import DetailCardBook from './DetailCardBook';
import { useParams } from 'react-router-dom';
import {BookContext} from "../context/BookContext";
import {CarShopingContext} from "../context/CarShopingContext";
import { Link } from "react-router-dom";


const DetailBook = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    
        if (!books || books.length === 0) {
            return <p>Cargando libro...</p>;
          }
          const book = books.find((b) => String(b.id) === String(bookId));
          
        if (!book) {
            return <h2>Libro no encontrado</h2>;
        }
        const [quantity, setQuantity] = useState(1);
        
        const { cart, totalItems,  addToCart, removeFromCart,} = useContext(CarShopingContext);
       
        const handleAddToCart = () => {
          if (quantity < 1) {
            alert("La cantidad debe ser al menos 1");
            return;
          }
          if (quantity > book.cantidad) {
            alert(`No puedes agregar más de ${book.cantidad} unidades al carrito.`);
            return;
          }  
          addToCart(book, quantity); 
        };

    return (
      <section className="mt-14">
        <div className="grid grid-cols-3 gap-4">
          {/* Primera Columna */}
          <div className="card col-span-1 max-w-xs p-4 mx-auto">
            <DetailCardBook />
          </div>

          {/* Segunda Columna (más ancha) */}
          <div className="col-span-2 max-w-6xl p-4 mx-auto" style={{ width: '60rem'}}>
            <div className="p-4 items-start">
              <h1 className="text-2xl  text-red-600 font-extrabold">
                <strong>{book.name}</strong>
              </h1>
            </div>
            <div className="  p-4 items-start">
              <h3 className="text-base text-black font-bold inline">
                  {book.autor} <span className="text-sm text-orange-900">(Autor)</span> .
                  {book.editorial} <span className="text-sm text-orange-900">(Editorial)</span> .
                  {book.encuadernacion} <span className="text-sm text-orange-900">(Encuadernación)</span>
              </h3>
            </div>
            <div className="bg-gray-100 p-4 items-start rounded-md text-left flex justify-around">
                  {/* esta es la Columna izquierda */}
                  <div>
                      <div>
                      <h3 className="text-base text-red-800 font-extrabold">
                          Libro {book.estado}
                      </h3>
                      </div>
                      <div className="mt-2">
                      <label htmlFor="cantidad" className="text-lg font-bold text-gray-700">
                          Cantidad:
                      </label>
                      <input
                          id="cantidad"
                          value={quantity}
                          type="number"
                          min="1"
                          defaultValue="1"
                          className="bg-white text-black ml-2 w-20 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                          onChange={(e) => setQuantity(Number(e.target.value))}
                      />
                      </div>
                      <div>
                      <h3 className="text-base text-green-800 font-extrabold">
                          Quedan {book.cantidad} unidades en stock
                      </h3>
                      </div>
                  </div>

                  {/* esta es la  Columna derecha */}
                  <div className="flex flex-col items-center">
                      <button onClick={handleAddToCart}
                        className="bg-orange-600 text-white font-bold py-2 px-14 rounded hover:bg-red-600">
                      Agregar al carrito
                      </button>   
                      <p className="mt-2 text-lg text-gray-700 font-extrabold">
                      Precio: {book.valor}
                      </p>
                  </div>
            </div>
            <div className="p-4 items-start text-left">
                      <h1 className="text-2xl  text-red-600 font-extrabold">
                        Reseña del libro
                  </h1>
                  <p className="text-lg text-black font-bold">
                        {book.reseña}
                  </p>
            </div>
            <div className="flex justify-around">
              <div>
                <Link to={`/home/`}>
                    <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
                        Agregar Producto
                    </button>
                </Link>
              </div>
              <div>
                <Link to={`/shoppingcar`}>
                      <button className="bg-blue-500 text-white py-1 px-4 rounded mt-4 hover:bg-blue-600">
                          Finalizar compra
                      </button>
                  </Link>
              </div>
            </div>

          </div>
        </div>
      </section>  

);
};
export default DetailBook;
