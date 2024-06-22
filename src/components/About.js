import React from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "../ThemeContext";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <AboutContainer darkMode={darkMode}>
      <Title>
        <Highlight> ABOUT ME</Highlight>
      </Title>
      <ProgressBar />
      <IntroText>
      Hi, I'm Swarna Das, a recent graduate from Premier University passionate about Computer Science. My interests include software design and development, artificial intelligence, machine learning, computer vision, and natural language processing. I enjoy creating innovative solutions and staying updated with emerging technologies.
      </IntroText>
      <Content>
        <ProfileImage
          src="https://i.ibb.co/jy2yhDV/Whats-App-Image-2024-05-31-at-5-24-14-PM.jpg"
          alt="Profile"
        />
        <Details>
          <DetailItem>
            <Dot />
            <DetailText>Full Name: Swarna Das</DetailText>
          </DetailItem>
          <DetailItem>
            <Dot />
            <DetailText>Country: Bangladesh</DetailText>
          </DetailItem>
          <DetailItem>
            <Dot />
            <DetailText>City: Chattogram</DetailText>
          </DetailItem>
          <DetailItem>
            <Dot />
            <DetailText>Email: swarnacse36@gmail.com</DetailText>
          </DetailItem>
          <DetailItem>
            <Dot />
            <DetailText>Languages: Bangla(native), English</DetailText>
          </DetailItem>
          <Buttons>
            <Button href="/pdf/SwarnaDasResume (1) (1).pdf">
              <FaDownload style={{ marginRight: "0.5rem" }} /> Download Resume
            </Button>
            <Button href="https://github.com/swarna32" target="_blank">
              <AiFillGithub />
            </Button>
            <Button
              href="https://www.linkedin.com/in/swarna-das/"
              target="_blank"
            >
              <AiFillLinkedin />
            </Button>
          </Buttons>
        </Details>
      </Content>
      <SectionContainer>
        <SectionTitle>
          <Highlight>EDUCATION & EXPERIENCE</Highlight>
        </SectionTitle>
        <ProgressBar2 />
        <ExperienceEducationContainer>
          <SectionWrapper>
            <SectionRow>
              <SectionIcon>
                <FaGraduationCap size={30} color="#00aaff" />
              </SectionIcon>
              <SectionHeader>
                <Highlight>Education</Highlight>
              </SectionHeader>
            </SectionRow>
            <EducationDetails>
              <Year>2024</Year>
              <Degree>
                Bachelor of Science in Computer Science & Engineering
              </Degree>
              <Institution>Premier University, Chittagong</Institution>
            </EducationDetails>
            <EducationDetails>
              <Year>2019</Year>
              <Degree>Higher Secondary Certificate (HSC)</Degree>
              <Institution>Mahila College, Chittagong</Institution>
            </EducationDetails>
            <EducationDetails>
              <Year>2017</Year>
              <Degree>Secondary School Certificate (SSC)</Degree>
              <Institution>
                Krishnakumari City Corp. Girl's High School
              </Institution>
            </EducationDetails>
          </SectionWrapper>
          <SectionWrapper>
            <SectionRow>
              <SectionIcon>
                <FaBriefcase size={30} color="#00aaff" />
              </SectionIcon>
              <SectionHeader>
                <Highlight>Experience</Highlight>
              </SectionHeader>
            </SectionRow>
            <ExperienceDetails>
              <Year>2021-2023</Year>
              <Company>BDRCS (Bangladesh Red Crescent)</Company>
              <Role>Volunteer</Role>
            </ExperienceDetails>
          </SectionWrapper>
        </ExperienceEducationContainer>
      </SectionContainer>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: #00aaff;
`;

const ProgressBar = styled.div`
  background: #00aaff;
  height: 4px;
  width: 150px;
  margin: 0 auto 2rem auto;
`;

const ProgressBar2 = styled.div`
  background: #00aaff;
  height: 4px;
  width: 320px;
  margin: 0 auto 2rem auto;
`;

const IntroText = styled.p`
  text-align: center;
  margin: 0 auto 2rem auto;
  max-width: 800px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 350px;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 350px;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #00aaff;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const DetailText = styled.p`
  margin: 0;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  background: #00aaff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    background: #007acc;
  }
`;

const SectionContainer = styled.div`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const ExperienceEducationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  flex-wrap: wrap;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (min-width: 769px) and (max-width: 913px) {
    width: 100%;
    align-items: center;
  }
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SectionIcon = styled.div`
  margin-right: 1rem;
`;

const SectionHeader = styled.h3`
  color: #00aaff;
`;

const ExperienceDetails = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 769px) and (max-width: 913px) {
    text-align: center;
  }
`;

const EducationDetails = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 769px) and (max-width: 913px) {
    text-align: center;
  }
`;

const Year = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Company = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 1rem;
`;

const Degree = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Institution = styled.p`
  font-size: 1rem;
`;
