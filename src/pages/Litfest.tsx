import Event from '@/components/Litfest/Event';
import React from 'react';
import { Libre_Caslon_Text } from 'next/font/google';
import Eventinfo from '@/components/Litfest/Eventinfo';

type props={
    eventData: any;
}

const libre_caslon_text = Libre_Caslon_Text({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const litfest = ({eventData}:props) => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
        <section>
          <h2 className={"text-4xl py-8 text-[#2C1810] " + libre_caslon_text.className}>Lit Fest</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 mx-auto">
                {eventData?.map(function(item:any,index:number){
                    return(
                    // eslint-disable-next-line react/jsx-key
                    <Event key={index} img={item.img} title={item.title}/>
                    );
                })}
          </div>
          <div className="mt-10 mx-10">
            {eventData?.map(function(item:any,index:number){
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex flex-col col-span-1 min-w-100" key={index} >
                            <Eventinfo img={item.img} title={item.title}/>
                        </div>
                    );
                })}
            </div>
        </section>
    </div>
  )
}

export default litfest;

export async function getServerSideProps(){
    const URL = process.env.PORT ? `${process.env.PORT}/hello`: "/api/hello";
    const eventData = await fetch(URL).
    then(res=>res.json());

    return {
        props:{
            eventData: eventData.cards,
        }
    };
}