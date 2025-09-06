"use client";
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

const anchors = ["hero", "about", "projects", "skills", "contact"];

const FullpageWrapper = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [fullpageApi, setFullpageApi] = useState<any>(null);

  const onLeave = (origin: any, destination: any, direction: any) => {
    setActiveSection(destination.anchor);
  };

  return (
    <>
      <Sidebar
        activeSection={activeSection}
        onSectionChange={(section: string) => fullpageApi?.moveTo(section)}
      />
      <div className="flex flex-col flex-1 md:ml-20">
        <Header
          activeSection={activeSection}
          onSectionChange={(section: string) => fullpageApi?.moveTo(section)}
        />
        <ReactFullpage
          anchors={anchors}
          onLeave={onLeave}
          credits={{ enabled: false }}
          render={({ state, fullpageApi: api }) => {
            setFullpageApi(api);
            return (
              <ReactFullpage.Wrapper>
                <div className="section min-h-screen flex items-center justify-center">
                  <Hero />
                </div>
                <div className="section min-h-screen flex items-center justify-center bg-secondary/20">
                  <About />
                </div>
                <div className="section min-h-screen flex items-center justify-center">
                  <Projects />
                </div>
                <div className="section min-h-screen flex items-center justify-center bg-secondary/20">
                  <Skills />
                </div>
                <div className="section min-h-screen flex items-center justify-center">
                  <Contact />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
};

export default function Home() {
  return <FullpageWrapper />;
}
