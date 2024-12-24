"use client";

import { useGetTours } from "@/core/services/queries";
import { DateToISO } from "@/core/utils/DateToISO";
import { flatten } from "flat";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";

function SearchForm({ pathname }) {
  const [query, setQuery] = useState("");
  const { handleSubmit, register, control } = useForm();
  const { data } = useGetTours(query);
  const router = useRouter();
  const searchParams = useSearchParams();
  //   const allOrigins = data?.data.map((tour) => tour.origin);
  //   const uniqueOrigins = Array.from(
  //     new Map(allOrigins?.map((origin) => [origin?.id, origin])).values()
  //   );

  useEffect(() => {
    if (searchParams) {
      router.replace(pathname);
    }
  }, []);

  const submitHandler = (form) => {
    const flattedForm = flatten(form);
    const query = new URLSearchParams(flattedForm).toString();
    setQuery(query);
    router.push(`${pathname}?${query}`);
  };
  return (
    <form
      className="bg-green-100 flex gap-5 p-5 w-fit m-auto"
      onSubmit={handleSubmit(submitHandler)}
    >
      <select {...register("originId")}>
        <option value="1">تهران</option>
        <option value="1">سنندج</option>
        <option value="1">اصفهان</option>
      </select>
      <select {...register("destinationId")}>
        <option value="1">سنندج</option>
        <option value="2">مادرید</option>
        <option value="3">سلیمانیه</option>
        <option value="4">هولر</option>
        <option value="5">مازندران</option>
        <option value="6">کویر</option>
        <option value="7">ایتالیا</option>
      </select>
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <DatePicker
            round="x2"
            accentColor="#28A745"
            onChange={(e) => {
              onChange({
                startDate: DateToISO(e.from),
                endDate: DateToISO(e.to),
              });
            }}
            range
          />
        )}
      />

      {/* <Controller
    control={control}
    name="date"
    render={({ field: { onChange } }) => (
      <DatePicker
        round="x2"
        accentColor="#28A745"
        onChange={(e) =>
          onChange({
            startDate: DateToIso(e.from),
            endDate: DateToIso(e.to),
          })
        }
        range
      />
    )}
  /> */}
      <input
        type="submit"
        className="!bg-green-500 text-xs p-2 text-white !border-0"
      />
    </form>
  );
}

export default SearchForm;
