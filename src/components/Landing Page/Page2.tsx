import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstLetterCapital from "./FirstLetterCapital";
import { libre_caslon_text } from "@/utils";

type props = {
  featuredBlogs: { blog: Blog; id: string }[];
};

const Page2 = ({ featuredBlogs }: props) => {
  return (
    <div className="lg:h-screen lg:pt-[100px]">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
        {" "}
        <p
          className={
            "text-[42px] lg:text-[62px] leading-[40px] lg:leading-[68.56px] text-center lg:text-left  " +
            libre_caslon_text.className
          }
        >
          <FirstLetterCapital letter="F" />
          eatured <FirstLetterCapital letter="B" />
          logs
        </p>
        <Link
          href={`/blogs`}
          className="text-[#BA9871] text-[22px] font-semibold flex justify-center my-6"
        >
          View all
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:mt-[36px] gap-4">
        {/* 1st featured blog */}
        <Link
          href={`/blogs/read/${featuredBlogs[0].id}`}
          className="px-2 lg:px-6 py-2 lg:py-6 bg-white lg:w-1/2 rounded-lg shadow-xl lg:hover:scale-y-105 transition transform duration-300 ease-out dark:bg-[#603726]"
        >
          <div className="relative h-[60vh] w-full ">
            <Image
              src={`${
                featuredBlogs[0].blog.illustration === " "
                  ? "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/6192594_3125988.jpg?alt=media&token=f255e3cb-bc07-4e8a-8df7-eea5d3853158"
                  : featuredBlogs[0].blog.illustration
              }`}
              fill
              className="object-cover"
              alt="Featured blog of LAC"
            />
            <div className="absolute right-0 bottom-1/4 rounded-l-md px-3 py-2 z-10 bg-white text-[#2C1810] dark:bg-[#603726] dark:text-[#FFFBF7]">
              <p
                className={"text-xl lg:text-2xl " + libre_caslon_text.className}
              >
                {featuredBlogs[0].blog.name}
              </p>
              <p className="italic text-sm text-gray-400 my-2 text-right dark:text-[#dfa437]">
                {featuredBlogs[0].blog.author}
                <br /> {featuredBlogs[0].blog.date}
              </p>
            </div>
          </div>
        </Link>

        <div className="lg:w-1/2 flex flex-col justify-between gap-4">
          {/* 2nd featured blog */}
          <Link
            href={`/blogs/read/${featuredBlogs[1].id}`}
            className="lg:h-[32vh] w-full px-2 lg:px-6 py-2 lg:py-6  rounded-lg shadow-xl flex flex-col lg:flex-row space-y-6 lg:space-x-6 lg:hover:scale-y-105 transition transform duration-300 ease-out  bg-white text-[#2C1810] dark:bg-[#603726] dark:text-[#FFFBF7]"
          >
            <Image
              src={`${
                featuredBlogs[1].blog.illustration === " "
                  ? "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/6192594_3125988.jpg?alt=media&token=f255e3cb-bc07-4e8a-8df7-eea5d3853158"
                  : featuredBlogs[1].blog.illustration
              }`}
              height={200}
              width={150}
              className="h-[26vh] lg:h-full w-full lg:w-1/3"
              alt="Featured blog of LAC"
            />
            <div className="">
              {" "}
              <p
                className={"text-xl text-center lg:text-2xl " + libre_caslon_text.className}
              >
                {featuredBlogs[1].blog.name}
              </p>
              <p className="italic text-sm text-gray-400 my-2 text-right dark:text-[#dfa437]">
                {featuredBlogs[1].blog.author}
                <br />
                {featuredBlogs[1].blog.date}
              </p>
            </div>
          </Link>
          {/* 3rd featured blog */}
          <Link
            href={`/blogs/read/${featuredBlogs[2].id}`}
            className="lg:h-[32vh] w-full px-2 lg:px-6 py-2 lg:py-6 rounded-lg shadow-xl flex flex-col lg:flex-row space-y-6 lg:space-x-6 lg:hover:scale-y-105 transition transform duration-300 ease-out bg-white text-[#2C1810] dark:bg-[#603726] dark:text-[#FFFBF7]"
          >
            <Image
              src={`${
                featuredBlogs[2].blog.illustration === " "
                  ? "https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/6192594_3125988.jpg?alt=media&token=f255e3cb-bc07-4e8a-8df7-eea5d3853158"
                  : featuredBlogs[2].blog.illustration
              }`}
              height={200}
              width={150}
              className="h-[26vh] lg:h-full w-full lg:w-1/3"
              alt="Featured blog of LAC"
            />
            <div className="">
              {" "}
              <p
                className={"text-xl text-center lg:text-2xl " + libre_caslon_text.className}
              >
                {featuredBlogs[2].blog.name}
              </p>
              <p className="italic text-sm text-gray-400 my-2 text-right dark:text-[#dfa437]">
                {featuredBlogs[2].blog.author} <br />
                {featuredBlogs[2].blog.date}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;
