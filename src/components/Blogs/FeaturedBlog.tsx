import { libre_caslon_text } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  blog: Blog;
  id: string;
};

function shortenCharacter(content: string) {
  return content.slice(0, 150) + "...";
}

const FeaturedBlog = ({ blog, id }: props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-[47px] dark:bg-[#603726] rounded-lg shadow-lg">
      <div className="relative w-full lg:w-1/2 h-[400px]">
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

        <p className="absolute top-2 right-2 font-semibold leading-6 text-2xl bg-white dark:text-[#2c1810] px-3 py-2  rounded-lg shadow-xl">
          ✨ Featured Blog
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex  flex-col h-auto lg:min-h-[400px] justify-between items-start py-6 px-3 lg:px-[24px] bg-white dark:bg-inherit rounded-lg">
        <div className="flex justify-between w-full  text-sm text-gray-500 dark:text-white">
          <p className="">March 16, 2023</p>
          <p className="italic">by {blog.author}</p>
        </div>

        <p
          className={
            "text-[24px] lg:text-[35px] font-bold " +
            libre_caslon_text.className
          }
        >
          {blog.name}
        </p>
        <p className="text-lg w-full text-justify my-3">
          {shortenCharacter(blog.about)}
        </p>
        <Link
          href={`/blogs/read/${id}`}
          className="bg-[#2C1810] text-xl font-semibold px-3 py-2 rounded-md text-white border border-[#2C1810] hover:bg-white hover:text-inherit dark:hover:text-[#2C1810]"
        >
          Read the blog!
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlog;
