import { libre_caslon_text } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  blog: Blog;
  id: string;
};

const FeaturedBlog = ({ blog, id }: props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-[47px] dark:bg-[#603726] rounded-lg shadow-lg">
      <div className="relative w-full lg:w-1/2 h-[400px]">
        <Image
          src={blog.illustration}
          fill
          alt="Featured blogs's image"
          className="rounded-t-lg lg:rounded-r-none lg:rounded-l-lg object-cover"
        />
        <p className="absolute top-2 right-2 font-semibold leading-6 text-2xl bg-white dark:text-[#2c1810] px-3 py-2  rounded-lg shadow-xl">
          ✨ Featured Blog
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex  flex-col h-auto lg:min-h-[400px] justify-between items-start py-6 px-3 lg:px-[24px] bg-white dark:bg-inherit rounded-lg">
        <div className="flex justify-between w-full  text-sm text-gray-500 dark:text-white">
          <p className="">March 16, 2023</p>
          <p className="italic">by {blog.author}</p>
        </div>

        <p className={"text-[55px] font-bold " + libre_caslon_text.className}>
          {blog.name}
        </p>
        <p className="text-lg w-4/5 text-justify my-3">{blog.about}</p>
        <Link
          href={`/blogs/${id}`}
          className="bg-[#2C1810] text-xl font-semibold px-3 py-2 rounded-md text-white border border-[#2C1810] hover:bg-white hover:text-inherit dark:hover:text-[#2C1810]"
        >
          Read the blog!
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlog;
