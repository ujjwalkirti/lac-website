import React from 'react'
import Image from 'next/legacy/image';
import { Libre_Caslon_Text } from 'next/font/google';

type props = {
    img: string,
    title: string
};

const libre_caslon_text = Libre_Caslon_Text({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const Eventinfo = ({img,title}:props) => {
    return (
      <div id={`${title}`} className="flex-col md:flex md:flex-row md:justify-start gap-y-11 cursor-pointer hover:scale-105 my-2 hover:shadow-lg transition transform duration-300 ease-out min-w-75 mb-8 rounded-2xl">
          <div className="relative h-80 w-full flex-shrink-0 md:w-80 m-auto">
              <Image src={img} layout="fill" alt="" className="rounded-xl"/>
          </div>
          <div className={"flex flex-col pl-2 md:pl-5 md:m-auto" + libre_caslon_text.className}>
              <h3 className="text-lg md:text-2xl mt-1 md:mt-3 mx-auto">{title}</h3>
              <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore debitis libero est magni dolores, quos maiores soluta error eos impedit repellat, ratione, accusantium magnam ea dignissimos natus incidunt? Fugit, soluta.</p>
          </div>
      </div>
    )
  };

export default Eventinfo