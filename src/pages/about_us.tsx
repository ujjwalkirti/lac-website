import InformationHolder from "@/components/About us/InformationHolder";
import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-5 px-2 py-5">
      <Head>
        <title>About Us</title>
      </Head>
      <p className={"text-[60px] " + libre_caslon_text.className}>
        <FirstLetterCapital letter="A" bgColor="#DA8E63" />
        bout <FirstLetterCapital letter="U" bgColor="#DA8E63" />s
      </p>
      {/* Faculty Advisor */}
      <div className="lg:w-10/12">
        <InformationHolder
          name="Mr Some Random Name"
          position="Professor, Dept of XYZ Engineering"
          message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum fuga
          debitis, quos dolores sint, architecto amet tempore maxime quibusdam rem
          tempora doloribus vitae facilis numquam atque ex ad voluptatibus sequi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas ab,
          magnam aperiam, error magni iure voluptate at ad quos dolorum sit
          placeat, non saepe rem distinctio exercitationem. Sit, fugit?"
          img="/placeholder-man.png"
          designation="Faculty Advisor"
        />
      </div>
      {/* Chairmans */}
      <div className="flex flex-col items-center gap-5 lg:w-10/12">
        {/* Chairman 1 */}
        <InformationHolder
          name="Mr Some Random Name"
          position="Professor, Dept of XYZ Engineering"
          message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum fuga
        debitis, quos dolores sint, architecto amet tempore maxime quibusdam rem
        tempora doloribus vitae facilis numquam atque ex ad voluptatibus sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas ab,
        magnam aperiam, error magni iure voluptate at ad quos dolorum sit
        placeat, non saepe rem distinctio exercitationem. Sit, fugit?"
          img="/placeholder-man.png"
          designation="Chairman"
        />
        {/* Chairman 2 */}
        <InformationHolder
          name="Mr Some Random Name"
          position="Professor, Dept of XYZ Engineering"
          message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum fuga
        debitis, quos dolores sint, architecto amet tempore maxime quibusdam rem
        tempora doloribus vitae facilis numquam atque ex ad voluptatibus sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas ab,
        magnam aperiam, error magni iure voluptate at ad quos dolorum sit
        placeat, non saepe rem distinctio exercitationem. Sit, fugit?"
          img="/placeholder-man.png"
          designation="Co-Chairman"
        />
      </div>
      {/* Students in-charge */}
      <p className="text-[30px] lg:text-[50px] text-center underline">
        <FirstLetterCapital letter="S" />
        tudent <FirstLetterCapital letter="R" />
        epresentatives
      </p>
      <div className="flex flex-col items-center gap-10">
        {/* Secretary */}
        <div className="w-full lg:w-[400px]">
          <InformationHolder
            name="Mr Some Random Name"
            position="BTech N-Year, Dept of XYZ Engineering"
            img="/placeholder-man.png"
            designation="Secretary"
          />
        </div>
        {/* 3 Joint Secretaries */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Joint Secretary 1 */}
          <InformationHolder
            name="Mr Some Random Name"
            position="BTech N-Year, Dept of XYZ Engineering"
            img="/placeholder-man.png"
            designation="Joint Secretary"
          />
          {/* Joint Secretary 2 */}
          <InformationHolder
            name="Mr Some Random Name"
            position="BTech N-Year, Dept of XYZ Engineering"
            img="/placeholder-man.png"
            designation="Joint Secretary"
          />
          {/* Joint Secretary 3 */}
          <InformationHolder
            name="Mr Some Random Name"
            position="BTech N-Year, Dept of XYZ Engineering"
            img="/placeholder-man.png"
            designation="Joint Secretary"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

/*
  organisational struture of LAC
  Faculty Advisor
  Chairman + Co-Chairman
  {
    student in-charge: 
      1. Secretary
      2. 3 - Joint Secretary
  }

*/
