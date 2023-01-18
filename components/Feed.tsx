import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section>
        {/* miniprofile */}
        <MiniProfile />
        {/* suggestions */}
      </section>
    </main>
  );
}
