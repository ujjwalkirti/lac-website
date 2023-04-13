import React from "react";

const texts = ["Literary", "Affairs", "Committee"];

const Typewriter = () => {
  return (
    <div>
      {texts.map((text, index) => (
        <p key={index}>{}</p>
      ))}
    </div>
  );
};

export default Typewriter;
