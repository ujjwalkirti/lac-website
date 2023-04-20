import InformationHolder from "@/components/About us/InformationHolder";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";

import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-5 px-2 py-3">
      <Head>
        <title>About Us</title>
      </Head>
      <p className={"text-[60px] " + libre_caslon_text.className}>About Us</p>
      {/* Faculty Advisor */}
      <div className="w-full lg:w-auto">
        <InformationHolder
          name="Mr Some Random Name"
          position="Professor, Dept of XYZ Engineering"
          img="/placeholder-man.png"
          designation="Faculty Advisor"
        />
      </div>
      {/* Chairmans */}
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:w-10/12">
        {/* Chairman 1 */}
        <InformationHolder
          name="Mr Some Random Name"
          position="Professor, Dept of XYZ Engineering"
          img="/placeholder-man.png"
          designation="Chairman"
          socials={["dummy", "dummy", "dummy"]}
        />
        {/* Chairman 2 */}
        <InformationHolder
          name="Mr Some Random Name"
          position="Professor, Dept of XYZ Engineering"
          img="/placeholder-man.png"
          designation="Co-Chairman"
          socials={["dummy", "dummy", "dummy"]}
        />
      </div>
      {/* Students in-charge */}
      <p
        className={
          "text-[40px] mt-10 lg:text-[50px] text-center " +
          libre_caslon_text.className
        }
      >
        Student Representatives
      </p>
      <div className="flex flex-col items-center gap-10">
        {/* Secretary */}
        <div className="w-full lg:w-[400px]">
          <InformationHolder
            name="Milind Shinkar"
            position="BTech N-Year, Dept of XYZ Engineering"
            img="/placeholder-man.png"
            designation="Secretary"
            contact={[9876543210, 9876543210]}
            socials={["dummy", "dummy", "dummy"]}
          />
        </div>
        {/* 3 Joint Secretaries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Joint Secretary 1 */}
          <InformationHolder
            name="Priyanshi Shah"
            position="BTech Pre-final Year, Dept of Computer Science Engineering"
            img="/placeholder-man.png"
            designation="Joint Secretary"
            contact={[9876543210, 9876543210]}
            socials={["dummy", "dummy", "dummy"]}
          />
          {/* Joint Secretary 2 */}
          <InformationHolder
            name="Sayantani Dutta"
            position="BTech Pre-final Year, Dept of XYZ Engineering"
            img="/placeholder-man.png"
            designation="Joint Secretary"
            contact={[9876543210, 9876543210]}
            socials={["dummy", "dummy", "dummy", "dummy", "dummy"]}
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
