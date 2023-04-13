import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import NormalBlog from "@/components/Blogs/NormalBlog";
import { local_blogs } from "@/local-data/Blogs";
import Head from "next/head";
import React from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase.js";

type props = {
  blogs: Blog[];
};

const Blogs = ({ blogs }: props) => {
  return (
    <section>
      <Head>
        <title>LAC - Blogs</title>
      </Head>
      <div className="min-h-screen px-8">
        <p className="font-[600] text-[96px] mt-[48px] mb-[27px]">LAC Blog</p>
        {/* featured blog */}
        <FeaturedBlog blog={local_blogs[0]} />
        {/* remaining blogs paginated with 6 blogs divided across 3 columns and 2 rows */}
        <div className="grid grid-cols-3 gap-8">
          {blogs.map((blog, index) => {
            if (index !== 0) {
              return <NormalBlog blog={blog} key={index} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

export async function getServerSideProps(context: any) {
  let blogs: any[] = [];
  /* get only those blogs from firestore database whose isVerified value is true.

  You will get more details abo=ut it in the firestore documentation
  */

  const q = query(collection(db, "blogs"), where("isVerified", "==", true));

  const localblogs = await getDocs(q);
  localblogs.forEach((doc: { id: any; data: () => any }) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    blogs.push(doc.data());
  });

  /*const q = query(collection(db, "blogs"), where("isVerified", "==", true));
  blogs = await getDocs(q);
  blogs = JSON.parse(JSON.stringify(blogs));*/

  return {
    props: {
      blogs,
    },
  };
}
