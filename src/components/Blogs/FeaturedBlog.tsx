import Image from "next/image";
import React from "react";

type props = {
  blog: Blog;
};

const FeaturedBlog = ({ blog }: props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center  lg:gap-[44px] mb-[47px] dark:bg-[#603726] rounded-lg shadow-lg">
      <div className="relative w-full lg:w-1/2 h-[400px]">
        <Image
          src={blog.illustration}
          fill
          alt="Featured blogs's image"
          className="rounded-t-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex  flex-col h-auto lg:h-[400px] justify-between items-start py-6 px-3">
        <p className="text-gray-500 dark:text-white text-sm">March 16, 2023</p>
        <p className="text-[55px] font-bold">{blog.name}</p>
        <p className="text-lg w-4/5 text-justify">{blog.about}</p>
      </div>
    </div>
  );
};

export default FeaturedBlog;
