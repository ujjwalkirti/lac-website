import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type props = {
  url: string;
  dark_url: string;
};

const ValueImageCard = ({ url, dark_url }: props) => {
  const [timeToDisappear, setTimeToDisappear] = useState(false);

  useEffect(() => {
    const timer = setInterval(function () {
      setTimeToDisappear(true);
    }, 3000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  const { theme } = useTheme();
  return (
    <div
      className={`animate-fade-in ${
        timeToDisappear ? "animate-fade-out" : ""
      }`}
    >
      <Image
        src={theme === "dark" ? dark_url : url}
        height={200}
        width={200}
        alt="Speaking value of LAC, SVNIT"
        className="h-40 w-40 mx-auto"
      />
    </div>
  );
};

export default ValueImageCard;
