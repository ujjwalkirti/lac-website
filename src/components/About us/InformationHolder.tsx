import React from "react";
import FirstLetterCapital from "../Landing Page/FirstLetterCapital";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

type props = {
  name: string;
  position: string;
  img: string;
  message?: string;
  designation: string;
  contact?: number[];
  socials?: string[];
};

const InformationHolder = ({
  name,
  position,
  img,
  message,
  designation,
  contact,
  socials,
}: props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 shadow-xl py-3 px-2 rounded-lg bg-white w-11/12 dark:bg-[#603726] dark:text-[#dfa437] lg:w-full mx-auto">
      <div
        className={
          "flex flex-col items-center mx-auto  lg:gap-3 " +
          `${message ? "lg:w-1/3 " : ""}`
        }
      >
        <p className="text-[30px] text-center font-semibold">{name}</p>
        <p className="text-[18px] text-center ">{position}</p>
        <p className="text-center">({designation})</p>
        {/* Faculty Advisor image */}
        <div className="h-[250px] w-[75%] relative mx-auto">
          <Image
            src={img}
            fill
            alt="LAC SVNIT Faculty Advisor"
            className="object-contain"
          />
        </div>
        {contact && (
          <div className="flex flex-col items-center justify-between mt-4 px-3 w-full space-y-4">
            <p className="flex items-center justify-center text-xl gap-3 bg-blue-500 text-white dark:bg-[#9A7B4F] dark:text-yellow-400 w-2/3 mx-auto px-1 py-2 rounded-md">
              <IoMdCall />
              {contact[0]}
            </p>
            <Link
              href={`https://wa.me/${contact[1]}`}
              className="flex items-center justify-center text-xl gap-3 bg-green-500 text-white dark:bg-[#9A7B4F] dark:text-yellow-400 w-2/3 mx-auto px-1 py-2 rounded-md"
            >
              <AiOutlineWhatsApp />
              {contact[1]}
            </Link>
          </div>
        )}
        {socials && (
          <div className="grid grid-cols-3 gap-3 text-[40px] w-full px-3 my-4">
            {/* facebook */}
            {socials[0] && (
              <Link
                className="text-blue-600 dark:text-[#dfa437] mx-auto"
                href={socials[0]}
              >
                <AiFillFacebook />
              </Link>
            )}
            {/* LinkedIn */}
            {socials[1] && (
              <Link
                className="text-blue-600  dark:text-[#dfa437]  mx-auto"
                href={socials[1]}
              >
                <AiFillLinkedin />
              </Link>
            )}
            {/* Twitter */}
            {socials[2] && (
              <Link
                className="text-blue-600  dark:text-[#dfa437]  mx-auto"
                href={socials[2]}
              >
                <AiFillTwitterSquare />
              </Link>
            )}
            {/* Gmail */}
            {socials[3] && (
              <Link
                className=" text-red-600 dark:text-[#dfa437]  mx-auto"
                href={socials[3]}
              >
                <SiGmail />
              </Link>
            )}
            {/* Instagram */}
            {socials[4] && (
              <Link
                className=" text-purple-600 dark:text-[#dfa437]  mx-auto"
                href={socials[4]}
              >
                <AiFillInstagram />
              </Link>
            )}
          </div>
        )}
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
