import FirstLetterCapital from "@/components/Landing Page/FirstLetterCapital";
import { libre_caslon_text } from "@/utils";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center px-2 py-5">
      <Head>
        <title>About Us</title>
      </Head>
      <p className={"text-[60px] " + libre_caslon_text.className}>
        <FirstLetterCapital letter="A" bgColor="#DA8E63" />
        bout <FirstLetterCapital letter="U" bgColor="#DA8E63" />s
      </p>
      {/* Faculty Advisor */}
      <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
        <p className="text-[30px] text-center font-semibold">
          Mr Some Random Name
        </p>
        <p className="text-[18px] text-center ">
          Professor, Dept of XYZ Engineering
        </p>
        <p className="text-center">(Faculty Advisor)</p>
        {/* Faculty Advisor image */}
        <div className="h-[250px] w-[250px] relative mx-auto">
          <Image
            src={`/placeholder-man.png`}
            fill
            alt="LAC SVNIT Faculty Advisor"
          />
        </div>
        {/* His message */}
        <p className="text-center font-medium text-xl">Message from the Desk</p>
        <p className="text-justify italic px-3">
          <FirstLetterCapital letter={`"`} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum fuga
          debitis, quos dolores sint, architecto amet tempore maxime quibusdam
          rem tempora doloribus vitae facilis numquam atque ex ad voluptatibus
          sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          quas ab, magnam aperiam, error magni iure voluptate at ad quos dolorum
          sit placeat, non saepe rem distinctio exercitationem. Sit, fugit?
          <FirstLetterCapital letter={`"`} />
        </p>
      </div>
      {/* Chairmans */}
      <div>
        {/* Chairman 1 */}
        <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
          <p className="text-[30px] text-center font-semibold">
            Mr Some Random Name
          </p>
          <p className="text-[18px] text-center ">
            Professor, Dept of XYZ Engineering
          </p>
          <p className="text-center">(Faculty Advisor)</p>
          {/* Faculty Advisor image */}
          <div className="h-[250px] w-[250px] relative mx-auto">
            <Image
              src={`/placeholder-man.png`}
              fill
              alt="LAC SVNIT Faculty Advisor"
            />
          </div>
          {/* His message */}
          <p className="text-center font-medium text-xl">
            Message from the Desk
          </p>
          <p className="text-justify italic px-3">
            <FirstLetterCapital letter={`"`} />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            fuga debitis, quos dolores sint, architecto amet tempore maxime
            quibusdam rem tempora doloribus vitae facilis numquam atque ex ad
            voluptatibus sequi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero quas ab, magnam aperiam, error magni iure
            voluptate at ad quos dolorum sit placeat, non saepe rem distinctio
            exercitationem. Sit, fugit?
            <FirstLetterCapital letter={`"`} />
          </p>
        </div>
        {/* Chairman 2 */}
        <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
          <p className="text-[30px] text-center font-semibold">
            Mr Some Random Name
          </p>
          <p className="text-[18px] text-center ">
            Professor, Dept of XYZ Engineering
          </p>
          <p className="text-center">(Faculty Advisor)</p>
          {/* Faculty Advisor image */}
          <div className="h-[250px] w-[250px] relative mx-auto">
            <Image
              src={`/placeholder-man.png`}
              fill
              alt="LAC SVNIT Faculty Advisor"
            />
          </div>
          {/* His message */}
          <p className="text-center font-medium text-xl">
            Message from the Desk
          </p>
          <p className="text-justify italic px-3">
            <FirstLetterCapital letter={`"`} />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            fuga debitis, quos dolores sint, architecto amet tempore maxime
            quibusdam rem tempora doloribus vitae facilis numquam atque ex ad
            voluptatibus sequi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero quas ab, magnam aperiam, error magni iure
            voluptate at ad quos dolorum sit placeat, non saepe rem distinctio
            exercitationem. Sit, fugit?
            <FirstLetterCapital letter={`"`} />
          </p>
        </div>
      </div>
      {/* Students in-charge */}
      <p>Student Representatives</p>
      <div className="">
        {/* Secretary */}
        <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
          <p className="text-[30px] text-center font-semibold">
            Mr Some Random Name
          </p>
          <p className="text-[18px] text-center ">
            Professor, Dept of XYZ Engineering
          </p>
          <p className="text-center">(Faculty Advisor)</p>
          {/* Faculty Advisor image */}
          <div className="h-[250px] w-[250px] relative mx-auto">
            <Image
              src={`/placeholder-man.png`}
              fill
              alt="LAC SVNIT Faculty Advisor"
            />
          </div>
          {/* His message */}
          <p className="text-center font-medium text-xl">
            Message from the Desk
          </p>
          <p className="text-justify italic px-3">
            <FirstLetterCapital letter={`"`} />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            fuga debitis, quos dolores sint, architecto amet tempore maxime
            quibusdam rem tempora doloribus vitae facilis numquam atque ex ad
            voluptatibus sequi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero quas ab, magnam aperiam, error magni iure
            voluptate at ad quos dolorum sit placeat, non saepe rem distinctio
            exercitationem. Sit, fugit?
            <FirstLetterCapital letter={`"`} />
          </p>
        </div>
        {/* 3 Joint Secretaries */}
        <div className="">
          {/* Joint Secretary 1 */}
          <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
            <p className="text-[30px] text-center font-semibold">
              Mr Some Random Name
            </p>
            <p className="text-[18px] text-center ">
              Professor, Dept of XYZ Engineering
            </p>
            <p className="text-center">(Faculty Advisor)</p>
            {/* Faculty Advisor image */}
            <div className="h-[250px] w-[250px] relative mx-auto">
              <Image
                src={`/placeholder-man.png`}
                fill
                alt="LAC SVNIT Faculty Advisor"
              />
            </div>
            {/* His message */}
            <p className="text-center font-medium text-xl">
              Message from the Desk
            </p>
            <p className="text-justify italic px-3">
              <FirstLetterCapital letter={`"`} />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              fuga debitis, quos dolores sint, architecto amet tempore maxime
              quibusdam rem tempora doloribus vitae facilis numquam atque ex ad
              voluptatibus sequi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero quas ab, magnam aperiam, error magni iure
              voluptate at ad quos dolorum sit placeat, non saepe rem distinctio
              exercitationem. Sit, fugit?
              <FirstLetterCapital letter={`"`} />
            </p>
          </div>
          {/* Joint Secretary 1 */}
          <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
            <p className="text-[30px] text-center font-semibold">
              Mr Some Random Name
            </p>
            <p className="text-[18px] text-center ">
              Professor, Dept of XYZ Engineering
            </p>
            <p className="text-center">(Faculty Advisor)</p>
            {/* Faculty Advisor image */}
            <div className="h-[250px] w-[250px] relative mx-auto">
              <Image
                src={`/placeholder-man.png`}
                fill
                alt="LAC SVNIT Faculty Advisor"
              />
            </div>
            {/* His message */}
            <p className="text-center font-medium text-xl">
              Message from the Desk
            </p>
            <p className="text-justify italic px-3">
              <FirstLetterCapital letter={`"`} />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              fuga debitis, quos dolores sint, architecto amet tempore maxime
              quibusdam rem tempora doloribus vitae facilis numquam atque ex ad
              voluptatibus sequi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero quas ab, magnam aperiam, error magni iure
              voluptate at ad quos dolorum sit placeat, non saepe rem distinctio
              exercitationem. Sit, fugit?
              <FirstLetterCapital letter={`"`} />
            </p>
          </div>
          {/* Joint Secretary 1 */}
          <div className=" flex flex-col gap-2 shadow-xl py-3 rounded-lg bg-white w-11/12 mx-auto">
            <p className="text-[30px] text-center font-semibold">
              Mr Some Random Name
            </p>
            <p className="text-[18px] text-center ">
              Professor, Dept of XYZ Engineering
            </p>
            <p className="text-center">(Faculty Advisor)</p>
            {/* Faculty Advisor image */}
            <div className="h-[250px] w-[250px] relative mx-auto">
              <Image
                src={`/placeholder-man.png`}
                fill
                alt="LAC SVNIT Faculty Advisor"
              />
            </div>
            {/* His message */}
            <p className="text-center font-medium text-xl">
              Message from the Desk
            </p>
            <p className="text-justify italic px-3">
              <FirstLetterCapital letter={`"`} />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              fuga debitis, quos dolores sint, architecto amet tempore maxime
              quibusdam rem tempora doloribus vitae facilis numquam atque ex ad
              voluptatibus sequi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero quas ab, magnam aperiam, error magni iure
              voluptate at ad quos dolorum sit placeat, non saepe rem distinctio
              exercitationem. Sit, fugit?
              <FirstLetterCapital letter={`"`} />
            </p>
          </div>
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
