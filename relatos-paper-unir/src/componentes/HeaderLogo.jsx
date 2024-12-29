import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const HeaderLogo = () => {
  return (
    <div className="col-span-1 flex items-center">
      <BookOpenIcon className="w-10 h-10 text-black mr-2" />
      <span className="text-sm font-bold text-black">Relatos de Papel</span>
    </div>
  );
};

export default HeaderLogo;
