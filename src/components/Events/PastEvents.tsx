import { db } from "@/Firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import React, { useState } from "react";
import EventBox from "./EventBox";
import { DotSpinner } from "@uiball/loaders";
import { useTheme } from "next-themes";

const PastEvents = () => {
  const { theme } = useTheme();

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
      <button
        className="dark:bg-white bg-[#2c1810] text-[#f8f3ed] dark:text-[#2c1810] px-2 py-1 rounded-md font-semibold mx-auto w-32"
        onClick={() => {
          if (showPastEvents === "true" || showPastEvents === "loading") {
            setShowPastEvents("false");
          }

          if (showPastEvents === "false" && pastEvents.length === 0) {
            setShowPastEvents("loading");

            getPastEvents();
          }
          if (showPastEvents === "false" && pastEvents.length !== 0) {
            setShowPastEvents("true");
          }
        }}
      >
        {showPastEvents === "true" || showPastEvents === "loading"
          ? "Hide"
          : "Show"}{" "}
        all
      </button>
      {/* 

              Show all the past events, if any.

        */}
      {pastEvents.length !== 0 && showPastEvents === "true" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 px-2 gap-2">
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

      {/* Until the past events are fetched, loading symbol will be displayed */}
      {showPastEvents === "loading" && (
        <div>
          <DotSpinner
            size={40}
            speed={0.9}
            color={theme === "dark" ? "white" : "brown"}
          />
        </div>
      )}
      {/* If there are no past events as well, apology message will be displayed */}
      {pastEvents.length === 0 && showPastEvents === "true" && (
        <div>Sorry, please check again!</div>
      )}
    </div>
  );
};

export default PastEvents;
