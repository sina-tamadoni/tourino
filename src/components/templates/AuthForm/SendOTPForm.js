// import api from "@/core/config/api";
import Cross from "@/components/icons/Cross";
import { useAuth } from "@/context/AuthProvider";
import { useSendOtp } from "@/core/services/mutations";
import React from "react";

function SendOTPForm({ mobile, setMobile }) {
  const { isPending, mutate } = useSendOtp();
  const { setStep } = useAuth();

  const sendHandler = async (e) => {
    e.preventDefault();
    if (isPending) {
      return;
    }

    mutate(
      { mobile },
      {
        onSuccess: ({ data }) => {
          console.log(data);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <form className=" flex flex-col justify-center items-center w-full h-full">
      <Cross className="w-full mt-1" />
      <h4 className="w-[133px] md:w-[169px] h-[43px] mt-[34px] font-[600] text-[22px] md:text-[28px] leading-[34px] md:leading-[43.4px] text-center">
        ورود به تورینو
      </h4>
      <div className="flex flex-col w-[278px] md:w-[491px] my-9 ">
        <label
          htmlFor="mobile"
          className="w-full h-[25px] leading-6 font-[300] text-base mb-[10px]"
        >
          شماره موبایل خود را وارد کنید:
        </label>
        <input
          name="mobile"
          placeholder="0912***4253"
          value={mobile}
          className="w-full h-[54px] p-4 outline-none rounded-md border border-1 border-[#00000040]"
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          type="submit"
          className="w-full h-[54px] bg-[#28A745] mt-[41px] border border-1 border-[#00000040] rounded-md font-[yekan] font-[500] text-lg leading-7 text-white"
          onClick={sendHandler}
        >
          ارسال کد تایید
        </button>
      </div>
    </form>
  );
}

export default SendOTPForm;
