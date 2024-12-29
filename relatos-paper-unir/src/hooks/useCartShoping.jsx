import { useState} from "react";
import { CarShopingContext } from "../context/CarShopingContext";


export const useCartShoping = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Función para calcular el total de elementos
  const calculateTotalItems = (updatedCart) => {
    return updatedCart.reduce((total, item) => total + item.quantity, 0);
  };

    // Agregar un libro al carrito
    const addToCart = (book, quantity) => {
      setCart((prevCart) => {
        const existingBook = prevCart.find((item) => item.id === book.id);
  
        let updatedCart;
        if (existingBook) {
          // Si ya existe, actualizamos la cantidad
          updatedCart = prevCart.map((item) =>
            item.id === book.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          // Si no existe, lo agregamos
          updatedCart = [...prevCart, { ...book, quantity }];
        }
  
        // Actualizamos el total de elementos
        setTotalItems(calculateTotalItems(updatedCart));
  
        return updatedCart;
      });
    };
  
    const removeFromCart = (id) => {
      setCart((prevCart) => {
        const updatedCart = prevCart.filter((item) => item.id !== id);
  
        // Actualizamos el total de elementos
        setTotalItems(calculateTotalItems(updatedCart));
  
        return updatedCart;
      });
    };

    return {
        cart,
        totalItems,
        addToCart,
        removeFromCart,
      };
    
};

export const CarShoppingProvider = ({ children }) => {
    const cartContextValue = useCartShoping();
  
    return (
      <CarShopingContext.Provider value={cartContextValue}>
        {children}
      </CarShopingContext.Provider>
    );
  };