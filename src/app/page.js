import Cross from "@/components/icons/Cross";
import ModalContainer from "@/components/partials/ModalContainer";
import AuthForm from "@/components/templates/AuthForm";
import CheckOTPForm from "@/components/templates/AuthForm/CheckOTPForm";
import SendOTPForm from "@/components/templates/AuthForm/SendOTPForm";
import SearchForm from "@/components/templates/SearchForm";
import api from "@/core/configs/api";
import { useGetProfile } from "@/core/services/queries";
import { flatten } from "flat";
import Link from "next/link";

export default async function Home({ searchParams }) {
  // console.log(searchParams);
  const { destinationId, originId, startDate, endDate } =
    (await searchParams) || {};
  // const { startDate, endDate } = date ? JSON.parse(date) : {};
  // const { destinationId, originId, startDate, endDate } = await searchParams || {};

  // console.log(destinationId, originId);
  // const flattedForm = flatten({ destinationId, originId, startDate, endDate });
  // console.log(flattedForm);

  const query = new URLSearchParams({
    destinationId: destinationId || "",
    originId: originId || "",
    startDate: startDate || "",
    endDate: endDate || "",
  }).toString();
  console.log(query);

  // const query = "originId=1&destinationId=2&date=undefined";
  const res = await fetch(
    `http://localhost:6500/tour${query ? `?${query}` : ""}`,
    { cache: "no-store" }
  );
  const tours = await res.json();
  console.log(tours);

  return (
    <div>
      <SearchForm pathname="/" />
      <Link href="/tours">همه تورها</Link>
      <ul>
        {tours.slice(0, 6).map((tour) => (
          <li key={tour.id}>{tour.title}</li>
        ))}
      </ul>
    </div>
  );
}
