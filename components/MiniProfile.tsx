import React from "react";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { useSession } from "next-auth/react";

function MinProfile() {
  const { data }: any = useSession();
  console.log(data);
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={data.user.image}
        alt="profile pic"
        className="h-16 w-16 rounded-full border p-[2px] cursor-pointer"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{data.user.name}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MinProfile;
