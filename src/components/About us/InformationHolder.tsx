import React from "react";
import FirstLetterCapital from "../Landing Page/FirstLetterCapital";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
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
    <div className="flex flex-col lg:flex-row gap-2 shadow-xl py-3 px-2 rounded-lg bg-white dark:bg-[#603726]  lg:w-full mx-auto">
      <div
        className={
          "flex flex-col items-center mx-auto gap-2 lg:gap-3 " +
          `${message ? "lg:w-2/5 " : "w-full"}`
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
            alt="Images of people from LAC,SVNIT"
            className="object-cover"
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
        <div className="flex gap-3 text-[40px] w-full px-3 my-4">
          {socials?.map((link, index) => {
            switch (index) {
              case 0:
                if (link !== " ") {
                  return (
                    <Link
                      className="dark:text-[#dfa437] mx-auto"
                      href={link}
                    >
                      <AiFillFacebook />
                    </Link>
                  );
                }
                break;
              case 1:
                if (link !== " ") {
                  return (
                    <Link
                      className=" dark:text-[#dfa437]  mx-auto"
                      href={socials[1]}
                    >
                      <AiFillLinkedin />
                    </Link>
                  );
                }
                break;
              case 2:
                if (link !== " ") {
                  return (
                    <Link
                      className=" dark:text-[#dfa437]  mx-auto"
                      href={link}
                    >
                      <AiOutlineTwitter />
                    </Link>
                  );
                }
                break;
              case 3:
                if (link !== " ") {
                  return (
                    <Link
                      className=" dark:text-[#dfa437]  mx-auto"
                      href={link}
                    >
                      <SiGmail />
                    </Link>
                  );
                }
                break;
              case 4:
                if (link !== " ") {
                  return (
                    <Link
                      className=" dark:text-[#dfa437]  mx-auto"
                      href={link}
                    >
                      <AiFillInstagram />
                    </Link>
                  );
                }
                break;
            }
          })}
        </div>
      </div>
      {/* His message */}
      {message && (
        <div
          className="flex flex-col lg:justify-center
        lg:gap-4 lg:mt-5 mb-3 lg:w-3/5"
        >
          <p className="text-center font-medium text-xl dark:text-[#dfa437]">
            Message from the Desk
          </p>
          <p className="text-justify italic px-3 lg:w-full lg:mx-auto ">
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
