import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/user/HomePage";
import Projects from "../pages/user/Projects";
import { AboutMe } from "../pages/user/AboutMe";
import { Contact } from "../pages/user/Contact";
import { Navbar } from "../components/user/Navbar";

const UserRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
