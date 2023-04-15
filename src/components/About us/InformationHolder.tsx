import React from "react";
import FirstLetterCapital from "../Landing Page/FirstLetterCapital";
import Image from "next/image";

const InformationHolder = () => {
  return (
    <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
      <p className="text-[30px] text-center font-semibold">
        Mr Some Random Name
      </p>
      <p className="text-[18px] text-center ">
        Professor, Dept of XYZ Engineering
      </p>
      <p className="text-center">(Faculty Advisor)</p>
      {/* Faculty Advisor image */}
      <div className="h-[250px] w-[250px] relative mx-auto">
        <Image
          src={`/placeholder-man.png`}
          fill
          alt="LAC SVNIT Faculty Advisor"
        />
      </div>
      {/* His message */}
      <p className="text-center font-medium text-xl">Message from the Desk</p>
      <p className="text-justify italic px-3">
        <FirstLetterCapital letter={`"`} />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum fuga
        debitis, quos dolores sint, architecto amet tempore maxime quibusdam rem
        tempora doloribus vitae facilis numquam atque ex ad voluptatibus sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas ab,
        magnam aperiam, error magni iure voluptate at ad quos dolorum sit
        placeat, non saepe rem distinctio exercitationem. Sit, fugit?
        <FirstLetterCapital letter={`"`} />
      </p>
    </div>
  );
};

export default InformationHolder;
