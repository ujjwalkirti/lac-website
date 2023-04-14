import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstLetterCapital from "./FirstLetterCapital";
import { libre_caslon_text } from "@/utils";

const Page2 = () => {
  return (
    <div className="lg:h-screen pt-[100px] ">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
        {" "}
        <p
          className={
            "text-[42px] lg:text-[62px] leading-[40px] lg:leading-[68.56px]  " +
            libre_caslon_text.className
          }
        >
          <FirstLetterCapital letter="F" />
          eatured <FirstLetterCapital letter="B" />
          logs
        </p>
        <Link
          href={`/blogs`}
          className="text-[#BA9871] text-[22px] font-semibold hidden lg:flex"
        >
          View all
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row mt-[36px] gap-4">
        <div className="px-6 py-6 bg-white lg:w-1/2 rounded-lg shadow-xl">
          <div className="relative h-[60vh] w-full ">
            <Image
              src={`/blogs-card/image 2.png`}
              fill
              alt="Featured blog of LAC"
            />
            <div className="absolute right-0 bottom-1/4 rounded-l-md px-3 py-2 z-10 bg-white">
              <p
                className={"text-xl lg:text-3xl " + libre_caslon_text.className}
              >
                Lorem ipsum dolor sit amet
              </p>
              <p className="italic text-sm text-gray-400 my-2 text-right">
                Author's name, 21 days ago
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-between gap-4">
          <div className="lg:h-[32vh] w-full px-6 py-6 bg-white rounded-lg shadow-xl flex flex-col lg:flex-row space-y-6 lg:space-x-6">
            <Image
              src={`/blogs-card/image 5.png`}
              height={200}
              width={150}
              className="h-[26vh] lg:h-full w-full lg:w-1/3"
              alt="Featured blog of LAC"
            />
            <div>
              {" "}
              <p
                className={"text-xl lg:text-3xl " + libre_caslon_text.className}
              >
                Lorem ipsum dolor sit amet
              </p>
              <p className="italic text-sm text-gray-400 my-2 text-right">
                Author's name, 21 days ago
              </p>
            </div>
          </div>
          <div className="lg:h-[32vh] w-full px-6 py-6 bg-white rounded-lg shadow-xl flex flex-col lg:flex-row space-y-6 lg:space-x-6">
            <Image
              src={`/blogs-card/image 6.png`}
              height={200}
              width={150}
              className="h-[26vh] lg:h-full w-full lg:w-1/3"
              alt="Featured blog of LAC"
            />
            <div>
              {" "}
              <p
                className={"text-xl lg:text-3xl " + libre_caslon_text.className}
              >
                Lorem ipsum dolor sit amet
              </p>
              <p className="italic text-sm text-gray-400 my-2 text-right">
                Author's name, 21 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
