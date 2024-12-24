"use client";

import { useGetProfile } from "@/core/services/queries";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

function Layout({ children }) {
  // const { data, isLoading, error } = useGetProfile();
  // console.log(data);
  // console.log(isLoading);
  return (
    <div>
      <Header />
      {/* <div className="px-[29px] xl:px-[126px] w-full">{children}</div> */}
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
