import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page2 = () => {
  return (
    <div>
      <div>
        <div className="h-[686px] w-[347px] px-[21px] py-[19px]">
          <div>
            {/* <Image src={`/`}/> */}
          </div>
        </div>
      </div>
      <div>
        <p>
          Featured <br />
          Blogs
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          porro illo ducimus natus aliquid, quam aut incidunt esse optio
          pariatur facilis dolor est doloribus distinctio deserunt error, autem
          a fuga!
        </p>
        <Link href={`/blogs`} />
      </div>
    </div>
  );
};

export default Page2;
