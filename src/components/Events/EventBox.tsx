import React from "react";
import FirstLetterCapital from "../Landing Page/FirstLetterCapital";
import Image from "next/image";

type props = {
  completed?: boolean;
  img: string;
  title: string;
  description: string;
  teamMembers: number;
  date: string;
  reglink: string;
};

const EventBox = ({
  completed,
  img,
  title,
  description,
  teamMembers,
  date,
  reglink,
}: props) => {
  const dateFromTimestamp = new Date(date);
  const options = { day: "numeric", month: "long", year: "numeric" };
  //@ts-ignore
  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
    dateFromTimestamp
  );

  return (
    <div className="flex flex-col gap-2 shadow-xl py-5 px-3 rounded-lg bg-white dark:bg-[#603726] dark:text-[#fffbf7] w-[100%] h-auto mx-auto">
      <div className="w-full h-[250px] relative mx-auto">
        {/* className=" object-contain" */}
        <Image src={img} fill alt="Event poster" className=" object-contain" />
      </div>
      <p className="text-[30px] text-center font-bold">{title}</p>
      {completed && (
        <div className="text-[15px] text-center font-semibold text-[#DA8E63]">
          <p>Registrations Over</p>
        </div>
      )}
      {!completed && (
        <div className="text-[15px] text-center font-semibold text-[#DA8E63]">
          <p>Registrations Ongoing</p>
        </div>
      )}
      <p className="text-[18px] text-justify ">{description}</p>
      <div>
        <p className="text-left font-semibold">
          Number of team members: {teamMembers}
        </p>
      </div>
      <div>
        <p className="text-left font-semibold">Date: {formattedTime}</p>
      </div>
      {!completed && (
        <a
          href={reglink}
          className="bg-[#dfa437] w-full rounded-lg text-center font-semibold dark:text-[#000000] py-3"
        >
          <button>Register</button>
        </a>
      )}
      {completed && (
        <button
          className="bg-[#e3bc74] w-full rounded-lg text-center dark:text-[#858383] py-3 "
          disabled
        >
          Registerations Closed
        </button>
      )}
    </div>
  );
};

export default EventBox;
