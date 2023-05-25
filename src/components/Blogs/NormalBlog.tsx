import { libre_caslon_text, monsterrat } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  blog: Blog;
  id: string;
};
const NormalBlog = ({ blog, id }: props) => {
  return (
    <div
      className={
        "flex flex-col lg:gap-4 bg-white dark:bg-[#603726] rounded-lg shadow-lg " +
        monsterrat.className
      }
    >
      <div className="relative h-[400px] lg:h-[200px] w-full">
        <Image
          src={`${
            blog.illustration === " "
              ? "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/6192594_3125988.jpg?alt=media&token=f255e3cb-bc07-4e8a-8df7-eea5d3853158"
              : blog.illustration
          }`}
          fill
          className="object-cover"
          alt="blogs image"
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-3 py-3">
        <p className="text-gray-500 dark:text-white text-sm">March 16, 2023</p>
        <p className={"text-[25px] font-bold " + libre_caslon_text.className}>
          {blog.name}
        </p>
        <p className="text-base w-full text-justify">{blog.about}...</p>
        <Link
          href={`/blogs/read/${id}`}
          className="bg-[#2C1810] text-base font-semibold px-3 py-2 rounded-md text-white border border-[#2C1810] hover:bg-white hover:text-inherit dark:hover:text-[#2C1810]"
        >
          Read the blog!
        </Link>
      </div>
    </div>
  );
};

export default NormalBlog;
