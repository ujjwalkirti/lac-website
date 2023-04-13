import React from "react";
type props = {
  letter: string;
  bgColor?: string;
};
const FirstLetterCapital = ({ letter, bgColor }: props) => {
  return <span className={"font-bold " + `bg-[${bgColor}]`}>{letter}</span>;
};

export default FirstLetterCapital;
