import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import EventBox from "@/components/Events/EventBox";
import { libre_caslon_text } from "@/utils";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Firebase";
import Head from "next/head";
import React from "react";

type props = {
  events: LAC_Event[];
};

const Events = ({ events }: props) => {
  return (
    <section className="min-h-screen flex flex-col items-center gap-5 px-2 py-5 mx-5 my-auto">
      <Head>
        <title>Events</title>
      </Head>
      <p className={"text-[60px] " + libre_caslon_text.className}>Events</p>
      {/* Event 1 */}
      <div className="grid grid-cols-1 gap-5 items-start lg:grid-cols-3 lg:w-11/12 lg:mx-auto">
        {events.map((event, index) => (
          <EventBox
            key={index}
            completed={event.completed}
            date={event.date}
            description={event.description}
            img={event.img}
            reglink={event.reglink}
            teamMembers={event.teamMembers}
            title={event.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;

export async function getServerSideProps(context: any) {
  let events: any[] = [];
  const qe = query(collection(db, "events"));
  const localEvents = await getDocs(qe);
  localEvents.forEach((doc: { id: any; data: () => any }) => {
    events.push(doc.data());
  });

  return {
    props: {
      events,
    },
  };
}
