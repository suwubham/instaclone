import React from "react";
import Image from "next/image";
import fulllogo from "../assets/instafulllogo.png";
import minilogo from "../assets/instaminilogo.png";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import profilepic from "../assets/profilepic.png";

function Header() {
  return (
    <div className="shadow-sm border-b sticky bg-white z-50">
      <nav className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image src={fulllogo} alt="insta logo" fill objectFit="contain" />
        </div>

        <div className="relative w-10 lg:hidden cursor-pointer">
          <Image src={minilogo} alt="insta logo" fill objectFit="contain" />
        </div>

        {/* Middle */}
        <div className="mt-1 relative p-3 max-w-xs">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="rounded-md bg-gray-50 pl-10 sm:text-sm border-gray-300 focus:border-black focus:ring-black"
          />
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-4">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="w-6 h-6 text-gray-500 md:hidden" />
          <div className="relative navBtn">
            <div className="absolute -top-1 -right-2 text-xs rounded-full w-5 h-5 bg-red-500 flex justify-center items-center animate-pulse text-white">
              3
            </div>
            <PaperAirplaneIcon className="navBtn -rotate-45" />
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <Image
            src={profilepic}
            alt="profile pic"
            className="h-6 w-6 rounded-full cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
