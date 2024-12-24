import { useAuth } from "@/context/AuthProvider";
import React from "react";

function ModalContainer({ children }) {
  const { isOpen, setIsOpen } = useAuth();
  if (!isOpen) return;

  return (
    <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[358px] md:w-[561px] h-[362px] mx-4 bg-white rounded-[20px] drop-shadow-md px-[10px] md:px-[7px]">
            {children}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
