import Image from "next/image";
import React from "react";

type props = {
  developer: Developer;
};

const DeveloperCard = ({ developer }: props) => {
  return (
    <div className="">
      <Image
        src={developer.image}
        height={200}
        width={200}
        alt={`${developer.tag} profile picture`}
      />
    </div>
  );
};

export default DeveloperCard;
