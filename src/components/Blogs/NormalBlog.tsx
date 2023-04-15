import { libre_caslon_text, monsterrat } from "@/utils";
import Image from "next/image";
import React from "react";
type props = {
  blog: Blog;
};
const NormalBlog = ({ blog }: props) => {
  return (
    <div
      className={
        "flex flex-col lg:gap-4 dark:bg-[#603726] rounded-lg shadow-lg " +
        monsterrat.className
      }
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={blog.illustration}
          fill
          alt="LAC's other blogs"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-3 px-3 py-6">
        <p className="text-gray-500 dark:text-white text-sm">March 16, 2023</p>
        <p className={"text-[25px] font-bold " + libre_caslon_text.className}>
          {blog.name}
        </p>
        <p className="text-base w-full text-justify">{blog.about}</p>
      </div>
    </div>
  );
};

export default NormalBlog;
