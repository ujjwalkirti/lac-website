import Event from "@/components/Litfest/Event";
import React from "react";
import Timeline from "@/components/Litfest/Timeline";
import { libre_caslon_text } from "@/utils";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Firebase";
import Head from "next/head";
import CarouselLit from "@/components/Litfest/CarouselLit";

type props = {
  litevents: Litevent[];
};

const Litfest = ({ litevents }: props) => {
  return (
    <div className="w-screen md:w-10/12 mx-auto">
      <Head>
        <title>LitFest SVNIT, Surat</title>
      </Head>
      <section>
        <h2
          className={
            "text-4xl lg:text-[60px] font-semibold pt-8 pb-1 pl-3 text-center text-[#2C1810] dark:bg-[#2C1810] dark:text-[#dfa437] " +
            libre_caslon_text.className
          }
        >
          Lit Fest
        </h2>
        <div className="md:pl-3 md:pr-0 p-3">
          <p className="text-justify lg:text-left mx-4 mt-5 mb-10 leading-[30px]">
            A vision that our seniors saw and our juniors witnessed, an
            aspiration of the club, a reality that thousands enjoyed, LITFEST'23
            came into being on the 14th and 15th of October 2022. After months
            of hard work, sleepless nights, scrapped ideas, cold mails, numerous
            sponsor visits, countless meetings at various places, unmatched
            bonding, and tremendous support from everyone, LitFest was revived!
            But it was only the excitement, love, support, sponsors,
            participants, performers, and of course all the volunteers and the
            team that gave it life. From the inauguration to the debate and
            squid games, from the quiz to the Talk, and from Aditya Kulshreshth
            aka Kullubaazi to Strings and Stories performing for us, LitFest'23
            was truly a dream that turned into reality.
          </p>
          <CarouselLit events={litevents} />
        </div>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 mx-auto rounded-md">
          {litevents?.map(function (item: any, index: number) {
            return (
              // eslint-disable-next-line react/jsx-key
              <Event key={index} img={item.img} title={item.title} />
            );
          })}
        </div>
        <div className="mt-10 md:mx-10 sm:mx-3">
          <div className="mt-10 w-full flex-shrink-0 mx-auto">
            <h1 className={"m-auto text-4xl text-center pb-10 w-full " + libre_caslon_text.className}>Timeline</h1>
            <Timeline events={litevents}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Litfest;

export async function getServerSideProps(context: any) {
  let litevents: any[] = [];
  const q = query(collection(db, "litevents"));
  const localevents = await getDocs(q);
  localevents.forEach((doc: { id: any; data: () => any }) => {
    litevents.push(doc.data());
  });

  return {
    props: {
      litevents,
    },
  };
}
