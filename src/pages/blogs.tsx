import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import NormalBlog from "@/components/Blogs/NormalBlog";
import Head from "next/head";
import React from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase.js";
import { libre_caslon_text } from "@/utils";

type props = {
  blogs: { blog: Blog; id: string }[];
};

const Blogs = ({ blogs }: props) => {
  return (
    <section className="lg:w-11/12 mx-auto">
      <Head>
        <title>LAC - Blogs</title>
      </Head>
      <div className="min-h-screen px-3 lg:px-8">
        <p
          className={
            "font-[600] text-[62px] text-center lg:text-left lg:text-[76px] mt-[18px] mb-[27px] lg:mb-0 " +
            libre_caslon_text.className
          }
        >
          LAC Blogs
        </p>
        <p className="mb-7 leading-[30px]">
          Here is LAC’s attempt to recording their opinions which are generally
          voiced, the LAC Blogs reflect a sense of belonging and common
          community where every opinion is respected and gracefully accepted.
        </p>
        {/* featured blog */}
        {Object.keys(blogs[0]).length !== 0 && (
          <FeaturedBlog blog={blogs[0].blog} id={blogs[0].id} />
        )}
        {/* remaining blogs paginated with 6 blogs divided across 3 columns and 2 rows */}
        <p
          className={
            "font-[600] text-[29px] text-center lg:text-[46px] mt-[18px] mb-[27px] " +
            libre_caslon_text.className
          }
        >
          Other Blogs
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => {
            if (index !== 0) {
              return <NormalBlog id={post.id} blog={post.blog} key={index} />;
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

  let featuredBlog: any[] = [];
  // occupying the 0th index for the most recent featured blog
  blogs.push({});

  const q = query(collection(db, "blogs"), where("isVerified", "==", true));

  const localblogs = await getDocs(q);
  localblogs.forEach((doc: { id: any; data: () => any }) => {
    // doc.data() is never undefined for query doc snapshots
    const local_object = doc.data();
    if (local_object.isFeatured) {
      featuredBlog.push({ blog: local_object, id: doc.id });
    } else {
      blogs.push({ blog: local_object, id: doc.id });
    }
  });

  const sortedData = [...featuredBlog].sort(
    //@ts-ignore
    (a: number, b: number) => new Date(a.blog.date) - new Date(b.blog.date)
  );
  console.log(sortedData.length);
  if (sortedData.length > 0) {
    blogs[0] = sortedData[sortedData.length - 1];
  }
  sortedData.map((blog, index) => {
    if (index < sortedData.length - 1) {
      blogs.push(blog);
    }
  });

  return {
    props: {
      blogs,
    },
  };
}
