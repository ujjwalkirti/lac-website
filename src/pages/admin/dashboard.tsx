import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db2 } from "@/Firebase";
import BlogForm from "@/components/admin/BlogForm";
import BookForm from "@/components/admin/BookForm";
import EventForm from "@/components/admin/EventForm";
import TeamMember from "@/components/admin/TeamMember";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetServerSidePropsContext } from "next";
import { adminButton } from "@/local-data/StyleStrings";

type props = {
  auth_users: DocumentData[];
};

const Dashboard = ({ auth_users }: props) => {
  const { data: session } = useSession();

  const [validated, setValidated] = useState(false);
  const [choice, setChoice] = useState("");

  useEffect(() => {
    auth_users.map((user) => {
      if (user.email === session?.user?.email) {
        setValidated(true);
      }
    });
  }, [session]);

  if (!session) {
    return (
      <div className="h-screen w-screen flex flex-col space-y-4 items-center justify-center pt-20">
        <Head>
          <title>Admin Dashboard</title>
        </Head>
        <p>You need to sign in to access this page!</p>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            signIn("google");
          }}
        >
          Sign in
        </button>
      </div>
    );
  }
  if (!validated) {
    return (
      <div className="h-screen w-screen flex flex-col space-y-4 items-center justify-center pt-20">
        <Head>
          <title>Admin Dashboard</title>
        </Head>
        Sorry, you are not authorised to access this page!
      </div>
    );
  }
  return (
    <div className="pt-20">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <section>
        <div className="flex flex-col">
          <p className="text-center mt-4">Please select:</p>
          <div className="mx-auto flex flex-col md:flex-row md:space-x-3 mt-5 mb-5 md:mb-10 md:w-auto gap-2 w-4/5">
            <button
              onClick={() => {
                setChoice("blogs");
              }}
              className={adminButton}
            >
              Blogs
            </button>
            <button
              onClick={() => {
                setChoice("books");
              }}
              className={adminButton}
            >
              Books
            </button>
            <button
              onClick={() => {
                setChoice("events");
              }}
              className={adminButton}
            >
              Events
            </button>
            <button
              onClick={() => {
                setChoice("members");
              }}
              className={adminButton}
            >
              Members
            </button>
          </div>
        </div>
        <div className="w-full lg:w-3/5 mx-auto">
          {renderFormAccordingToChoice(choice)}
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const querySnapshot = await getDocs(collection(db2, "auth-users"));

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

function renderFormAccordingToChoice(choice: string) {
  switch (choice) {
    case "blogs":
      return <BlogForm />;
    case "books":
      return <BookForm />;
    case "events":
      return <EventForm />;
    case "members":
      return <TeamMember />;
      break;

    default:
      break;
  }
}
