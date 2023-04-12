import Image from "next/image";
import React from "react";
type props = {
  blog: Blog;
};
const NormalBlog = ({ blog }: props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[200px] w-full">
        <Image
          src={blog.illustration}
          fill
          alt="LAC's other blogs"
          className="rounded-md"
        />
      </div>
      <div className="px-2">
        <p className="text-gray-500 text-sm">March 16, 2023</p>
        <p className="text-[25px] font-bold">{blog.name}</p>
        <p className="text-base w-full text-justify">{blog.about}</p>
      </div>
    </div>
  );
};

export default NormalBlog;
