// src/components/Skills.js
import React from "react";
import styled from "styled-components";
import {
  FaPython,
  FaRobot,
  FaBrain,
  FaCamera,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaPython as FaDjango,
  FaLink,
  FaGitAlt,
  FaPalette,
} from "react-icons/fa"; // Importing icons
import { useTheme } from "../ThemeContext"; // Import useTheme hook
const skillsData = [
  {
    title: "Python",
    icon: <FaPython size={50} />,
    description:
      "Proficient in Python for scripting, automation, and web development.",
  },
  {
    title: "Machine Learning",
    icon: <FaRobot size={50} />,
    description:
      "Experienced in building and deploying machine learning models.",
  },
  {
    title: "Neural Networks",
    icon: <FaBrain size={50} />,
    description:
      "Skilled in designing and training neural network architectures.",
  },
  {
    title: "Computer Vision",
    icon: <FaCamera size={50} />,
    description:
      "Developing applications that can interpret and process visual data.",
  },
  {
    title: "HTML",
    icon: <FaHtml5 size={50} />,
    description: "Creating structured and semantic web content.",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt size={50} />,
    description: "Styling web pages with responsive and adaptive designs.",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap size={50} />,
    description:
      "Utilizing Bootstrap framework for quick and responsive designs.",
  },
  {
    title: "PHP",
    icon: <FaPhp size={50} />,
    description: "Developing server-side web applications with PHP.",
  },
  {
    title: "Laravel",
    icon: <FaLaravel size={50} />,
    description: "Building web applications using the Laravel framework.",
  },
  {
    title: "Django",
    icon: <FaDjango size={50} />,
    description: "Creating robust web applications with the Django framework.",
  },
  {
    title: "API",
    icon: <FaLink size={50} />,
    description: "Designing and integrating RESTful APIs for web applications.",
  },
  {
    title: "Git",
    icon: <FaGitAlt size={50} />,
    description: "Version control and collaboration using Git.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette size={50} />,
    description:
      "Designing user-centric interfaces and improving user experience.",
  },
];

const Skills = () => {
  const { darkMode } = useTheme(); // Access darkMode from the theme context

  return (
    <Container darkMode={darkMode}>
      <SkillsContainer>
        <Title>
          <Highlight>SKILLS</Highlight>
        </Title>
        <ProgressBar className="progress w-20 h-1" />
        <Description>
          Below are some of my skills, and I'm always looking to learn more.
        </Description>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} darkMode={darkMode}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 2rem;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: #00aaff;
`;

const ProgressBar = styled.div`
  background: #00aaff;
  height: 4px;
  width: 100px;
  margin: 0 auto 2rem auto;
`;

const Description = styled.p`
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 769px) and (max-width: 913px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background: ${(props) => (props.darkMode ? "#333" : "#f9f9f9")};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const SkillIcon = styled.div`
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #00aaff;
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
`;