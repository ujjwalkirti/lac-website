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
      <p
        className={
          "text-[40px] mt-5 lg:text-[50px] text-center " +
          libre_caslon_text.className
        }
      >
        Faculty Advisors
      </p>
      {/* Faculty Advisor */}
      <div className="w-full lg:w-auto">
        <InformationHolder
          name="Dr Kalpana C Maheria"
          position="Professor, Dept of Chemistry"
          img="https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/about_us%2Ffaculty%20advisor%2FWhatsApp%20Image%202023-04-20%20at%208.57.00%20PM.jpeg?alt=media&token=e4c9a8af-5e0e-4ed8-8571-9180a34d3e07"
          designation="Chairperson"
          socials={[" ", " ", " ", "mailto:kcm@chem.svnit.ac.in", " "]}
        />
      </div>
      {/* Chairmans */}
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:w-10/12">
        {/* Chairman 1 */}
        <InformationHolder
          name="Dr Sumit Khare"
          position="Professor, Dept of Mechanical Engineering"
          img="https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/about_us%2Ffaculty%20advisor%2FWhatsApp%20Image%202023-04-20%20at%205.55.02%20PM.jpeg?alt=media&token=e23624fd-d118-47fa-b4a3-1431aeedb20a"
          designation="Co-Chairperson"
          socials={[" ", " ", " ", "mailto:sumitkhare@med.svnit.ac.in", " "]}
        />
        {/* Chairman 2 */}
        <InformationHolder
          name="Dr Chetan Patel"
          position="Professor, Dept of Civil Engineering"
          img="https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/about_us%2Ffaculty%20advisor%2FWhatsApp%20Image%202023-04-20%20at%206.19.32%20PM.jpeg?alt=media&token=23cbf00b-4465-4a04-8412-1eb19d18e787"
          designation="Co-Chairperson"
          socials={[" ", " ", " ", "mailto:crp@ced.svnit.ac.in", " "]}
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
            position="BTech Final-Year, Dept of Electrical Engineering"
            img="https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/about_us%2Fmilind%20shinkar.jpg?alt=media&token=77da6c39-bc10-448a-ab34-ced69607e30c"
            designation="Secretary"
            contact={[9429786867, 9429786867]}
            socials={[
              " ",
              "https://www.linkedin.com/in/milind-shinkar",
              " ",
              "mailto:shinkarmilind98@gmail.com",
              "https://instagram.com/milind.shinkar?igshid=YmMyMTA2M2Y",
            ]}
          />
        </div>
        {/* 2 Joint Secretaries */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Joint Secretary 1 */}
          <InformationHolder
            name="Priyanshi Shah"
            position="BTech Pre-final Year, Dept of Computer Science Engineering"
            img="https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/about_us%2Fpriyanshi%20shah.jpg?alt=media&token=f94fbeb8-7caa-4332-8300-ca9665d6a7d0"
            designation="Joint Secretary"
            contact={[9106502325, 9106502325]}
            socials={[
              " ",
              "https://www.linkedin.com/in/priyanshi-shah-54ba30202",
              " ",
              "mailto:priyanshipshah19@gmail.com",
              "https://instagram.com/priyanshipshah?igshid=YmMyMTA2M2Y",
            ]}
          />
          {/* Joint Secretary 2 */}
          <InformationHolder
            name="Sayantani Dutta"
            position="BTech Pre-final Year, Dept of Chemical Engineering"
            img="https://firebasestorage.googleapis.com/v0/b/lac-website-c4a02.appspot.com/o/about_us%2Fsayantani%20dutta.jpg?alt=media&token=75ce1ef6-aeaf-42e2-9115-c09c0da71b08"
            designation="Joint Secretary"
            contact={[9316599256, 9316599256]}
            socials={[
              " ",
              "https://www.linkedin.com/in/sayantanidutta25",
              " ",
              "mailto:sayantani2507@gmail.com",
              "https://instagram.com/_sayantani______?igshid=YmMyMTA2M2Y",
            ]}
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
