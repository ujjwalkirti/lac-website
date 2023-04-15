import React from "react";
import FirstLetterCapital from "../Landing Page/FirstLetterCapital";
import Image from "next/image";

type props = {
  img: string;
  title: string;
  description: string;
  teamMembers: number;
  date: string;
  reglink: string;
};

const EventBox = ({
  img,
  title,
  description,
  teamMembers,
  date,
  reglink,
}: props) => {
  return (
    <div className="flex flex-col gap-2 shadow-xl py-5 px-5 rounded-lg bg-white w-11/12 dark:bg-[#603726] dark:text-[#dfa437] w-full mx-auto">
      <div className="h-[250px] w-full relative mx-auto">
        <Image src={img} fill alt="Event poster" className=" object-contain" />
      </div>
      <p className="text-[30px] text-center font-semibold">{title}</p>
      <p className="text-[18px] text-justify ">{description}</p>
      <div>
        <p className="text-left font-semibold">
          Number of team members:{teamMembers}
        </p>
      </div>
      <div>
        <p className="text-left font-semibold">Date: {date}</p>
      </div>
      <a href={reglink} className="bg-[#dfa437] w-full rounded-lg text-center">
        {" "}
        <button className="py-3 ">
          <p className="font-semibold dark:text-[#000000]">Register</p>
        </button>
      </a>
    </div>
  );
};

export default EventBox;
