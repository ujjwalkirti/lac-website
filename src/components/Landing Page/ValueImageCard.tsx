import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type props = {
  url: string;
  dark_url: string;
  images: string[];
};

const ValueImageCard = ({ url, dark_url, images }: props) => {
  const [timeToDisappear, setTimeToDisappear] = useState(false);

  useEffect(() => {
    const timer = setInterval(function () {
      setTimeToDisappear(true);
    }, 4500);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col w-full gap-4 animate-fade-in ${timeToDisappear ? "animate-fade-out" : ""}`}
    >
      <Image
        src={theme === "dark" ? dark_url : url}
        height={200}
        width={200}
        alt="Picture representing one of the values of LAC, SVNIT"
        className="h-40 w-40 mx-auto"
      />
      <div className={`w-full mb-5 relative h-[60vh]`}>
        <Image
          alt="some image"
          height={300}
          width={300}
          src={images[0]}
          className="rounded-full object-cover h-72 w-72 absolute top-0 left-0 sm:rounded-md sm:h-80 sm:w-2/3 shadow-xl"
        />

        <Image
          alt="some image"
          height={300}
          width={300}
          src={images[1]}
          className="rounded-full object-cover h-64 w-64  absolute bottom-0 right-0 sm:rounded-md sm:w-72 shadow-xl"
        />
      </div>
    </div>
  );
};

export default ValueImageCard;
