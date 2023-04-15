import React from "react";
import FirstLetterCapital from "../Landing Page/FirstLetterCapital";
import Image from "next/image";

type props = {
  name: string;
  position: string;
  img: string;
  message?: string;
  designation: string;
};

const InformationHolder = ({
  name,
  position,
  img,
  message,
  designation,
}: props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 shadow-xl py-3 px-2 rounded-lg bg-white w-11/12 dark:bg-[#603726] dark:text-[#dfa437] lg:w-full mx-auto">
      <div
        className={"flex flex-col  lg:gap-3 " + `${message ? "lg:w-1/3 mx-auto " : ""}`}
      >
        <p className="text-[30px] text-center font-semibold">{name}</p>
        <p className="text-[18px] text-center ">{position}</p>
        <p className="text-center">({designation})</p>
        {/* Faculty Advisor image */}
        <div className="h-[250px] w-[250px] relative mx-auto">
          <Image src={img} fill alt="LAC SVNIT Faculty Advisor" />
        </div>
      </div>
      {/* His message */}
      {message && (
        <div
          className="flex flex-col lg:justify-center
        lg:gap-4 mt-5 mb-3 lg:w-2/3"
        >
          <p className="text-center font-medium text-xl">
            Message from the Desk
          </p>
          <p className="text-justify italic px-3 lg:w-2/3 lg:mx-auto">
            <FirstLetterCapital letter={`"`} />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            fuga debitis, quos dolores sint, architecto amet tempore maxime
            quibusdam rem tempora doloribus vitae facilis numquam atque ex ad
            voluptatibus sequi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero quas ab, magnam aperiam, error magni iure
            voluptate at ad quos dolorum sit placeat, non saepe rem distinctio
            exercitationem. Sit, fugit?
            <FirstLetterCapital letter={`"`} />
          </p>
        </div>
      )}
    </div>
  );
};

export default InformationHolder;
