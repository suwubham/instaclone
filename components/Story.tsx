import React from "react";
import User from "../types/User.type";

function Story({ profile }: { profile: User }) {
  return (
    <div>
      <img
        src={profile.avatar}
        alt={profile.username}
        className="w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition-all duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center ">{profile.username}</p>
    </div>
  );
}

export default Story;
