"use client";

import Link from "next/link";
import HamburgerIcon from "../icons/HamburgerMenu";
import SignIn from "../icons/SignIn";
import TorinoH from "../icons/TorinoH";
import { navLinks } from "@/constants/constants";
import User from "../icons/User";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { convertNum } from "@/core/utils/convertNumToPersian";
import ArrowDown from "../icons/ArrowDown";
import Image from "next/image";

function Header() {
  const pathname = usePathname();
  const { setStep, setIsOpen, user, isLoggedIn, isLoading } = useAuth();
  console.log(user);

  const mobile = user?.data?.mobile || null;
  // if (isLoggedIn) {
  //   console.log(user.data.mobile);
  // }

  return (
    <header className="px-[29px] lg:px-[126px] w-full h-10 md:h-[74px] mt-[16px] md:mt-0">
      {/* mobile design */}
      <div className="flex justify-between items-center md:hidden w-full ">
        <HamburgerIcon />
        {!isLoggedIn ? (
          <SignIn onClick={() => console.log("sign in mobile")} />
        ) : (
          <button className="flex justify-center items-center gap-1 w-[122px] h-[22px] p-2">
            <Image
              src="../../../icons/user.svg"
              alt="user"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "14px", height: "14px" }}
            />
            <span className="text-[#28A745] w-[92px] h-[22px] font-[yekan] font-[500] leading-[21.88px] text-[14px]">
              {isLoading ? "Loading..." : convertNum(mobile)}
            </span>
            <Image
              src="../../../icons/arrow-down.svg"
              alt="user"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "14px", height: "14px" }}
            />
          </button>
        )}
      </div>
      {/* web design */}
      <div className="hidden md:flex justify-between items-center w-full h-full">
        <div className="flex justify-between items-center gap-2 md:gap-2 lg:gap-10">
          <TorinoH />
          <ul className="md:w-[499px] w-[390px] h-[25px] flex justify-around items-center font-[400] text-base leading-6">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname.endsWith(href);
              return (
                <li
                  key={name}
                  className={isActive ? "text-[#28A745]" : undefined}
                >
                  <Link href={href}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {!isLoggedIn ? (
          <button
            className="flex justify-center items-center gap-2 :w-[167px] h-11 p-2 border-2 border-[#28A745] rounded-lg"
            onClick={() => {
              setIsOpen(true);
              setStep(1);
            }}
            disabled={isLoading}
          >
            <span className="text-[#28A745] w-full h-full font-[500] leading-7 text-[18px] flex items-center justify-center gap-2">
              {isLoading ? (
                <div className="h-full flex justify-center items-center gap-1 bg-white">
                  <div className="h-2 w-2 bg-[#28A745] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 bg-[#28A745] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-[#28A745] rounded-full animate-bounce"></div>
                  Loading
                </div>
              ) : (
                "ورود | ثبت نام"
              )}
            </span>
          </button>
        ) : (
          <button className="flex justify-center items-center gap-1 w-[180px] h-11 p-2 ">
            <User />
            <span className="text-[#28A745] h-full font-[yekan] font-[500] leading-7 text-[18px]">
              {isLoading ? "Loading..." : convertNum(mobile)}
            </span>
            <ArrowDown />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
