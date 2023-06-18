import React from "react";
type props = {
  letter: string;
};
const FirstLetterCapital = ({ letter }: props) => {
  return <span className={`font-bold`}>{letter}</span>;
};

export default FirstLetterCapital;
