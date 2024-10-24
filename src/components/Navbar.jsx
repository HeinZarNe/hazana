import { navbtns } from "@/constant";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full sticky h-fit flex items-center flex-col justify-center ">
      <div className=" flex-col w-full bg-gray-100  sm:px-3 md:flex hidden">
        <ul className="flex flex-row items-center justify-end py-1 gap-7 max-w-screen-xl">
          {navbtns.map((item, i) => (
            <li
              key={i + item}
              className="hover:text-accent text-[12px] cursor-pointer text-slate-500"
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full items-center justify-center sm:px-3 p-1 bg-white pb-5">
        <div className="flex flex-row flex-wrap items-center justify-center xs:justify-between  gap-1 sm:gap-3 w-full max-w-screen-xl">
          <div className="w-[150px] h-[40px] relative md:block hidden">
            <Image
              src={"/logo.jpg"}
              alt="logo"
              priority
              className="w-full h-full"
              fill
            />
          </div>
          <div className="min-w-[40px] h-[40px] relative md:hidden block">
            <Image
              src={"/squarelogo.jpg"}
              alt="logo"
              priority
              className="w-full h-full"
              fill
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-1 sm:gap-3">
            <div className="relative max-w-screen-sm lg:w-[500px] sm:w-[400px] w-[200px]  py-[12px]">
              <input
                type="text"
                placeholder="Search in Hazana"
                className="w-full bg-gray-100 h-[45px] pe-[50px] ps-5 rounded-s-sm focus-visible:outline-none"
              />
              <div className=" absolute top-[12px] right-0 h-[45px] w-[45px] flex items-center justify-center bg-accent text-white rounded-e-sm">
                <IoSearchOutline className="w-6 h-6" />
              </div>
            </div>
            <div className="relative w-fit h-max p-1 sm:p-3 cursor-pointer hover:bg-gray-100  rounded-full">
              <BsCart2 className="sm:w-8 sm:h-8 w-7 h-7 " />
              <p className="sm:text-sm text-xs flex items-center justify-center w-[20px] h-[20px] text-white  absolute top-[-2px] right-[-2px] sm:top-1 sm:right-1 bg-accent rounded-full">
                1
              </p>
            </div>
          </div>

          <Image
            src={"/newuser.jpg"}
            width={200}
            height={90}
            className=" min-w-[200px] lg:block hidden"
            alt="new user gift
          "
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
