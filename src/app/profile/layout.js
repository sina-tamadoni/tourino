"use client";

import { dashboardLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <hr className="w-full md:hidden" />
      <div className="w-full h-screen flex flex-col md:flex-row gap-4 md:gap-8 mt-[14px] px-[32px] md:px-[126px]">
        <div className="w-full border-b-[1px] md:border md:border-1 md:w-[284px] md:h-[170px] md:rounded-[10px] border-[#00000040] md:overflow-hidden">
          <ul className="flex md:divide-y md:divide-[#00000033] md:flex-col md:h-full md:w-full justify-between items-center h-[29px] text-[12px] md:text-[14px] font-[400] leading-[18.6px] md:leading-[21.7px] font-[yekan]">
            {dashboardLinks.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <li
                  key={name}
                  className={`${
                    isActive
                      ? "text-[#28A745] border-b-2 border-[#28A745] md:bg-[#28A74540] md:border-0"
                      : undefined
                  } w-[92px]  md:w-full text-center md:text-right flex justify-center md:justify-start items-end h-full pb-[5px] md:items-center md:h-1/3`}
                >
                  <Link
                    className="md:w-full md:h-full md:flex md:items-center md:px-5"
                    href={href}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </>
  );
}

export default Layout;
