import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineTwitter,
} from "react-icons/ai";

type props = {
  developer: Developer;
};

const DeveloperCard = ({ developer }: props) => {
  return (
    <div className="dark:bg-[#603726] bg-white rounded-lg shadow-lg mx-auto my-3 flex flex-col items-center justify-start w-full md:w-[300px]">
      <Image
        src={developer.image}
        height={200}
        width={200}
        alt={`${developer.tag} profile picture`}
        className="w-full h-[400px] md:h-[300px]"
      />
      <div className="flex flex-col items-center justify-between h-auto py-2 px-2 gap-3">
        <p className="text-[28px] font-semibold">{developer.name}</p>
        <p className="text-xl">{developer.tag}</p>
        <div className=" text-center">
          {yearFormatter(developer.year)} - {developer.branch}
        </div>
        <hr />
        <div className="flex  text-[35px] gap-6">
          {developer.links?.map((link, index) => {
            switch (index) {
              case 0:
                if (link !== " ") {
                  return (
                    <Link href={link}>
                      <AiOutlineGithub />
                    </Link>
                  );
                }
                break;
              case 1:
                if (link !== " ") {
                  return (
                    <Link href={link}>
                      <AiFillLinkedin />
                    </Link>
                  );
                }
                break;
              case 2:
                if (link !== " ") {
                  return (
                    <Link href={link}>
                      <AiFillInstagram />
                    </Link>
                  );
                }
                break;
              case 3:
                if (link !== " ") {
                  return (
                    <Link href={link}>
                      <AiOutlineLink />
                    </Link>
                  );
                }
                break;
              case 4:
                if (link !== " ") {
                  return (
                    <Link href={link}>
                      <AiOutlineTwitter />
                    </Link>
                  );
                }
                break;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;

function yearFormatter(year: number) {
  switch (year) {
    case 1:
      return "1st Year";
    case 2:
      return "Sophomore";
    case 3:
      return "Pre-final Year";
    case 4:
      return "Final Year";
    case 5:
      return "Final Year";
  }
}

/*
  github
  linkedin
  instagram
  personal portfolio
  twitter


*/
