import React, { useState, useEffect } from "react";
import generateusers from "../utils/usergenerator";
import User from "../types/User.type";
import Suggestion from "./Suggestion";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<any>([]);
  useEffect(() => {
    const data = [...Array(5)].map((_, i) => {
      return {
        ...generateusers(),
        id: i,
      };
    });
    setSuggestions(data);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-500">See all</button>
      </div>

      {suggestions.map((profile: User) => (
        <Suggestion key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
