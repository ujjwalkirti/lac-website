import Image from "next/image";
import React from "react";

type props = {
  blog: Blog;
};

const FeaturedBlog = ({ blog }: props) => {
  return (
    <div className="flex items-center gap-[44px] mb-[47px] dark:bg-[#603726]">
      <div className="relative w-1/2 h-[400px]">
        <Image
          src={blog.illustration}
          fill
          alt="Featured blogs's image"
          className="rounded-lg"
        />
      </div>
      <div className="flex w-1/2 flex-col h-[400px] justify-between items-start py-6">
        <p className="text-gray-500 text-sm">March 16, 2023</p>
        <p className="text-[55px] font-bold">{blog.name}</p>
        <p className="text-lg w-4/5 text-justify">{blog.about}</p>
      </div>
    </div>
  );
};

export default FeaturedBlog;
