"use client";

import { useAuth } from "@/context/AuthProvider";
import ModalContainer from "./ModalContainer";
import api from "@/core/configs/api";
import { useState } from "react";
import { convertNum } from "@/core/utils/convertNumToPersian";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/core/services/mutations";
import toast from "react-hot-toast";
import { getCookie } from "@/core/utils/cookie";

function AddToCartButton({ tourId, price, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("");
  const { mutate } = useAddToCart();

  function submitHandler() {
    mutate(tourId, {
      onSuccess: (data) => {
        setIsOpen(true);
        setMessage(data.data.message);
      },
      onError: (error) => {
        console.log(error.message);
        if (
          error.message ===
          "Cannot read properties of null (reading 'accessToken')"
        ) {
          toast.error("برای رزرو تور باید ثبت نام کنید!");
        }
      },
    });

    // try {
    //   setIsOpen(true);
    //   //   const basketTour = await api.put(`basket/${tourId}`);
    //   //   console.log(basketTour);
    //   setMessage(basketTour.data.message);
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <>
      <button type="submit" onClick={() => submitHandler(tourId)}>
        افزودن به سبد خرید
      </button>
      {isOpen && (
        <Modal
          message={message}
          setIsOpen={setIsOpen}
          price={price}
          title={title}
        />
      )}
    </>
  );
}

export default AddToCartButton;

function Modal({ message, setIsOpen, price, title }) {
  const router = useRouter();

  return (
    <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[358px] md:w-[561px] h-[362px] mx-4 bg-white rounded-[20px] drop-shadow-md px-[10px] md:px-[7px]">
          <span className="bg-blue-200" onClick={() => setIsOpen(false)}>
            close
          </span>
          <div>
            <h1>{message}</h1>
            <hr />
            <div className="flex justify-between items-center">
              <span>{title}</span>
              <span>{convertNum(price)}تومان</span>
            </div>
            <button onClick={() => router.push("/cart")}>
              مشاهده سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
