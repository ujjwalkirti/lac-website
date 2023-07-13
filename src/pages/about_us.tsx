import { db2 } from "@/Firebase";
import InformationHolder from "@/components/About us/InformationHolder";
import { libre_caslon_text } from "@/local-data/Fonts";
import { inputStyle } from "@/local-data/StyleStrings";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const years = ["2023-24", "2022-23", "2021-22", "2020-21"];

async function getMembersBasedOnYear(year: string) {
  const queries = query(
    collection(db2, "members"),
    where("coreCommitteeYear", "==", year)
  );
  const querySnapshot = await getDocs(queries);
  return querySnapshot;
}

type props = {
  members: {
    chairperson: Representatives;
    co_chairperson: Representatives[];
    secretary: Representatives;
    j_secretary: Representatives[];
  };
};
const AboutUs = ({ members }: props) => {
  const [chairperson, setChairperson] = useState<Representatives>(
    members.chairperson
  );
  const [co_chairperson, setCo_chairperson] = useState<Representatives[]>(
    members.co_chairperson
  );
  const [secretary, setSecretary] = useState<Representatives>(
    members.secretary
  );
  const [j_secretary, setJ_secretary] = useState<Representatives[]>(
    members.j_secretary
  );

  const year = useRef<HTMLSelectElement | null>(null);

  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-5 px-2 py-3 pt-20">
      <Head>
        -<title>About Us</title>
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
      <div>
        <InformationHolder {...chairperson} />
      </div>
      {/* Chairmans */}
      <div className="flex flex-col lg:flex-row items-center gap-x-5">
        {co_chairperson.map((faculty, index) => (
          <InformationHolder {...faculty} key={index} />
        ))}
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
      <select
        ref={year}
        className={inputStyle}
        style={{ width: "130px" }}
        onChange={(e) => {
          getMembersBasedOnYear(e.target.value)
            .then((results) => {
              let co_chairpersons: Representatives[] = [];
              let joint_secretaries: Representatives[] = [];
              results.forEach((doc) => {
                const person = doc.data();
                switch (person.designation.toLowerCase()) {
                  case "chairperson":
                    //@ts-ignore
                    setChairperson(person);
                    break;
                  case "co-chairperson":
                    //@ts-ignore
                    co_chairpersons.push(person);
                    break;
                  case "secretary":
                    //@ts-ignore
                    setSecretary(person);
                    break;
                  case "joint-secretary":
                    //@ts-ignore
                    joint_secretaries.push(person);
                    break;
                }
              });
              co_chairpersons.length !== 0 &&
                setCo_chairperson(co_chairpersons);
              joint_secretaries.length !== 0 &&
                setJ_secretary(joint_secretaries);
            })
            .catch((err) => {
              toast.error(
                "Couldnot fetch the data for the year " + year.current?.value
              );
            });
        }}
      >
        {years.map((year, index) => (
          <option value={year} key={index}>
            {year}
          </option>
        ))}
      </select>
      <div className="flex flex-col items-center gap-10">
        {/* Secretary */}
        <div className="w-full lg:w-[400px]">
          <InformationHolder {...secretary} />
        </div>
        {/* 2 Joint Secretaries */}
        <div className="grid lg:grid-cols-2 gird-cols-1 lg:flex-row gap-10">
          {j_secretary.map((student, index) => (
            <InformationHolder {...student} key={index} />
          ))}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  var members = {
    chairperson: {},
    co_chairperson: [] as DocumentData[],
    secretary: {},
    j_secretary: [] as DocumentData[],
  };
  const queries = query(
    collection(db2, "members"),
    where("coreCommitteeYear", "==", "2023-24")
  );
  const querySnapshot = await getDocs(queries);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const person = doc.data();
    switch (person.designation.toLowerCase()) {
      case "chairperson":
        members.chairperson = doc.data();
        break;
      case "co-chairperson":
        members.co_chairperson.push(doc.data());
        break;
      case "secretary":
        members.secretary = doc.data();
        break;
      case "joint-secretary":
        members.j_secretary.push(doc.data());
    }
  });
  return {
    props: {
      members,
    },
  };
}
