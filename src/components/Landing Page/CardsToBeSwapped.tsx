import { libre_caslon_text, valuesOfLAC } from "@/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ValueImageCard from "./ValueImageCard";

const valueUrl = [
  {
    url: "/values/speaking.svg",
    dark_url: "/values/speaking-dark.svg",
    images: valuesOfLAC[0].gallery,
  },
  {
    url: "/values/quizzing.svg",
    dark_url: "/values/quizzing-dark.svg",
    images: valuesOfLAC[2].gallery,
  },
  {
    url: "/values/reading.svg",
    dark_url: "/values/reading-dark.svg",
    images: valuesOfLAC[1].gallery,
  },
];

type props = {
  showValues?: boolean;
};

const CardsToBeSwapped = ({ showValues }: props) => {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => {
        if (prevDiv === 3) {
          return 1;
        } else {
          return prevDiv + 1;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {valueUrl.map((urls, index) => {
        if (currentDiv === index + 1) {
          return (
            <div className={showValues ? "flex flex-col space-y-4" : ""}>
              {showValues && (
                <p
                  className={
                    "text-5xl font-semibold text-center underline-offset-2 underline " + libre_caslon_text.className
                  }
                >
                  {showName(index + 1)}
                </p>
              )}
              <ValueImageCard
                key={index}
                url={urls.url}
                dark_url={urls.dark_url}
              />
              {showValues && (
                <div className="w-screen mb-5 relative h-[50vh]">
                  <Image
                    alt="some image"
                    key={index}
                    height={300}
                    width={300}
                    src={urls.images[0]}
                    className="rounded-full object-cover h-64 w-64 absolute top-0 left-4 shadow-xl"
                  />

                  <Image
                    alt="some image"
                    key={index}
                    height={300}
                    width={300}
                    src={urls.images[1]}
                    className="rounded-full object-cover h-56 w-56  absolute bottom-0 right-4 shadow-xl"
                  />
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default CardsToBeSwapped;

function showName(indexOfValue: number) {
  if (indexOfValue === 1) {
    return "Speaking";
  } else if (indexOfValue === 2) {
    return "Quizzing";
  } else {
    return "Reading";
  }
}
