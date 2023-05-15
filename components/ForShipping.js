import React from "react";
import Layout from "./Layout";
import { useRouter } from "next/router";

function ForShipping() {
    const router = useRouter();
  return (
    <>
      <Layout title="Thank you">
        <div className="2xl:mx-auto 2xl:container mx-4 py-16 mt-16">
          <div className=" w-full  relative flex items-center justify-center">
            <img
              src="https://i.ibb.co/4sYZ8gC/img-2.png"
              alt="dining"
              className="w-full h-full absolute z-0 hidden xl:block"
            />
            <img
              src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
              alt="dining"
              className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
            />
            <img
              src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
              alt="dining"
              className="w-full h-full absolute z-0  sm:hidden "
            />
            <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
              <h1 className="text-4xl font-semibold leading-9 text-white text-center">
                Don’t miss out!
              </h1>
              <p className="text-base leading-normal text-center text-white mt-6">
                Subscribe to your newsletter to stay in the loop. Our newsletter
                is sent once in <br />a week on every friday so subscribe to get
                latest news and updates.
              </p>
              <div className="  flex-col sm:flex-row  flex items-center mt-10">
                <button 
                onClick={() => router.push("/")}
                className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">
                  Back To Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ForShipping;
