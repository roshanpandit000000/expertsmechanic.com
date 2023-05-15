import React from "react";

function WhyChoose() {
  return (
    <>
      <div className="container mx-auto mt-24 text-center">
        <h1 class="text-3xl sm:text-3xl lg:text-4xl font-bold">
          Why choose your car service in Delhi?
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      </div>
      <div className="overflow-y-hidden">
        <div className="">
          {/* Code block starts */}
          <dh-component>
            <section className="bg-indigo-700 py-12 mt-10">
              <div
                tabIndex={0}
                aria-label="group of cards"
                className="focus:outline-none px-4 lg:px-0"
              >
                <div className="mx-auto container flex flex-wrap px-4 lg:px-32">
                  <div
                    tabIndex={0}
                    aria-label="card 1"
                    className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pb-10 lg:pt-10"
                  >
                    <div className=" flex flex-shrink-0 mr-5 text-white">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg1.svg"
                        alt="drawer"
                      />
                    </div>
                    <div className="md:w-9/12 lg:w-9/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-5 text-white"
                      >
                        *We’re everywhere.
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                      >
                        You can now reach us with one click. You can email or
                        chat with us on our website, or call us at 7840817540 or
                        text us on WhatsApp at the same number!
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 2"
                    className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10"
                  >
                    <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg2.svg"
                        alt="check"
                      />
                    </div>
                    <div className="md:w-9/12 lg:w-9/12 ">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-5 text-white"
                      >
                        *Dedicated Service Buddy Assigned
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                      >
                        All of our Delhi Auto Repair services are available in a
                        wide variety of formats including the best repair tools
                        and machinery. Plus, our mechanics and service staff are
                        well-trained and prompt to your needs. You won’t find
                        better!
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 3"
                    className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-indigo-400 pt-10 lg:pb-20"
                  >
                    <div className=" flex flex-shrink-0 mr-5 text-white">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg3.svg"
                        alt="html-tag"
                      />
                    </div>
                    <div className="md:w-9/12 lg:w-9/12 ">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-5 text-white"
                      >
                        *Customer Service Support
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                      >
                        As a ExpertsMechanic customer, all the car inspections
                        you need will be done based on your service history with
                        us. If you want to take advantage of this perk but
                        haven’t had an inspection recently, we’ll do one for you
                        at any of our workshops across the country.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 4"
                    className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-indigo-400 pt-10 lg:pb-20"
                  >
                    <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg4.svg"
                        alt="display"
                      />
                    </div>
                    <div className="md:w-9/12 lg:w-9/12 ">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-5 text-white"
                      >
                        *Free Pickup & Drop
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                      >
                        If you don’t have the time to come to a workshop, we’ll
                        pick up and drop off your car for free. You can relax
                        while we take care of any necessary repairs on your
                        behalf, deliver it back on time., and we’ll even pick it
                        up from your door.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </dh-component>
          {/* Code block ends */}
        </div>
      </div>
    </>
  );
}

export default WhyChoose;
