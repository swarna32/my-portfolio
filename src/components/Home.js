import React from "react";
import styled, { keyframes } from "styled-components";
import { FaDownload } from "react-icons/fa"; // Importing the download icon
import { useTheme } from "../ThemeContext"; // Import useTheme hook

const Home = () => {
  const { darkMode } = useTheme(); // Access darkMode from the theme context

  return (
    <HomeContainer darkMode={darkMode}>
      <HomeSection id="home">
        <Intro>
          <Name>
            <AnimatedText>
              <Text>Swarna Das</Text>
            </AnimatedText>
          </Name>
          <Subtitle darkMode={darkMode}>Machine Learning Engineer</Subtitle>
          <Description darkMode={darkMode}>
            I have experience working with Machine Learning, Computer Vision,
            and Neural Networks. Additionally, I can build websites using PHP,
            Laravel, and Django.
          </Description>
          <Buttons>
            <Button href="/pdf/SwarnaDasResume (1) (1).pdf" darkMode={darkMode}>
              <FaDownload style={{ marginRight: "0.5rem" }} /> Download Resume
            </Button>
            <Button href="/" darkMode={darkMode}>
              Portfolio
            </Button>
          </Buttons>
        </Intro>
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeSection = styled.section`
  text-align: center;
`;

const Intro = styled.div`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
const Name = styled.h1`
  font-size: 2.5rem;
  color: #00aaff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const typingIn = keyframes`
  0% { width: 0; }
  50% { width: 100%; }
`;

const typingOut = keyframes`
  50% { width: 100%; }
  100% { width: 0; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #00aaff; }
`;

const AnimatedText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 2.5rem;
  animation: ${typingIn} 6s steps(10, end) infinite,
    ${typingOut} 6s steps(10, end) infinite;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Text = styled.span`
  border-right: 0.15em solid #00aaff;
  animation: ${blink} 0.75s step-end infinite;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: ${(props) => (props.darkMode ? "#00aaff" : "#333")};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Description = styled.p`
  margin: 1rem 0;
  color: ${(props) => (props.darkMode ? "#ccc" : "#555")};
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
// const Buttons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
// `;

// const Button = styled.a`
//   padding: 0.5rem 1rem;
//   background: ${(props) => (props.darkMode ? "#00aaff" : "#007acc")};
//   color: #fff;
//   border-radius: 5px;
//   text-decoration: none;
//   display: flex;
//   align-items: center; // Align items center for icon and text alignment
//   &:hover {
//     background: ${(props) => (props.darkMode ? "#007acc" : "#00aaff")};
//   }
// `;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.darkMode ? "#00aaff" : "#007acc")};
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center; // Align items center for icon and text alignment
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => (props.darkMode ? "#007acc" : "#00aaff")};
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
