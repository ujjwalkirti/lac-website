import EventBox from "@/components/Events/EventBox";
import PastEvents from "@/components/Events/PastEvents";
import { db2 } from "@/Firebase";
import { libre_caslon_text } from "@/local-data/Fonts";
import { collection, getDocs, query, where } from "@firebase/firestore";
import Head from "next/head";
import React from "react";

type props = {
  events: LAC_Event[];
  type: string;
};

function firstLetterCapital(word: string) {
  return word[0].toUpperCase() + word.substr(1);
}

const EventsBasedOnTypes = ({ events, type }: props) => {
  if (events.length === 0) {
    return (
      <div className="lg:w-11/12 mx-auto flex flex-col items-center pt-20">
        <Head>
          <title>{firstLetterCapital(type) + " Events"}</title>
        </Head>
        <p
          className={
            "font-medium text-5xl leading-relaxed text-center mb-6 " +
            libre_caslon_text.className
          }
        >
          {firstLetterCapital(type)} Events
        </p>
        <p>Sorry there are no events planned</p>
        <p>Why don't you have a look at past events?</p>
        <PastEvents />
      </div>
    );
  }
  // following jsx will be rendered once we get even a single upcoming event.
  return (
    <div className="lg:w-11/12 mx-auto px-2">
      <Head>
        <title>{firstLetterCapital(type) + " Events"}</title>
      </Head>
      <p
        className={
          "font-medium text-5xl leading-relaxed text-center mb-6 " +
          libre_caslon_text.className
        }
      >
        {firstLetterCapital(type)} Events
      </p>
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3">
        {events.map((lac_event: LAC_Event, index: number) => (
          <EventBox
            key={index}
            description={lac_event.description}
            img={lac_event.img}
            title={lac_event.title}
            reglink={lac_event.reglink ? lac_event.reglink : undefined}
            teamMembers={
              lac_event.teamMembers ? lac_event.teamMembers : undefined
            }
            date={lac_event.date}
          />
        ))}
      </div>
      {/* if user wants to have a look at past events! */}
      <PastEvents />
    </div>
  );
};

export default EventsBasedOnTypes;
export async function getServerSideProps(context: any) {
  const type = context.params.type;
  let events: any = [];
  const q = query(collection(db2, "events"), where("type", "==", type));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    events.push(doc.data());
  });
  return {
    props: {
      events,
      type,
    },
  };
}
