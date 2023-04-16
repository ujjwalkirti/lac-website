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
        "flex flex-col lg:gap-4 dark:bg-[#603726] rounded-lg shadow-lg " +
        monsterrat.className
      }
    >
      <div className="relative h-[400px] lg:h-[200px] w-full">
        <Image
          src={blog.illustration}
          fill
          alt="LAC's other blogs"
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-3 py-3">
        <p className="text-gray-500 dark:text-white text-sm">March 16, 2023</p>
        <p className={"text-[25px] font-bold " + libre_caslon_text.className}>
          {blog.name}
        </p>
        <p className="text-base w-full text-justify">{blog.about}</p>
        <Link
          href={`/blogs/${id}`}
          className="bg-[#2C1810] text-base font-semibold px-3 py-2 rounded-md text-white border border-[#2C1810] hover:bg-white hover:text-inherit dark:hover:text-[#2C1810]"
        >
          Read the blog!
        </Link>
      </div>
    </div>
  );
};

export default NormalBlog;
