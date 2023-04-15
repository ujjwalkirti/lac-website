import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import NormalBlog from "@/components/Blogs/NormalBlog";
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
      <div className="min-h-screen px-3 lg:px-8">
        <p className="font-[600] text-[48px] text-center lg:text-left lg:text-[96px] mt-[48px] mb-[27px]">
          LAC Blog
        </p>
        {/* featured blog */}
        {Object.keys(blogs[0]).length !== 0 && <FeaturedBlog blog={blogs[0]} />}
        {/* remaining blogs paginated with 6 blogs divided across 3 columns and 2 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => {
            if (index !== 0 && blog.isFeatured != true) {
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

  let featuredBlog: any[] = [];
  blogs.push({});

  const q = query(collection(db, "blogs"), where("isVerified", "==", true));

  const localblogs = await getDocs(q);
  localblogs.forEach((doc: { id: any; data: () => any }) => {
    // doc.data() is never undefined for query doc snapshots
    if (doc.data().isFeatured) {
      featuredBlog.push(doc.data());
    } else {
      blogs.push(doc.data());
    }
  });

  const sortedData = [...featuredBlog].sort(
    //@ts-ignore
    (a: number, b: number) => new Date(a.date) - new Date(b.date)
  );
  blogs[0] = sortedData[sortedData.length - 1];

  /*const q = query(collection(db, "blogs"), where("isVerified", "==", true));
  blogs = await getDocs(q);
  blogs = JSON.parse(JSON.stringify(blogs));*/

  return {
    props: {
      blogs,
    },
  };
}
