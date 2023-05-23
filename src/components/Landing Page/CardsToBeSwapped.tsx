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
    short_desc: valuesOfLAC[0].short_desc,
  },
  {
    url: "/values/quizzing.svg",
    dark_url: "/values/quizzing-dark.svg",
    images: valuesOfLAC[2].gallery,
    short_desc: valuesOfLAC[2].short_desc,
  },
  {
    url: "/values/reading.svg",
    dark_url: "/values/reading-dark.svg",
    images: valuesOfLAC[1].gallery,
    short_desc: valuesOfLAC[1].short_desc,
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
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {valueUrl.map((urls, index) => {
        if (currentDiv === index + 1) {
          return (
            <div
              key={index}
              className={showValues ? "flex flex-col space-y-4" : ""}
            >
              {showValues && (
                <p
                  className={
                    "text-5xl font-semibold text-center " +
                    libre_caslon_text.className
                  }
                >
                  {showName(index + 1)}
                </p>
              )}
              <p className="text-center w-11/12 italic">{urls.short_desc}</p>
              <ValueImageCard
                key={index}
                url={urls.url}
                dark_url={urls.dark_url}
                images={urls.images}
              />
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
