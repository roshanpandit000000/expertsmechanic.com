import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

function Questions() {
  return (
    <>
      <div className="container mx-auto my-2 mt-24">
        <h1 class="flex items-center text-3xl sm:text-3xl lg:text-4xl font-bold  lg:ml-40 ml-5 sm:ml-5">
          Car Service Questions by EM
          <span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-6 gap-8 lg:px-36 px-10 sm:px-10">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Are you looking for automobile service in Delhi ncr?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              ExpertMechanic provides affordable car support, so don’t hesitate to contact us!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              What type of engine oil/lubricant do you recommend for my car?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              We only use MOBIL products in our auto services. We’re committed to providing you and your car the best it deserves, without any compromises.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              I need to get my car serviced. What kind of spare parts do you use?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              We use only genuine OEM/OES spares, meaning the parts we replace or repair will fit your car precisely and function properly. We manage a central spare parts inventory and can source recommened spares for you; nothing but the best!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              ExpertsMechanic has no hidden fees. Once you provide the go-ahead,
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Our prices and rates are some of the most affordable around. We offer a flat fee for all services, so you can expect an affordable cost with no hidden charges.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              Can ExpertsMechanic pickup and deliver a car to Delhi?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Our delivery service is absolutely free of charge. Whenever you want a delivery, you have to book a ride with us and we will take it from there.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Questions;
