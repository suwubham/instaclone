import React, { useState, useEffect } from "react";
import Post from "./Post";
import postgenerator from "../helpers/postgenerator";
import PostType from "../types/Post.type";

export default function Posts() {
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    const posts = [...Array(5)].map((_, i) => ({
      ...postgenerator(),
      id: i,
    }));
    setPosts(posts);
  }, []);
  return (
    <div>
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
