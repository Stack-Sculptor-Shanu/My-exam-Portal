import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './maincontent/MainContent';
import Nav from './Nav';

export default function Admin() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex h-screen">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <Nav/>
        <MainContent section={activeSection} />
      </div>
    </div>
  );
}