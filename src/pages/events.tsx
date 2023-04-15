import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import EventBox from "@/components/Events/EventBox";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <section className="min-h-screen flex flex-col items-center gap-5 px-2 py-5 mx-5 my-auto">
      <Head>
        <title>Upcoming Events</title>
      </Head>
      <p className={"text-[60px] " + libre_caslon_text.className}>
        <FirstLetterCapital letter="U" bgColor="#DA8E63" />
        pcoming <FirstLetterCapital letter="E" bgColor="#DA8E63" />
        vents
      </p>
      {/* Event 1 */}
      <div className="grid grid-cols-1 gap-5 items-center lg:grid-cols-3 ">
        <EventBox
          img="https://links.papareact.com/2io"
          title="Murder Mystery"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Laborum fuga debitis, quos dolores sint, architecto amet tempore maxime 
            quibusdam remtempora doloribus vitae facilis numquam atque ex ad voluptatibus 
            sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas ab."
          teamMembers={4}
          date="14th February 2023"
          reglink="https://docs.google.com/forms/d/e/1FAIpQLSckhc9sO0DCnf3BD9Gt3pKBLinFfp8qF0h-ZH761nU0MzpNEQ/viewform"
        />
        <EventBox
          img="https://links.papareact.com/2io"
          title="Murder Mystery"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Laborum fuga debitis, quos dolores sint, architecto amet tempore maxime 
            quibusdam remtempora doloribus vitae facilis numquam atque ex ad voluptatibus 
            sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas ab."
          teamMembers={4}
          date="14th February 2023"
          reglink="https://docs.google.com/forms/d/e/1FAIpQLSckhc9sO0DCnf3BD9Gt3pKBLinFfp8qF0h-ZH761nU0MzpNEQ/viewform"
        />
        <EventBox
          img="https://links.papareact.com/2io"
          title="Murder Mystery"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Laborum fuga debitis, quos dolores sint, architecto amet tempore maxime 
            quibusdam remtempora doloribus vitae facilis numquam atque ex ad voluptatibus 
            sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas ab."
          teamMembers={4}
          date="14th February 2023"
          reglink="https://docs.google.com/forms/d/e/1FAIpQLSckhc9sO0DCnf3BD9Gt3pKBLinFfp8qF0h-ZH761nU0MzpNEQ/viewform"
        />
      </div>
    </section>
  );
};

export default Events;
