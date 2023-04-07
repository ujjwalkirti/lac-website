import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Literary Affairs Committee</title>
        <meta name="description" content="Website for LAC, SVNIT Surat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <p className="text-3xl font-semibold">LAC</p>
      </section>
    </>
  );
}
