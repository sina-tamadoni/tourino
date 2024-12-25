import SearchForm from "@/components/templates/SearchForm";
import Link from "next/link";
import React from "react";

export default async function Tours({ searchParams }) {
  const { destinationId, originId, startDate, endDate } =
    (await searchParams) || {};

  const query = new URLSearchParams({
    destinationId: destinationId || "",
    originId: originId || "",
    startDate: startDate || "",
    endDate: endDate || "",
  }).toString();
  console.log(query);

  const res = await fetch(
    `http://localhost:6500/tour${query ? `?${query}` : ""}`,
    { cache: "no-store" }
  );
  const tours = await res.json();
  console.log(tours);
  return (
    <div>
      <SearchForm pathname="/tours" />
      <ul>
        {tours.length === 0 ? (
          <div>موردی یافت نشد</div>
        ) : (
          tours.map((tour) => (
            <Link key={tour.id} href={`tours/${tour.id}`}>
              <li>{tour.title}</li>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
}
