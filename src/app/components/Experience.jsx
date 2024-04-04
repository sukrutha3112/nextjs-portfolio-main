"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Link } from "@mui/material";

const TABS = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SDLC</li>
        <li>CICD</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Cypress</li>
        <li>Unit testing</li>
        <li>Java</li>
        <li>WebSocket</li>
      </ul>
    ),
  },
 
];
const TABS2 = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
       <li>ReactJS</li>
        <li>NodeJS</li>
        <li>Postgres</li>
        <li>REST APIs</li>
        <li>ExpressJS</li>
        <li>Unit testing</li>
        <li>HTML, SCSS</li>
        <li>JWT tokenization</li>
        </ul>
      ),
    },
   
  ];

const Experience = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">My Experience</h2>
          
          <h5 className="text-2xl font-bold text-white mb-4">State Street Corperation</h5>
          <h6 className="text-xl font-bold text-white mb-4">Software Engineering Intern</h6>
          <p className="text-base lg:text-lg">
          • Implemented test cases using JUnit testing and Cypress for frontend testing.<br/>
• Improved code coverage by 25% of the project by optimizing the code enhancing overall application performance
and accuracy for Spring Boot and Maven projects.<br/>
• Did POC on WebSocket and Socket.io and developed an interactive chat between client and vendor. Which was
integrated in an application as a chatbot.And on LocalStack and Rancher. As local services on how they can be
bought into the company usage for local development and deployments.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Technical Skills{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TABS.find((t) => t.id === tab).content}
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <br/><br/>
          <h5 className="text-2xl font-bold text-white mb-4">State Street Corperation</h5>
          <h6 className="text-xl font-bold text-white mb-4">Software Developer 2</h6>
          <p className="text-base lg:text-lg">
          •  Engineered and put into action adaptive user interfaces(UI) from scratch by means of React.js, Typescript, SCSS and
Material UI in a large-scale initiative. Making the efficiency increase of creating applications in the company 20% and
automating the steps involved.<br/>
• Built a utility to maintain and manage large data that optimises, filters,populate the data which is fed as input to the
project on a regular basis. Product was released in December 2023.<br/>
• Contributed to MUI company themed storybook for over 10 - 12 components using Storybook.js and Material UI,
React.js. which was used by other developers in the company for their work.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Technical Skills{" "}
            </TabButton>
          
          </div>
          <div className="mt-8">
            {TABS2.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
