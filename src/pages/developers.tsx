import { db } from "@/Firebase";
import DeveloperCard from "@/components/Developers/DeveloperCard";
import { libre_caslon_text } from "@/utils";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import React from "react";

type props = {
  developers: Developer[];
  designers: Developer[];
};
const Developers = ({ developers, designers }: props) => {
  return (
    <section className="min-h-[55vh] flex flex-col items-center">
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
      {/* for lead developer */}
      {Object.keys(developers[0]).length !== 0 && (
        <div className="px-3 lg:w-auto lg:mx-auto">
          <DeveloperCard developer={developers[0]} />
        </div>
      )}
      {/* for other developers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        UX Designer
      </p>
      <div className="px-3">
        {designers.map((developer, index) => {
          return <DeveloperCard developer={developer} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Developers;

export async function getServerSideProps(context: any) {
  let developers: any[] = [];
  let designers: any[] = [];
  developers.push({});
  const querySnapshot = await getDocs(collection(db, "developers"));
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
    console.log(designers);
  });
  return {
    props: {
      developers,
      designers,
    },
  };
}
