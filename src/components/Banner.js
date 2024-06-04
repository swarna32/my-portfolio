import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Papers from "./Papers";
import Projects from "./Projects";
import Contact from "./Contact";

const Banner = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Papers></Papers>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Banner;
