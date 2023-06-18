import Link from "next/link";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import BookClubIndicator from "./BookClubIndicator";
import FirstLetterCapital from "./FirstLetterCapital";
import { CgLivePhoto } from "react-icons/cg";
import Image from "next/image";
import EventsSwiper from "./EventsSwiper";
import { libre_caslon_text, monsterrat } from "@/local-data/Fonts";

type props = {
  yetToHappenEvents: LAC_Event[];
  happenedEvent: LAC_Event[];
  yetToHappenEventsCount: number;
};

const Page1 = ({
  yetToHappenEvents,
  happenedEvent,
  yetToHappenEventsCount,
}: props) => {
  const [isOtherHovered, setIsOtherHovered] = useState(false);
  const [isSecondDivHovered, setIsSecondDivHovered] = useState(false);

  if (yetToHappenEventsCount === 0) {
    yetToHappenEvents[0] = happenedEvent[1];
    yetToHappenEvents[1] = happenedEvent[2];
  } else if (yetToHappenEventsCount === 1) {
    yetToHappenEvents[1] = happenedEvent[1];
  }

  return (
    <div className={"mt-[19px] text-[#2C1810] dark:text-[#fffbf7]"}>
      <p
        className={
          "font-[500] text-[38px] md:text-[46px] lg:text-[66px] leading-[37px] lg:leading-[75.2px] text-center lg:text-left mb-[9px] " +
          libre_caslon_text.className
        }
      >
        <span className="font-bold text-[#DA8E63] ">L</span>
        iterary <span className="font-bold text-[#DA8E63]">A</span>
        ffairs <span className="font-bold text-[#DA8E63] ">C</span>ommittee
      </p>

      <p
        className={
          "font-[400] text-[15px] lg:text-[18px] leading-[19px] lg:leading-[22.38px] text-center lg:text-left " +
          monsterrat.className
        }
      >
        Literary Affairs Committee is a place where people share their passion
        for the art of speaking, reading, and writing. It includes fierce
        debaters, bold orators, quirky quizzers, avid readers, and literature
        enthusiasts. LAC nurtures budding writers, Quiz Masters, and bold
        speakers who are not afraid to put their opinion out in the public.
      </p>
      <div className="flex flex-col lg:flex-row  lg:items-end items-center lg:justify-between gap-4 mt-[20px]">
        <div className="lg:w-[30vw] flex flex-col lg:justify-between lg:h-[432px]">
          <BookClubIndicator />
          <p
            className={
              "flex justify-center lg:justify-end items-center text-[36px] lg:text-[56px] font-[400] lg:leading-[115.2px] w-9/12  mx-auto mt-10 lg:mt-0 " +
              libre_caslon_text.className
            }
          >
            <span className="">
              <FirstLetterCapital letter="E" />
              vents{" "}
            </span>
            <FiArrowRight className="hidden lg:flex dark:text-[#fffbf7]" />
          </p>
          <Link
            href={`/events`}
            className="w-[80px] mx-auto lg:hidden dark:text-[#dfa437]"
          >
            View all
          </Link>
        </div>
        {/* 
        
            
              This is the div which contains the 3 cards showing the events.
              The first 2 are the upcoming ones, and the last one shows the event which has most recently happened.
          
        
        */}
        <div className="hidden w-[70%] lg:flex justify-between gap-[20px] h-[432px]">
          {/* div for major latest upcoming event */}
          <div
            className={
              " transition-all duration-700 " +
              `${isOtherHovered ? "w-[22%] hover:w-[56%]" : "w-full"}`
            }
          >
            {" "}
            <div className="relative h-full">
              {!isOtherHovered && (
                <div className="absolute top-3 right-3 z-20 text-white flex items-center gap-3 text-xl font-semibold bg-[#2C1810] dark:bg-white dark:text-[#2C1810] px-2 py-1 rounded-md">
                  <CgLivePhoto />
                  <p>
                    {yetToHappenEventsCount === 0
                      ? "Past"
                      : yetToHappenEventsCount === 1
                      ? "Upcoming"
                      : "Upcoming"}
                  </p>
                </div>
              )}
              <Image
                src={yetToHappenEvents[0].img}
                fill
                alt="LAC's most recent event poster"
                className="rounded-md object-cover"
              />
              <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
              <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
                <p
                  className={
                    "text-2xl mb-3 animate-fade-in " +
                    `${
                      isOtherHovered
                        ? "transform-gpu duration-700 hidden transition-opacity "
                        : " "
                    }` +
                    libre_caslon_text.className
                  }
                >
                  {yetToHappenEvents[0].title}
                </p>
                {!isOtherHovered && (
                  <Link
                    className="bg-[#DA8E63] text-lg px-3 py-2 rounded-lg "
                    href={`/events`}
                  >
                    {yetToHappenEventsCount === 0
                      ? "View"
                      : yetToHappenEventsCount === 1
                      ? "View/Register"
                      : "View/Register"}
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* div for the next latest upcoming event */}
          <div
            onMouseEnter={() => {
              setIsOtherHovered(true);
              setIsSecondDivHovered(true);
            }}
            onMouseLeave={() => {
              setIsOtherHovered(false);
              setIsSecondDivHovered(false);
            }}
            className=" transition-all duration-700 w-[22%] hover:w-[56%]"
          >
            {" "}
            <div className="relative h-full">
              {isOtherHovered && isSecondDivHovered && (
                <div className="absolute top-3 right-3 z-20 text-white flex items-center gap-3 text-xl font-semibold bg-[#2C1810] dark:bg-white dark:text-[#2C1810] px-2 py-1 rounded-md">
                  <CgLivePhoto />
                  <p>
                    {yetToHappenEventsCount === 0
                      ? "Past"
                      : yetToHappenEventsCount === 1
                      ? "Past"
                      : "Upcoming"}
                  </p>
                </div>
              )}
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
                    "text-2xl mb-3 animate-fade-in " +
                    `${
                      isOtherHovered && isSecondDivHovered
                        ? "transform-gpu duration-200 opacity-100 "
                        : "hidden "
                    }` +
                    libre_caslon_text.className
                  }
                >
                  {yetToHappenEvents[1].title}
                </p>
                {isSecondDivHovered && (
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
                )}
              </div>
            </div>
          </div>
          {/* div for latest event which just happened */}
          <div
            onMouseEnter={() => {
              setIsOtherHovered(true);
            }}
            onMouseLeave={() => {
              setIsOtherHovered(false);
            }}
            className=" transition-all duration-700 w-[22%] hover:w-[56%]"
          >
            {" "}
            <div className="relative h-full">
              {isOtherHovered && !isSecondDivHovered && (
                <div className="absolute top-3 right-3 z-20 text-white flex items-center gap-3 text-xl font-semibold bg-[#2C1810] dark:bg-white dark:text-[#2C1810] px-2 py-1 rounded-md">
                  <CgLivePhoto />
                  <p>Past</p>
                </div>
              )}
              <Image
                src={happenedEvent[0].img}
                fill
                alt="LAC's most recent event poster"
                className="rounded-md object-cover"
              />
              <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
              <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
                <p
                  className={
                    "text-2xl mb-3 animate-fade-in " +
                    `${
                      isOtherHovered && !isSecondDivHovered
                        ? "transform-gpu duration-200 "
                        : "hidden "
                    }` +
                    libre_caslon_text.className
                  }
                >
                  {happenedEvent[0].title}
                </p>
                {isOtherHovered && !isSecondDivHovered && (
                  <Link
                    className="bg-[#DA8E63] px-3 py-2 rounded-lg"
                    href="/events"
                  >
                    View
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* For screens smaller than lg break point */}
        <EventsSwiper
          yetToHappenEventsCount={yetToHappenEventsCount}
          happenedEvent={happenedEvent}
          yetToHappenEvents={yetToHappenEvents}
        />
      </div>
      <div className="hidden lg:flex font-[600] text-[24px] leading-[29.26px] text-[#ba9871] justify-end my-4 hover:underline">
        <Link href={`/events`}>View all</Link>
      </div>
    </div>
  );
};

export default Page1;
