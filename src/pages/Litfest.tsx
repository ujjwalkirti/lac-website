import Event from '@/components/Litfest/Event';
import React from 'react';
import { Libre_Caslon_Text } from 'next/font/google';
import { eventData } from '@/local-data/Litfest';
import Timeline from '@/components/Litfest/Timeline';

const libre_caslon_text = Libre_Caslon_Text({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const litfest = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
        <section>
          <h2 className={"text-4xl py-8 pl-3 text-[#2C1810] " + libre_caslon_text.className}>Lit Fest</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 mx-auto">
                {eventData?.map(function(item:any,index:number){
                    return(
                    // eslint-disable-next-line react/jsx-key
                    <Event key={index} img={item.img} title={item.title}/>
                    );
                })}
          </div>
          <div className="mt-10 mx-10">
            <Timeline/>
          </div>
        </section>
    </div>
  )
}

export default litfest;