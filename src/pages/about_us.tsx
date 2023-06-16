import { db2 } from "@/Firebase";
import InformationHolder from "@/components/About us/InformationHolder";
import { libre_caslon_text } from "@/local-data/Fonts";
import { members } from "@/local-data/Members";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import React from "react";

type props = {
  members: {
    chairperson: Representatives;
    co_chairperson: Representatives[];
    secretary: Representatives;
    j_secretary: Representatives[];
  };
};
const AboutUs = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-5 px-2 py-3">
      <Head>
        <title>About Us</title>
      </Head>
      <p className={"text-[60px] " + libre_caslon_text.className}>About Us</p>
      <p
        className={
          "text-[40px] mt-5 lg:text-[50px] text-center " +
          libre_caslon_text.className
        }
      >
        Faculty Advisors
      </p>
      {/* Faculty Advisor */}
      <div className="w-full lg:w-auto">
        <InformationHolder {...members.chairperson} />
      </div>
      {/* Chairmans */}
      <div className="flex flex-col lg:flex-row items-center gap-x-5">
        {members.co_chairperson.map((faculty, index) => (
          <InformationHolder {...faculty} key={index} />
        ))}
      </div>
      {/* Students in-charge */}
      <p
        className={
          "text-[40px] mt-10 lg:text-[50px] text-center " +
          libre_caslon_text.className
        }
      >
        Student Representatives
      </p>
      <div className="flex flex-col items-center gap-10">
        {/* Secretary */}
        <div className="w-full lg:w-[400px]">
          <InformationHolder {...members.secretary} />
        </div>
        {/* 2 Joint Secretaries */}
        <div className="flex flex-col lg:flex-row gap-10">
          {members.j_secretary.map((student, index) => (
            <InformationHolder {...student} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

/*
  organisational struture of LAC
  Faculty Advisor
  Chairman + Co-Chairman
  {
    student in-charge: 
      1. Secretary
      2. 3 - Joint Secretary
  }

*/

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   var members = {
//     chairperson: {},
//     co_chairperson: [] as DocumentData[],
//     secretary: {},
//     j_secretary: [] as DocumentData[],
//   };
//   const querySnapshot = await getDocs(collection(db2, "members"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     switch (doc.id) {
//       case "chairperson":
//         members.chairperson = doc.data();
//         break;
//       case "co-chairperson":
//         members.co_chairperson.push(doc.data());
//         break;
//       case "secretary":
//         members.secretary = doc.data();
//         break;
//       case "joint-secretary":
//         members.j_secretary.push(doc.data());
//     }
//   });
//   return {
//     props: {
//       members,
//     },
//   };
// }
