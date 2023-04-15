import Event from '@/components/Litfest/Event';
import React from 'react';
import { eventData } from '@/local-data/Litfest';
import Timeline from '@/components/Litfest/Timeline';
import { libre_caslon_text } from '@/utils';
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/Firebase";

type props = {
  litevents: Litevent[];
}

const Litfest = ({litevents}:props) => {
  return (
    <div className="w-full md:w-10/12 mx-auto">
        <section>
          <h2 className={"text-4xl py-8 pl-3 text-[#2C1810] dark:bg-[#2C1810] dark:text-[#dfa437] " + libre_caslon_text.className}>Lit Fest</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 mx-auto">
                {litevents?.map(function(item:any,index:number){
                    return(
                    // eslint-disable-next-line react/jsx-key
                    <Event key={index} img={item.img} title={item.title}/>
                    );
                })}
          </div>
          <div className="mt-10 md:mx-10">
            <Timeline events={litevents}/>
          </div>
        </section>
    </div>
  )
}

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