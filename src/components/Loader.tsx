import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Loader = () => {
  const { theme } = useTheme();
  return (
    <div className="fixed z-50 h-screen w-screen flex justify-center items-center bg-white">
      {theme === "dark" ? (
        <Image src={`/logo-black.jpeg`} height={60} width={60} alt="LAC logo" className="rounded-full"/>
      ) : (
        <Image src={`/logo-white.png`} height={60} width={60} alt="LAC logo" className="rounded-full"/>
      )}
    </div>
  );
};

export default Loader;
