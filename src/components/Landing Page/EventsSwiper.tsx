import React from "react";

// import required modules

import { libre_caslon_text } from "@/utils";
import { CgLivePhoto } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

type props = {
  yetToHappenEvents: LAC_Event[];
  happenedEvent: LAC_Event[];
  yetToHappenEventsCount: number;
};

export default function EventsSwiper({
  yetToHappenEvents,
  happenedEvent,
  yetToHappenEventsCount,
}: props) {
  return (
    <div className="overflow-x-scroll scrollbar-hide lg:hidden w-full flex justify-between gap-[20px] h-[420px]">
      {/* div for major latest upcoming event */}
      <div className={" transition-all duration-200 "}>
        {" "}
        <div className="relative w-[80vw] h-full">
          <div className="absolute top-3 right-3 z-20 bg-[#2C1810] text-white dark:bg-white dark:text-[#2C1810] rounded-md animate-pulse px-3 py-1 rounded-md font-semibold flex items-center gap-3">
            <CgLivePhoto />
            <p className="">
              {yetToHappenEventsCount === 0
                ? "Past"
                : yetToHappenEventsCount === 1
                ? "Upcoming"
                : "Upcoming"}
            </p>
          </div>
          <Image
            src={yetToHappenEvents[0].img}
            fill
            alt="LAC's most recent event poster"
            className="rounded-md object-cover"
          />
          <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
          <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white px-2 text-right">
            <p className={"text-2xl mb-3 " + libre_caslon_text.className}>
              {yetToHappenEvents[0].title}
            </p>

            <Link
              className="bg-[#DA8E63] text-sm px-3 py-2 rounded-lg"
              href="/events"
            >
              {yetToHappenEventsCount === 0
                ? "View"
                : yetToHappenEventsCount === 1
                ? "View/Register"
                : "View/Register"}
            </Link>
          </div>
        </div>
      </div>
      {/* div for the next latest upcoming event */}
      {yetToHappenEvents.length === 2 && (
        <div className=" transition-all duration-200 relative">
          <div className="absolute top-3 right-3 z-20 bg-[#2C1810] text-white dark:bg-white dark:text-[#2C1810] rounded-md animate-pulse px-3 py-1 rounded-md font-semibold flex items-center gap-3">
            <CgLivePhoto />
            <p className="">
              {yetToHappenEventsCount === 0
                ? "Past"
                : yetToHappenEventsCount === 1
                ? "Past"
                : "Upcoming"}
            </p>
          </div>{" "}
          <div className="relative h-full w-[80vw]">
            <Image
              src={yetToHappenEvents[1].img}
              fill
              alt="LAC's most recent event poster"
              className="rounded-md object-cover"
            />
            <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
            <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
              <p
                className={
                  "text-2xl text-right mb-3 " + libre_caslon_text.className
                }
              >
                {yetToHappenEvents[1].title}
              </p>

              <Link
                className="bg-[#DA8E63] px-3 py-2 rounded-lg"
                href="/events"
              >
                {yetToHappenEventsCount === 0
                  ? "View"
                  : yetToHappenEventsCount === 1
                  ? "View"
                  : "View/Register"}
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* div for latest event which just happened */}
      <div className=" transition-all duration-200 relative">
        <div className="absolute top-3 right-3 z-20 bg-[#2C1810] text-white dark:bg-white dark:text-[#2C1810] rounded-md animate-pulse px-3 py-1 rounded-md font-semibold flex items-center gap-3">
          <CgLivePhoto />
          <p className="">Past</p>
        </div>{" "}
        <div className="relative h-full w-[80vw]">
          <Image
            src={happenedEvent[0].img}
            fill
            alt="LAC's most recent event poster"
            className="rounded-md object-cover"
          />
          <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
          <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
            <p className={"text-2xl mb-3 " + libre_caslon_text.className}>
              {happenedEvent[0].title}
            </p>

            <Link className="bg-[#DA8E63] px-3 py-2 rounded-lg" href="/events">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
