import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { createContext } from "react";
import Home from './Routes/Home';
import Resume from './Routes/Resume';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import About from './Routes/About';

export const UserDataContext = createContext();

const userData = {
  name: "Sakthi Vignesh",
  domain: "Full stack",
  spec: "MERN stack",
  role: "developer",
  number:"+91-9003817379",
  email:"sakthisvsp01@gmail.com",
  discription:"I'm a MERN sorcerer, conjuring captivating interfaces and powerful server-side APIs. With MongoDB, Express.js, React, and Node.js as my spells, I craft extraordinary web applications.",
  socialMedia: {
    github: "https://github.com/svsp01",
    linkedin: "https://www.linkedin.com/in/sakthi-svsp-6a2447165/",
    dribbble: "https://dribbble.com/Sakthi_Svsp",
    twitter: "https://twitter.com/Sakthi_Svsp01"
  }
};

function App() {
  return (
    <BrowserRouter>
      <UserDataContext.Provider value={userData}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="resume" element={<Resume />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/" element={<About />} />
          </Route>
        </Routes>
      </UserDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
