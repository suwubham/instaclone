import React, { useEffect, useState } from "react";
import generate from "../helpers/usergenerator";
import Story from "./Story";
import User from "../types/User.type";

export default function Stories() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fakedata = [...Array(20)].map((_, i) => ({ ...generate(), id: i }));
    setData(fakedata);
  }, []);

  return (
    <div className="flex gap-8 p-6 mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {data.map((profile: User) => (
        <Story key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
