import React from "react";

type props = {
  words: string[];
};

const Typewriter = ({ words }: props) => {
  return (
    <div>
      {words.map((word, index) => (
        <MainEffect key={index} word={word} />
      ))}
    </div>
  );
};

export default Typewriter;

type secondaryProps = {
  word: string;
};

function MainEffect({ word }: secondaryProps) {
  return <span>
    
  </span>;
}
