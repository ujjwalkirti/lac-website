import { db } from "@/Firebase";
import DeveloperCard from "@/components/Developers/DeveloperCard";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import React from "react";

type props = {
  developers: Developer[];
};
const Developers = ({ developers }: props) => {
  return (
    <section className="min-h-[55vh]">
      <Head>
        <title>Developers 💻 </title>
      </Head>
      {/* for lead developer */}
      {Object.keys(developers[0]).length !== 0 && (
        <div>
          <DeveloperCard developer={developers[0]} />
        </div>
      )}
      {/* for other developers */}
      <div>
        {developers.map((developer, index) => {
          if (index !== 0)
            return <DeveloperCard developer={developer} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Developers;

export async function getServerSideProps(context: any) {
  let developers: any[] = [];
  developers.push({});
  const querySnapshot = await getDocs(collection(db, "developers"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().tag === "Lead Developer") {
      developers[0] = doc.data();
    } else {
      developers.push(doc.data());
    }
  });
  return {
    props: {
      developers,
    },
  };
}
