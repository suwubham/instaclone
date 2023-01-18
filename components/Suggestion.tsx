import React from "react";
import User from "../types/User.type";
export default function Suggestion({ profile }: { profile: User }) {
  return (
    <div className="flex items-center mt-3">
      <img
        src={profile.avatar}
        alt="profile pic"
        className="h-10 w-10 rounded-full border p-[2px] cursor-pointer"
      />
      <div className="ml-4">
        <h2 className="font-semibold text-sm">{profile.username}</h2>
        <h3 className="text-xs text-gray-400">New to Instagram</h3>
      </div>
      <button className="text-blue-400 text-xs font-semibold ml-auto">
        Follow
      </button>
    </div>
  );
}
