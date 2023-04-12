import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCiCircle } from "react-icons/ai";

type props = {
  isFirst: boolean;
  isLast: boolean;
};
const RecentEventDialogueBox = ({ isFirst, isLast }: props) => {
  return (
    <div
      className={
        "px-[32px] pb-[42px] h-[517px] flex flex-col justify-between items-end border border-black dark:border-white rounded-md " +
        `${
          isFirst
            ? "flex-grow hover:flex-grow-0  transition duration-500 ease-in-out bg-red-500"
            : "w-1/4 hover:w-1/4 transition duration-500 ease-in-out bg-blue-500"
        }`
      }
    >
      <div className="mt-[24px] mr-[32px] font-[600] text-[24px] leading-[24.38px] flex items-center gap-2 ">
        {isFirst && (
          <Image src={`/dot.svg`} alt="dot svg" height={40} width={30} />
        )}
        {!isLast && <p>Upcoming</p>}
        {isLast && <p>Past</p>}
      </div>
      <div className="flex flex-col justify-end items-center">
        <p
          className={
            "font-[400] whitespace-nowrap text-[64px] leading-[76.8px] text-end " +
            `${
              !isFirst
                ? "transform origin-bottom-right  -rotate-90 -translate-y-[300px] "
                : ""
            }`
          }
        >
          Event Name
        </p>
        {isFirst && (
          <Link
            className="font-[700] text-[24px] leading-[29.26px] bg-gray-400 px-12 py-4 rounded-md"
            href={`/events/:id`}
          >
            View/Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default RecentEventDialogueBox;
