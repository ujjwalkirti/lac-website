import React from "react";
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
  department: string;
  img: string;
  message?: string;
  designation: string;
  contact?: number[];
  socials?: string[];
};

const InformationHolder = ({
  name,
  position,
  department,
  img,
  message,
  designation,
  contact,
  socials,
}: props) => {
  return (
    <div className="dark:bg-[#603726] bg-white rounded-lg shadow-lg mx-auto my-3 flex flex-col md:flex-row gap-2 w-full md:w-[500px]">
      {/* Faculty Advisor image */}
      <div className="h-[450px] w-full lg:w-[300px] relative mx-auto">
        <Image
          src={img}
          fill
          alt={`${name}'s image`}
          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none"
        />
      </div>
      <div className=" w-full lg:w-[200px] flex flex-col justify-between items-center px-2">
        <p className="text-[30px] text-center font-semibold">{name}</p>
        <div className="">
          <p className="text-[18px] text-center ">{position},</p>
          <p className="text-[18px] text-center ">{department}</p>
        </div>
        <p className="text-center">({designation})</p>
        {contact && !isNaN(contact[0]) && contact[0]!==null && (
          <div className="flex flex-col items-center justify-between mt-4 px-1 w-full space-y-4">
            <p className="flex items-center justify-center text-xl gap-3 shadow-xl border dark:bg-[#9A7B4F] dark:text-white w-2/3 md:w-full mx-auto px-1 py-2 rounded-md">
              <IoMdCall />
              {contact[0]}
            </p>
          </div>
        )}
        <div className="flex flex-row justify-center gap-10 text-[40px] md:gap-2 md:text-[30px] px-3 my-4">
          {socials?.map((link, index) => {
            switch (index) {
              case 0:
                if (link !== " ") {
                  return (
                    <Link className="dark:text-white mx-auto" href={link}>
                      <AiFillFacebook />
                    </Link>
                  );
                }
                break;
              case 1:
                if (link !== " ") {
                  return (
                    <Link
                      className=" dark:text-white  mx-auto"
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
                    <Link className=" dark:text-white  mx-auto" href={link}>
                      <AiOutlineTwitter />
                    </Link>
                  );
                }
                break;
              case 3:
                if (link !== " ") {
                  return (
                    <Link
                      className=" dark:text-white  mx-auto"
                      href={"mailto:" + link}
                    >
                      <SiGmail />
                    </Link>
                  );
                }
                break;
              case 4:
                if (link !== " ") {
                  return (
                    <Link className=" dark:text-white  mx-auto" href={link}>
                      <AiFillInstagram />
                    </Link>
                  );
                }
                break;
            }
          })}
          {contact && !isNaN(contact[1]) && contact[1]!==null && (
            <Link
              href={`https://wa.me/91${contact[1]}`}
              className="dark:text-white  mx-auto"
            >
              <AiOutlineWhatsApp />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationHolder;
