import React from "react";
import PostType from "../types/Post.type";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";

export default function Post({ post }: { post: PostType }) {
  return (
    <div className="bg-white">
      {/* Header */}

      <div className="flex items-center p-5 bg-white rounded-sm border mt-7">
        <img
          src={post.profileimg}
          alt=""
          className="w-12 h-12 rounded-full p-1 border mr-3 object-contain cursor-pointer"
        />
        <p className="font-bold">{post.username}</p>
        <EllipsisHorizontalIcon className="text-slate-400 h-5 ml-auto cursor-pointer" />
      </div>

      {/* img */}
      <img src={post.image} alt="" className="object-cover w-full" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-5">{post.username}</span>
          <span>{post.caption}</span>
        </p>
      </div>
      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7 text-slate-400" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}
