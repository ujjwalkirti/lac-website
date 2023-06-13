import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <div className="dark:bg-[#603726] bg-white rounded-lg shadow-lg mx-auto my-3 flex flex-col items-center justify-start w-[300px] md:w-[270px] relative " onMouseEnter={()=>{setShowDetails(true)}}
      onMouseLeave={()=>{setShowDetails(false)}}
    >
      <Image
        src={developer.image}
        height={200}
        width={200}
        alt={`${developer.tag} profile picture`}
        className="h-full w-full object-cover rounded-lg"
      />
      {showDetails && (
        <div className="flex flex-col items-start justify-between py-2 px-2 gap-3 h-full w-full rounded-lg absolute animate-fade-in bg-black bg-opacity-40">
          <p className="text-[28px] font-semibold">{developer.name}</p>
          <p className="text-xl">{developer.tag}</p>
          <div className="">
            {yearFormatter(developer.year)} - {developer.branch}
          </div>
          <hr />
          <div className="flex justify-center w-full  text-[35px] lg:text-[25px] gap-6">
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
      )}
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
