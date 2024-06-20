import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";
import Banner from "./components/Banner";
import Papers from "./components/Papers";
import { ThemeProvider } from "./ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  background: #1c1c1c;
  color: #fff;
`;
