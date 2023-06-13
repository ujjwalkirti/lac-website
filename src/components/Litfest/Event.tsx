import React from 'react'
import Image from 'next/legacy/image';

type props = {
    img: string,
    title: string
};

const Event = ({img,title}:props) => {
  return (
    <div className="cursor-pointer lg:hover:scale-105 transition transform duration-300 ease-out rounded-md">
        <div className="relative h-80 w-80">
            <a href={`#${title}`}><Image src={img} layout="fill" alt="" objectFit="cover" className="rounded-md"/></a>
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
};

export default Event