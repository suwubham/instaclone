import React from "react";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
function MinProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Image
        src={profilepic}
        alt="profile pic"
        className="h-16 w-16 rounded-full border p-[2px] cursor-pointer"
        priority
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">suwubham</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MinProfile;
