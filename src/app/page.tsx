'use client';
import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';

const anchors = ['hero', 'about', 'projects', 'skills', 'contact'];

const FullpageWrapper = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <>
      <Sidebar activeSection={activeSection} />
      <div className="flex flex-col flex-1 md:ml-20">
        <Header activeSection={activeSection} />
        <main className="flex-1">
          <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            scrollingSpeed={1000}
            credits={{ enabled: false }}
            onLeave={(origin, destination, _direction) => {
              setActiveSection(destination.anchor as string);
            }}
            render={({ state: _state, fullpageApi: _fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <Hero />
                  </div>
                  <div className="section bg-secondary/20">
                    <About />
                  </div>
                  <div className="section">
                    <Projects />
                  </div>
                  <div className="section bg-secondary/20">
                    <Skills />
                  </div>
                  <div className="section">
                    <Contact />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </main>
      </div>
    </>
  );
};

export default function Home() {
  return <FullpageWrapper />;
}
