"use client";
import { useGetUserTransactions } from "@/core/services/queries";

function Transactions() {
  const { data } = useGetUserTransactions();
  console.log(data);

  return <div>Transactions</div>;
}

export default Transactions;
