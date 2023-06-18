import Head from "next/head";
import Page1 from "@/components/Landing Page/Page1";
import Page2 from "@/components/Landing Page/Page2";
import Page3 from "@/components/Landing Page/Page3";
import ThreeValuesOfLac from "@/components/Landing Page/ThreeValuesOfLac";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db2 } from "@/Firebase";
import Link from "next/link";
import { AiFillRightCircle } from "react-icons/ai";
import ThreeValuesOfLACForMobile from "@/components/Landing Page/ThreeValuesOfLACForMobile";
import { GetServerSidePropsContext } from "next";

type props = {
  yetToHappenEvents: LAC_Event[];
  happenedEvent: LAC_Event[];
  featuredBlogs: { blog: Blog; id: string }[];
};

export default function Home({
  yetToHappenEvents,
  happenedEvent,
  featuredBlogs,
}: props) {
  return (
    <>
      <Head>
        <title>Literary Affairs Committee</title>
        <meta name="description" content="Website for LAC, SVNIT Surat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-4 lg:w-11/12 mx-auto pt-20">
        <Page1
          yetToHappenEventsCount={yetToHappenEvents.length}
          yetToHappenEvents={yetToHappenEvents}
          happenedEvent={happenedEvent}
        />
        <ThreeValuesOfLac />
        <ThreeValuesOfLACForMobile />
        <Page2 featuredBlogs={featuredBlogs} />
        <Page3 />
        <Link
          className="text-center dark:bg-[#F8F3ED] dark:text-[#2C1810] dark:border dark:border-[#f8f3ed] dark:hover:bg-[#2c1810] dark:hover:text-[#f8f3ed] bg-[#2C1810] text-[#FFFBF7] border border-[#2c1810] hover:bg-[#fffbf7] hover:text-[#2c1810] px-3 py-2 rounded-md flex justify-center items-center gap-3 w-[180px] mx-auto  transition-all duration-300"
          href={`/Litfest`}
        >
          Check it out! <AiFillRightCircle className="text-3xl" />
        </Link>
      </section>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let yetToHappenEvents: any[] = [];
  let happenedEvent: any[] = [];
  let featuredBlogs: any[] = [];
  // 1.fetch top 2 events whose completed status is false and one whose completed status is true
  const yetToHappenEventsQuery = query(
    collection(db2, "events"),
    where("completed", "==", false),
    orderBy("date", "desc"),
    limit(3)
  );
  const happenedEventsQuery = query(
    collection(db2, "events"),
    where("completed", "==", true),
    orderBy("date", "desc"),
    limit(3)
  );

  const yetToHappenEventsQuerySnapshot = await getDocs(yetToHappenEventsQuery);
  yetToHappenEventsQuerySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    yetToHappenEvents.push(doc.data());
  });

  const happenedEventsQuerySnapshot = await getDocs(happenedEventsQuery);
  happenedEventsQuerySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    happenedEvent.push(doc.data());
  });

  //2. fetch the 3 featured blogs and return them
  const featuredBlogsQuery = query(
    collection(db2, "blogs"),
    where("isFeatured", "==", true),
    limit(3)
  );

  const featuredBlogsQuerySnapshot = await getDocs(featuredBlogsQuery);
  featuredBlogsQuerySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    featuredBlogs.push({ blog: doc.data(), id: doc.id });
  });
  return {
    props: {
      yetToHappenEvents,
      happenedEvent,
      featuredBlogs,
    },
  };
}
