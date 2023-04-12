import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import NormalBlog from "@/components/Blogs/NormalBlog";
import { local_blogs } from "@/local-data/Blogs";
import Head from "next/head";
import React from "react";

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
          {local_blogs.map((blog, index) => {
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
  let blogs: any = [];
  /* get only those blogs from firestore database whose isVerified value is true.

  You will get more details about it in the firestore documentation
  */
  return {
    props: {
      blogs,
    },
  };
}
