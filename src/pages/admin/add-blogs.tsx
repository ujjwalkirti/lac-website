import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "@/Firebase";
import BlogForm from "@/components/admin/BlogForm";

type props = {
  auth_users: DocumentData[];
};

const AddBlogs = ({ auth_users }: props) => {
  const { data: session } = useSession();

  const [validated, setValidated] = useState(false);
  useEffect(() => {
    auth_users.map((user) => {
      if (user.email === session?.user?.email) {
        setValidated(true);
      }
    });
  }, [session]);

  if (!session) {
    return (
      <div className="h-screen w-screen flex flex-col space-y-4 items-center justify-center">
        <Head>
          <title>Add Blogs</title>
        </Head>
        <p>You need to sign in to access this page!</p>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            signIn();
          }}
        >
          Sign in
        </button>
      </div>
    );
  }
  if (!validated) {
    return (
      <div className="h-screen w-screen flex flex-col space-y-4 items-center justify-center">
        <Head>
          <title>Add Blogs</title>
        </Head>
        Sorry, you are not authorised to access this page!
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Add Blogs</title>
      </Head>
      <BlogForm />
    </div>
  );
};

export default AddBlogs;

export async function getServerSideProps(context: any) {
  const querySnapshot = await getDocs(collection(db, "auth-users"));

  let auth_users: DocumentData[] = [];

  querySnapshot.forEach((doc) => {
    auth_users.push(doc.data());
  });

  return {
    props: {
      auth_users,
    },
  };
}
