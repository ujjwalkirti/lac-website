import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import Image from "next/image";
import React from 'react'

const Events = () => {
  return (
    <section className="min-h-screen flex flex-col items-center gap-5 px-2 py-5">
      <Head>
        <title>Upcoming Events</title>
      </Head>
      <p className={"text-[60px] " + libre_caslon_text.className}>
        <FirstLetterCapital letter="U" bgColor="#DA8E63" />
        pcoming <FirstLetterCapital letter="E" bgColor="#DA8E63" />vents
      </p>
      {/* Event 1 */}
      <div className="flex flex-row gap-5 items-center">
      </div>
    </section>
  )
}

export default Events