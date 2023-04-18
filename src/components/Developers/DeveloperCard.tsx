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
    <div className="dark:bg-[#603726] px-2 py-3 rounded-lg shadow-lg">
      <Image
        src={developer.image}
        height={200}
        width={200}
        alt={`${developer.tag} profile picture`}
        className="w-full object-contain  h-[400px]"
      />
      <div className="flex flex-col items-center py-2 gap-3">
        <p className="text-[30px] font-semibold">{developer.name}</p>
        <p className="text-xl">{developer.tag}</p>
        <div className="grid grid-cols-5 text-[35px] gap-6">
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

/*
  github
  linkedin
  instagram
  personal portfolio
  twitter


*/
