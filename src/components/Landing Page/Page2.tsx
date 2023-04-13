import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstLetterCapital from "./FirstLetterCapital";
import { Libre_Caslon_Text } from "next/font/google";

const libre_caslon_text = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Page2 = () => {
  return (
    <div className="h-screen pt-[100px] ">
      <div className="flex items-end justify-between">
        {" "}
        <p
          className={
            "text-[72px] leading-[88.56px]  " + libre_caslon_text.className
          }
        >
          <FirstLetterCapital letter="F" />
          eatured <FirstLetterCapital letter="B" />
          logs
        </p>
        <Link
          href={`/blogs`}
          className="text-[#BA9871] text-[22px] font-semibold"
        >
          View all
        </Link>
      </div>
      <div className="flex mt-[46px] gap-4">
        <div className="px-6 py-6 bg-white w-1/2 rounded-lg shadow-xl">
          <div className="relative h-[75vh] w-full ">
            <Image
              src={`/blogs-card/image 2.png`}
              fill
              alt="Featured blog of LAC"
            />
            <div className="absolute right-0 bottom-1/4 h-[30px] z-10"></div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between gap-4">
          <div className="h-[37.5vh] w-full px-6 py-6 bg-white rounded-lg shadow-xl">
            <Image
              src={`/blogs-card/image 5.png`}
              height={200}
              width={150}
              className="h-full w-1/3"
              alt="Featured blog of LAC"
            />
          </div>
          <div className="h-[37.5vh] w-full px-6 py-6 bg-white rounded-lg shadow-xl">
            <Image
              src={`/blogs-card/image 6.png`}
              height={200}
              width={150}
              className="h-full w-1/3"
              alt="Featured blog of LAC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
