import Image from "next/image";
import React from "react";

const Page3 = () => {
  return (
    <div className="lg:h-[80vh] py-5 lg:my-0 flex flex-col lg:flex-row lg:items-center">
      <div className="lg:hidden relative my-5 h-[200px] w-[200px] mx-auto shadow-xl rounded-full">
        <Image
          src={`/litfest-logo.png`}
          alt="Litfest SVNIT Logo"
          fill
          className="rounded-full"
        />
      </div>
      <div className="lg:w-3/5 ">
        <p className="lg:w-2/3 mx-auto text-left font-[400] text-[18px] lg:text-[22px] leading-[24px] lg:leading-[32.01px]">
          A vision that our seniors saw and our juniors witnessed, an aspiration
          of the club, a reality that thousands enjoyed, LITFEST'23 came into
          being on the 14th and 15th of October 2022. After months of hard work,
          sleepless nights, scrapped ideas, cold mails, numerous sponsor visits,
          countless meetings at various places, unmatched bonding, and
          tremendous support from everyone, LitFest was revived! But it was only
          the excitement, love, support, sponsors, participants, performers, and
          of course all the volunteers and the team that gave it life. From the
          inauguration to the debate and squid games, from the quiz to the Talk,
          and from Aditya Kulshreshth aka Kullubaazi to Strings and Stories
          performing for us, LitFest'23 was truly a dream that turned into
          reality.
        </p>
      </div>
      <div className="my-5 hidden lg:relative lg:flex h-[400px] mx-auto w-[400px] shadow-xl rounded-full">
        <Image
          src={`/litfest-logo.png`}
          alt="Litfest SVNIT Logo"
          fill
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Page3;
