import React from "react";
type props = {
  letter: string;
  bgColor?: string;
};
const FirstLetterCapital = ({ letter, bgColor }: props) => {
  return <span className={"font-bold " + `text-[${bgColor}]`}>{letter}</span>;
};

export default FirstLetterCapital;
