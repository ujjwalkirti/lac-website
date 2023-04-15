import Link from "next/link";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import BookClubIndicator from "./BookClubIndicator";
import FirstLetterCapital from "./FirstLetterCapital";
import Typewriter from "./Typewriter";
import { CgLivePhoto } from "react-icons/cg";
import { libre_caslon_text, monsterrat } from "@/utils";
import Image from "next/image";
import EventsSwiper from "./EventsSwiper";

const Page1 = () => {
  const [isOtherHovered, setIsOtherHovered] = useState(false);
  const [isSecondDivHovered, setIsSecondDivHovered] = useState(false);

  return (
    <div className={"mt-[29px] text-[#2C1810]"}>
      <p
        className={
          "font-[700] lg:font-[500] text-[24px] md:text-[56px] lg:text-[76px] lg:leading-[75.2px] dark:text-[#dfa437] mb-[19px] " +
          libre_caslon_text.className
        }
      >
        <span className="font-bold text-[#DA8E63] ">L</span>
        iterary <span className="font-bold text-[#DA8E63]">A</span>
        ffairs <span className="font-bold text-[#DA8E63] ">C</span>ommittee
      </p>
      
      <p
        className={
          "font-[400] text-[13px] lg:text-[20px] leading-[17px] lg:leading-[24.38px] text-[#8D4B31] text-center " +
          monsterrat.className
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        repudiandae ab nam molestias officiis mollitia voluptate illo nemo
        tenetur, nihil, vero odio sapiente, dolorum quidem itaque optio magnam
        debitis atque!
      </p>
      <div className="flex flex-col lg:flex-row  lg:items-end items-center lg:justify-between gap-4 mt-[30px]">
        <div className="lg:w-[30vw] flex flex-col lg:justify-between">
          <BookClubIndicator />
          <p
            className={
              "flex justify-center lg:justify-end items-center text-[39px] lg:text-[56px] font-[400] lg:leading-[115.2px] w-9/12  mx-auto text-[#2C1810] mt-10 lg:mt-0 " +
              libre_caslon_text.className
            }
          >
            <span className="dark:text-[#dfa437]">
              <FirstLetterCapital letter="E" />
              vents{" "}
            </span>
            <FiArrowRight className="hidden lg:flex dark:text-[#dfa437]" />
          </p>
          <Link
            href={`/events`}
            className="w-[80px] mx-auto lg:hidden dark:text-[#dfa437]"
          >
            View all
          </Link>
        </div>
        <div className="hidden w-[70%] lg:flex justify-between gap-[20px] h-[512px]">
          {/* div for major latest upcoming event */}
          <div
            className={
              " transition-all duration-200 " +
              `${isOtherHovered ? "w-1/4 hover:w-1/2" : "w-1/2"}`
            }
          >
            {" "}
            <div className="relative h-full">
              {!isOtherHovered && (
                <div className="absolute top-3 right-3 z-20 text-white flex items-center gap-3 text-xl font-semibold">
                  <CgLivePhoto />
                  <p>Upcoming</p>
                </div>
              )}
              <Image
                src="/events-card/image-1.png"
                fill
                alt="LAC's most recent event poster"
                className="rounded-md"
              />
              <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
              <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
                <p
                  className={
                    "text-2xl mb-3 " +
                    `${
                      isOtherHovered
                        ? "transform-gpu duration-200 hidden transition-opacity "
                        : " "
                    }` +
                    libre_caslon_text.className
                  }
                >
                  Event's Name
                </p>
                {!isOtherHovered && (
                  <Link
                    className="bg-[#DA8E63] text-lg px-3 py-2 rounded-lg "
                    href="/event/register/:event_id"
                  >
                    View / Register
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
            className=" transition-all duration-200 w-1/4 hover:w-1/2"
          >
            {" "}
            <div className="relative h-full">
              {isOtherHovered && isSecondDivHovered && (
                <div className="absolute top-3 right-3 z-20 text-white flex items-center gap-3 text-xl font-semibold">
                  <CgLivePhoto />
                  <p>Upcoming</p>
                </div>
              )}
              <Image
                src="/events-card/image 2.png"
                fill
                alt="LAC's most recent event poster"
                className="rounded-md"
              />
              <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
              <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
                <p
                  className={
                    "text-2xl mb-3 " +
                    `${
                      isOtherHovered && isSecondDivHovered
                        ? "transform-gpu duration-200 opacity-100 "
                        : "hidden "
                    }` +
                    libre_caslon_text.className
                  }
                >
                  Event's Name
                </p>
                {isSecondDivHovered && (
                  <Link
                    className="bg-[#DA8E63] px-3 py-2 rounded-lg"
                    href="/event/register/:event_id"
                  >
                    View / Register
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
            className=" transition-all duration-200 w-1/4 hover:w-1/2"
          >
            {" "}
            <div className="relative h-full">
              {isOtherHovered && !isSecondDivHovered && (
                <div className="absolute top-3 right-3 z-20 text-white flex items-center gap-3 text-xl font-semibold">
                  <CgLivePhoto />
                  <p>Past</p>
                </div>
              )}
              <Image
                src="/events-card/image 3.png"
                fill
                alt="LAC's most recent event poster"
                className="rounded-md"
              />
              <div className="absolute h-full w-full z-10 bg-gradient-to-t from-black to-transparent  rounded-md"></div>
              <div className="absolute flex flex-col items-end bottom-7 right-3 z-20 text-white">
                <p
                  className={
                    "text-2xl mb-3 " +
                    `${
                      isOtherHovered && !isSecondDivHovered
                        ? "transform-gpu duration-200 "
                        : "hidden "
                    }` +
                    libre_caslon_text.className
                  }
                >
                  Event's Name
                </p>
                {isOtherHovered && !isSecondDivHovered && (
                  <Link
                    className="bg-[#DA8E63] px-3 py-2 rounded-lg"
                    href="/event/register/:event_id"
                  >
                    View
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <EventsSwiper />
      </div>
      <div className="hidden lg:flex font-[600] text-[24px] leading-[29.26px] justify-end my-4">
        <Link href={`/events`}>View all</Link>
      </div>
    </div>
  );
};

export default Page1;
