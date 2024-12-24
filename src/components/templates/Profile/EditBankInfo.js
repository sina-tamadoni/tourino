import { useUpdatePersonalInfo } from "@/core/services/mutations";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function EditBankInfo({ user, setPage }) {
  const { mutate, isPending } = useUpdatePersonalInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setPage(1);
        },
        onError: (error) => toast.error(error.message),
      }
    );
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="h-[294px] md:h-[115px] flex flex-col justify-start gap-6 border border-1 border-[#00000033] rounded-[10px] py-4 px-5"
    >
      <p className="text-base font-[yekan] leading-6 font-[400]">
        ویرایش اطلاعات حساب بانکی
      </p>
      <div className="flex flex-col h-full justify-between items-center *:w-full *:h-10 *:border *:border-1 *:border-[#00000080] *:rounded-[5px] *:text-sm *:font-[400] font-[yekan] *:leading-[21.7px] *:text-[#00000080]">
        <input
          defaultValue={user?.data?.payment?.debitCard_code}
          {...register("debitCard_code")}
          placeholder="شماره کارت"
          className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
        />
        <input
          defaultValue={user?.data?.payment?.accountIdentifier}
          {...register("accountIdentifier")}
          placeholder="شماره حساب"
          className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
        />

        <input
          defaultValue={user?.data?.payment?.shaba_code}
          {...register("shaba_code")}
          placeholder="شماره شبا"
          className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
        />
      </div>
      <div className="flex justify-between ite gap-4 *:flex-1 *:p-2 *:rounded-[5px] text-base font-[yekan] font-[600] leading-[24.8px]">
        <button type="submit" className="bg-custom-green text-white">
          تایید
        </button>
        <button
          onClick={() => setPage(1)}
          className="text-custom-green border border-1 border-custom-green"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}

export default EditBankInfo;
