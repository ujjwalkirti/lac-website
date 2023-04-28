import { db } from "@/Firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import React, { useState } from "react";
import EventBox from "./EventBox";

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [showPastEvents, setShowPastEvents] = useState("false");
  async function getPastEvents() {
    let localPastEvents: any = [];
    const q = query(collection(db, "events"), where("completed", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      localPastEvents.push(doc.data());
    });
    setShowPastEvents("true");
    setPastEvents(localPastEvents);
  }
  return (
    <div className="flex flex-col items-center gap-4 mt-5">
      <p>Sorry there are no events planned</p>
      <p>Why don't you have a look at past events?</p>

      <button
        className="dark:bg-white dark:text-[#2c1810] px-2 py-1 rounded-md font-semibold mx-auto w-32"
        onClick={() => {
          setShowPastEvents("loading");
          if (
            (showPastEvents === "true" || showPastEvents === "loading") &&
            pastEvents.length === 0
          ) {
            getPastEvents();
          }
        }}
      >
        {showPastEvents === "true" || showPastEvents === "loading"
          ? "Hide"
          : "Show"}{" "}
        all
      </button>

      {pastEvents.length !== 0 && showPastEvents === "true" && (
        <div>
          {pastEvents.map((lac_event: LAC_Event, index: number) => (
            <EventBox
              key={index}
              description={lac_event.description}
              img={lac_event.img}
              title={lac_event.title}
            />
          ))}
        </div>
      )}
      {showPastEvents === "loading" && <div>Loading</div>}
      {pastEvents.length === 0 && showPastEvents === "true" && (
        <div>Sorry, please check again!</div>
      )}
    </div>
  );
};

export default PastEvents;
