import React from "react";

// import required modules

import { libre_caslon_text } from "@/utils";
import { CgLivePhoto } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

export default function EventsSwiper() {
  return (
    <div className="overflow-x-scroll lg:hidden w-full flex justify-between gap-[20px] h-[420px]">
      {/* div for major latest upcoming event */}
      <div className={" transition-all duration-200 "}>
        {" "}
        <div className="relative w-[80vw] h-full">
          <div className="absolute top-3 right-3 z-20 text-white flex items-center gap-3">
            <CgLivePhoto />
            <p className="">Upcoming</p>
          </div>
          <Image
            src="/events-card/image-1.png"
            fill
            alt="LAC's most recent event poster"
            className="rounded-md"
          />
          <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
          <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
            <p className={"text-2xl mb-3 " + libre_caslon_text.className}>
              Event's Name
            </p>

            <Link
              className="bg-[#DA8E63] text-sm px-3 py-2 rounded-lg"
              href="/event/register/:event_id"
            >
              View / Register
            </Link>
          </div>
        </div>
      </div>
      {/* div for the next latest upcoming event */}
      <div className=" transition-all duration-200 ">
        {" "}
        <div className="relative h-full w-[80vw]">
          <Image
            src="/events-card/image 2.png"
            fill
            alt="LAC's most recent event poster"
            className="rounded-md"
          />
          <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
          <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
            <p className={"text-2xl mb-3 " + libre_caslon_text.className}>
              Event's Name
            </p>

            <Link
              className="bg-[#DA8E63] px-3 py-2 rounded-lg"
              href="/event/register/:event_id"
            >
              View / Register
            </Link>
          </div>
        </div>
      </div>
      {/* div for latest event which just happened */}
      <div className=" transition-all duration-200 w-1/4 hover:w-1/2">
        {" "}
        <div className="relative h-full w-[80vw]">
          <Image
            src="/events-card/image 3.png"
            fill
            alt="LAC's most recent event poster"
            className="rounded-md"
          />
          <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
          <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
            <p className={"text-2xl mb-3 " + libre_caslon_text.className}>
              Event's Name
            </p>

            <Link
              className="bg-[#DA8E63] px-3 py-2 rounded-lg"
              href="/event/register/:event_id"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
