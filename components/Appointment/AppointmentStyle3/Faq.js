import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <>
      <div className="faq-accordion">
        <div className="faq-content">
          <span>FAQs</span>
          <h3>You can learn more about our service from FAQ</h3>
        </div>

        <Accordion allowZeroExpanded preExpanded={["a"]}>
          <AccordionItem uuid="a">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>01. What is saasGO?</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                saasGO is a software and app development service that provides
                custom software solutions to businesses of all sizes.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="b">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>
                  02. What kind of software and apps does saasGO develop?
                </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                saasGO can develop software and apps for a wide range of
                industries, including healthcare, finance, education,
                e-commerce, and more. Our team is experienced in developing
                custom solutions that meet the unique needs of our clients.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="c">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>03. What is the process for working with saasGO? </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The process for working with saasGO typically involves an
                initial consultation to discuss your needs and goals, followed
                by a proposal outlining our recommended solution and estimated
                timeline. Once the proposal is approved, our team will begin
                developing your software or app and provide regular updates
                throughout the development process.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="d">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>
                  04. How long does it take to develop a custom software
                  solution with saasGO?
                </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The timeline for developing a custom software solution with
                saasGO can vary depending on the complexity of the project and
                other factors such as the availability of resources. However, we
                always work to deliver solutions as quickly and efficiently as
                possible without sacrificing quality.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="e">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>05. How much does it cost to work with saasGO? </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The cost of working with saasGO will depend on the scope and
                complexity of your project. We offer competitive pricing and
                will work with you to develop a solution that fits your budget.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="f">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>
                  06. What kind of support does saasGO offer after the software
                  or app is deployed?
                </span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                saasGO offers ongoing support and maintenance for all of our
                software and app solutions. We also provide training and
                resources to help ensure that your team is able to make the most
                of the solution we develop.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
