import { libre_caslon_text } from "@/utils";
import React, { useState } from "react";
import CardsToBeSwapped from "./CardsToBeSwapped";

const ThreeValuesOfLACForMobile = () => {
  const [showValues, setShowValues] = useState(false);
  return (
    <div className="lg:hidden mt-10">
      <div
        className={`flex items-center justify-center space-x-4 my-4 ${
          showValues ? "flex-col" : ""
        }`}
      >
        <div
          className={`w-60 h-60  -ml-16 relative ${showValues ? "hidden" : ""}`}
        >
          <CardsToBeSwapped />
        </div>
        <div className=" flex flex-col items-center space-y-4 my-4">
          <p className={"text-3xl text-center " + libre_caslon_text.className}>
            Values of <span className="text-[#DA8E63] text-5xl font-bold ml-3">LAC</span>
          </p>
          {!showValues && (
            <button
              className="rounded-md px-2 py-1 bg-[#DA8E63] dark:text-white"
              onClick={() => {
                setShowValues(!showValues);
              }}
            >
              Tap here!
            </button>
          )}
        </div>
        <div className={`relative ${!showValues ? "hidden" : ""}`}>
          <CardsToBeSwapped showValues={showValues} />
        </div>
      </div>
    </div>
  );
};

export default ThreeValuesOfLACForMobile;
