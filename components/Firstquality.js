import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function Firstquality() {
  return (
    <>
    <div className="container mx-auto my-2 mt-24">
        <h1 class="flex items-center text-3xl sm:text-3xl lg:text-4xl font-bold lg:ml-40 ml-5 sm:ml-5">
        First-quality parts
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      </div>
      <div className="container mx-auto px-4 lg:px-36 px-10 sm:px-10 py-10">
        <Marquee>
          <div>
            <Image
              src="/carpartscompany/1.png"
              alt="Picture of the author"
              width={130}
              height={0}
            />
          </div>
          <div className="ml-16">
            <Image
              src="/carpartscompany/2.png"
              alt="Picture of the author"
              width={130}
              height={0}
            />
          </div>

          <div className="ml-16">
            <Image
              src="/carpartscompany/3.png"
              alt="Picture of the author"
              width={130}
              height={0}
            />
          </div>
          <div className="ml-16">
            <Image
              src="/carpartscompany/4.png"
              alt="Picture of the author"
              width={130}
              height={0}
            />
          </div>
          <div className="ml-16">
            <Image
              src="/carpartscompany/5.png"
              alt="Picture of the author"
              width={130}
              height={0}
            />
          </div>
          <div className="ml-16">
            <Image
              src="/carpartscompany/6.png"
              alt="Picture of the author"
              width={130}
              height={0}
            />
          </div>
          <div className="ml-16">
            <Image
              src="/carpartscompany/7.png"
              alt="Picture of the author"
              width={130}
              height={0}
            />
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Firstquality;
