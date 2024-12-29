import React, {useContext}  from "react";
import { CogIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import {CarShopingContext} from "../context/CarShopingContext";
import { Link } from "react-router-dom";


const HeaderIcons = () => {
  const { cart, totalItems,  addToCart, removeFromCart} = useContext(CarShopingContext);

  return (
    <>
      <div className="col-span-1 flex items-center justify-center text-black font-semibold">
        <CogIcon className="w-10 h-10 text-black cursor-pointer hover:text-blue-500" />
      </div>
      <div className="col-span-1 flex items-center justify-center text-black font-semibold">
        <UserIcon className="w-10 h-10 text-black cursor-pointer hover:text-blue-500" />
      </div>
      <div className="col-span-1 flex items-center justify-center text-black font-semibold">
         
          <ShoppingCartIcon className="w-10 h-10 text-black cursor-pointer hover:text-blue-500" />
          <p className="text-lg text-white   font-bold">
                          {cart.length}
            </p>
            
      </div>
    </>
  );
};

export default HeaderIcons;
