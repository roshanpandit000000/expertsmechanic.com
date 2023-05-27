import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

function contact() {
  return (
    <>
      <Layout title="Contact us">
        {/* madsknsjn */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col ">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                Contact us{" "}
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">
                Last updated on Dec 10th 2022
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-5">
                Merchant Legal entity name: Experts Mechanic <br /> E-Mail ID:
                roshanpandit000000@gmail.com <br /> Registered Address: H-05,
                Palam Vihar Extention, Dharam Colony Gurgaon HARYANA 122017
                Telephone No: 7303737938
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-5">
                Please, enter the email address where you wish to receive our
                answer. If you are a registered user of freepik, please include
                the email address you used when you registered if possible to
                help us locate your account as soon as possible
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-5">
                Please enter the details of your request and, if you have any
                questions regarding our Terms of Use, please include specific
                samples of the usage you wish to give our resouces. If you’re
                reporting a problem, make sure to include as much information as
                possible. Please include any screenshots or videos of issues
                since this will also help us resolve problems much sooner. Once
                your request is submitted, a member of our support staff will
                respond as soon as possible.
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-5">
                <snap className="font-semibold text-gray-800">
                  Basic information on Data Protection:
                </snap>{" "}
                Expert Mechanic Company collects your data to be able to answer
                to questions, suggested, or complaints filed. +Info{" "}
                <Link href="/privacypolicy" className="text-sky-900 font-medium underline">Privacy Policy</Link>
              </p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <div className="  bg-white shadow rounded py-12 lg:px-28 px-8   ">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                  Let’s chat and get a quote!
                </p>
                <div className="md:flex items-center mt-12">
                  <div className="md:w-72 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Name
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      placeholder="Please input  name"
                    />
                  </div>
                  <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Email Address
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input email address"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      placeholder="Please input email address"
                    />
                  </div>
                </div>
                <div className="md:flex items-center mt-8">
                  <div className="md:w-72 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Address
                    </label>
                    <input
                      tabIndex={0}
                      role="input"
                      arial-label="Please input company name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                      placeholder="Please input company name"
                    />
                  </div>
                  <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Phone No.
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input country name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      placeholder="Please input country name"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Message
                    </label>
                    <textarea
                      tabIndex={0}
                      aria-label="leave a message"
                      role="textbox"
                      type="name"
                      className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 mt-4">
                  By clicking submit you agree to our terms of service, privacy
                  policy and how we use data as stated
                </p>
                <div className="flex items-center justify-center w-full ">
                  <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default contact;
