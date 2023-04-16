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
    <div className="w-full md:w-10/12 mx-auto">
      <Head>
        <title>LitFest SVNIT, Surat</title>
      </Head>
      <section>
        <h2
          className={
            "text-4xl pt-8 pb-1 pl-3 text-center text-[#2C1810] dark:bg-[#2C1810] dark:text-[#dfa437] " +
            libre_caslon_text.className
          }
        >
          Lit Fest
        </h2>
        <div className="md:pl-3 md:pr-0 p-3">
          <p className="text-center mx-4 mt-5 mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, praesentium? Nesciunt quasi natus eveniet. Deserunt totam ipsam obcaecati rem vero animi ipsum, cum ratione reprehenderit! Perferendis deserunt culpa delectus voluptates?</p>
          <CarouselLit events={litevents}/>
        </div>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 mx-auto rounded-xl">
          {litevents?.map(function (item: any, index: number) {
            return (
              // eslint-disable-next-line react/jsx-key
              <Event key={index} img={item.img} title={item.title} />
            );
          })}
        </div>
        <div className="mt-10 md:mx-10">
          <Timeline events={litevents} />
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
