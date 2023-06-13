import React from "react";
import FirstLetterCapital from "../Landing Page/FirstLetterCapital";
import Image from "next/image";
import Link from "next/link";

type props = {
  completed?: boolean;
  img: string;
  title: string;
  description: string;
  teamMembers?: number;
  date?: string;
  reglink?: string;
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
  let formattedTime = "";
  if (date && typeof date !== "string") {
    //@ts-ignore
    const dateFromTimestamp = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    //@ts-ignore
    formattedTime = new Intl.DateTimeFormat("en-US", options).format(
      dateFromTimestamp
    );
  }

  return (
    <div className="flex flex-col justify-between gap-2 shadow-xl py-5 px-3 my-3 rounded-lg bg-white dark:bg-[#603726] dark:text-[#fffbf7] w-full h-full mx-auto">
      <div className="flex flex-col gap-4">
        <div className="w-full h-[250px] relative mx-auto">
          {/* className=" object-contain" */}
          <Image src={img} fill alt="Event poster" className=" object-cover" />
        </div>
        <p className="text-[30px] text-center font-bold">{title}</p>
        {completed && reglink && (
          <div className="text-[15px] text-center font-semibold text-[#DA8E63]">
            <p>Registrations Over</p>
          </div>
        )}
        {!completed && reglink && (
          <div className="text-[15px] text-center font-semibold text-[#DA8E63]">
            <p>Registrations Ongoing</p>
          </div>
        )}
        <p className="text-[18px] text-justify ">{description}</p>
        {teamMembers && (
          <div>
            <p className="text-left font-semibold">
              Number of team members: {teamMembers}
            </p>
          </div>
        )}
        {date && typeof date !== "string" && (
          <div>
            <p className="text-left font-semibold">Date: {formattedTime}</p>
          </div>
        )}
        {date && typeof date === "string" && (
          <div>
            <p className="text-left font-semibold">Date: {date}</p>
          </div>
        )}
      </div>
      {!completed && reglink && (
        <Link
          href={reglink}
          className="bg-[#dfa437] w-full rounded-lg text-center font-semibold dark:text-[#000000] py-3"
        >
          <button>Register</button>
        </Link>
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
