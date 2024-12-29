import React, {useState, useEffect } from "react";
import useRedirection from "../hooks/useRedirection";
import { useLocation } from "react-router-dom";


const Loading = () => {
    const [estado, setMsg] = useState(true);
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === '/finish') {
        setMsg(false);
      }
  }, [location]);

    useRedirection("/home", 5000);

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        {estado ?
          <span className="ml-4 text-lg font-medium text-gray-600">Cargando...</span> :
          <span className="ml-4 text-lg font-medium text-gray-600">Su compra es exitosa Volvamos al Inicio...</span> 
        }
        
       </div>
  
      );
}

export default Loading;
