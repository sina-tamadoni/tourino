import AddToCartButton from "@/components/partials/AddToCartButton";
import ModalContainer from "@/components/partials/ModalContainer";

export const revalidate = 60 * 60; // 1hour
export async function generateStaticParams() {
  const tours = await fetch("http://localhost:6500/tour").then((res) =>
    res.json()
  );
  return tours.map((tour) => ({ id: tour.id }));
}

export default async function TourDetails({ params }) {
  const { tour } = await params;

  const selectedTour = await fetch(`http://localhost:6500/tour/${tour}`).then(
    (res) => res.json()
  );
  console.log(selectedTour);

  return (
    <div>
      <h1>{selectedTour.title}</h1>
      <div>
        <span>تاریخ رفت</span>
        <span>{selectedTour.startDate}</span>
      </div>
      <div>
        <span>تاریخ برگشت</span>
        <span>{selectedTour.endDate}</span>
      </div>
      <div>
        <span>حمل و نقل</span>
        <span>{selectedTour.fleetVehicle}</span>
      </div>
      <div>
        <span>قیمت</span>
        <span>{selectedTour.price}</span>
      </div>
      <AddToCartButton tourId={selectedTour.id} price={selectedTour.price} title={selectedTour.title}/>
    </div>
  );
}
