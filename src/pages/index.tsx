import Head from "next/head";
import Navbar from "@/components/Navbar";
import Page1 from "@/components/Landing Page/Page1";
import Page2 from "@/components/Landing Page/Page2";
import Page3 from "@/components/Landing Page/Page3";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Literary Affairs Committee</title>
        <meta name="description" content="Website for LAC, SVNIT Surat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-11/12 mx-auto">
        <Navbar />
        <Page1 />
        <Page2 />
        <Page3 />
        <Footer />
      </section>
    </>
  );
}
