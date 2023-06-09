import { db2 } from "@/Firebase";
import DeveloperCard from "@/components/Developers/DeveloperCard";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import SuggestionsFromUsers from "@/components/Developers/SuggestionsFromUsers";
import { libre_caslon_text } from "@/local-data/Fonts";
import { GetServerSidePropsContext } from "next";

type props = {
  developers: Developer[];
  designers: Developer[];
};
const Developers = ({ developers, designers }: props) => {
  return (
    <section className="min-h-[55vh] flex flex-col items-center px-2 lg:w-11/12 mx-auto pt-20">
      <Head>
        <title>Developers 💻 & Designers 🎨</title>
      </Head>
      <p
        className={
          "text-[45px] text-center my-5 " + libre_caslon_text.className
        }
      >
        Developers
      </p>
      <div className="w-full px-2">
        {/* for lead developer */}
        {Object.keys(developers[0]).length !== 0 && (
          <DeveloperCard developer={developers[0]} />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-3">
        {/* for other developers */}

        {developers.map((developer, index) => {
          if (index !== 0)
            return <DeveloperCard developer={developer} key={index} />;
        })}
      </div>
      {/* For UI/UX Designer */}
      <p
        className={
          "text-[45px] text-center mb-5 mt-10 " + libre_caslon_text.className
        }
      >
        UI/UX Designer
      </p>
      <div className="px-3">
        {designers.map((developer, index) => {
          return <DeveloperCard developer={developer} key={index} />;
        })}
      </div>
      <SuggestionsFromUsers />
    </section>
  );
};

export default Developers;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let developers: any[] = [];
  let designers: any[] = [];
  developers.push({});
  const querySnapshot = await getDocs(collection(db2, "developers"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().tag === "UI/UX Designer") {
      designers.push(doc.data());
    } else {
      if (doc.data().tag === "Lead Developer") {
        developers[0] = doc.data();
      } else {
        developers.push(doc.data());
      }
    }
  });
  return {
    props: {
      developers,
      designers,
    },
  };
}
