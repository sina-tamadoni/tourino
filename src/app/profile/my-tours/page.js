"use client";
import { useGetUserTours } from "@/core/services/queries";

function MyTours() {
  const { data } = useGetUserTours();
  console.log(data);

  return <div>My tours</div>;
}

export default MyTours;
