import React from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa"; // Importing the download icon
import { useTheme } from "../ThemeContext"; // Import useTheme hook

const Papers = () => {
  const { darkMode } = useTheme(); // Access darkMode from the theme context

  return (
    <Container darkMode={darkMode}>
      <PapersContainer>
        <Title>
          <Highlight>PAPERS</Highlight>
        </Title>
        <ProgressBar />
        <Paper darkMode={darkMode}>
          <PaperTitle
            href="/pdf/sentiment_analysis_of_youtube_comments.pdf" // Replace with the actual path to the PDF
            target="_blank"
            darkMode={darkMode}
          >
            Bachelor's Thesis: Sentiment Analysis of YouTube Comments Using
            Machine Learning Algorithm
          </PaperTitle>
          <Authors darkMode={darkMode}>
            Swarna Das, Rahul Singha, Kapil Das. 2024
          </Authors>
          <DownloadLink
            href="/pdf/sentiment_analysis_of_youtube_comments.pdf"
            download
            darkMode={darkMode}
          >
            <FaDownload style={{ marginRight: "0.5rem" }} />
            Download
          </DownloadLink>
        </Paper>
      </PapersContainer>
    </Container>
  );
};

export default Papers;

const Container = styled.div`
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 2rem;
`;

const PapersContainer = styled.div`
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

const Paper = styled.div`
  background: ${(props) => (props.darkMode ? "#333" : "#f9f9f9")};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const PaperTitle = styled.a`
  display: block;
  font-size: 1.5rem;
  color: ${(props) => (props.darkMode ? "#00aaff" : "#333")};
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Authors = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #00aaff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background: #007acc;
  }
`;
