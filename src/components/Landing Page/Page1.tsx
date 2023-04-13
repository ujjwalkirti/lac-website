import Link from "next/link";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import RecentEventDialogueBox from "./RecentEventDialogueBox";
import { Libre_Caslon_Text } from "next/font/google";
import BookClubIndicator from "./BookClubIndicator";
import FirstLetterCapital from "./FirstLetterCapital";
import Typewriter from "./Typewriter";

const libre_caslon_text = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const Page1 = () => {
  return (
    <div className="mt-[29px] text-[#2C1810]">
      <p
        className={
          "font-[500] text-[96px] leading-[115.2px] mb-[19px] " +
          libre_caslon_text.className
        }
      >
        <span className="font-bold text-[#DA8E63]">L</span>
        iterary <span className="font-bold text-[#DA8E63]">A</span>
        ffairs <span className="font-bold text-[#DA8E63]">C</span>ommittee
      </p>
      <p className="font-[400] text-[20px] leading-[24.38px] text-[#8D4B31]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        repudiandae ab nam molestias officiis mollitia voluptate illo nemo
        tenetur, nihil, vero odio sapiente, dolorum quidem itaque optio magnam
        debitis atque!
      </p>
      <div className="flex items-end justify-between gap-4 mt-[39px]">
        <div className="w-[36%] h-[517px] flex flex-col justify-between">
          <BookClubIndicator />
          <p
            className={
              "flex justify-between items-center text-[96px] font-[400] leading-[115.2px] w-11/12  mx-auto text-black " +
              libre_caslon_text.className
            }
          >
            <span>
              <FirstLetterCapital letter="E" />
              vents{" "}
            </span>
            <FiArrowRight />
          </p>
        </div>
        <div className="w-[60%] flex justify-between gap-[20px]">
          <RecentEventDialogueBox isFirst={true} isLast={false} />
          <RecentEventDialogueBox isFirst={false} isLast={false} />
          <RecentEventDialogueBox isFirst={false} isLast={true} />
        </div>
      </div>
      <div className="font-[600] text-[24px] leading-[29.26px] text-end my-4">
        <Link href={`/events`}>View all</Link>
      </div>
    </div>
  );
};

export default Page1;
