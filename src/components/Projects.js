import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const projects = [
  {
    title: "Facial Expression Generation Using GAN Model",
    shortDescription:
      "Generating and classifying facial expressions using advanced machine learning techniques.",
    fullDescription:
      "This project uses advanced machine learning techniques to generate and classify facial expressions. Using the CK+ dataset, the process begins with accurate face detection and alignment through MTCNN. For generating realistic facial expressions, a GAN model is trained to detect eight distinct emotions: Anger, Contempt, Disgust, Fear, Happiness, Sadness, Surprise, and Neutral. An example of generated emotions can be seen here. Subsequently, a CNN model is trained to classify these emotions with high accuracy, ensuring effective and diverse facial expression generation.",
    image: "https://i.ibb.co/TTChx6P/resize-17170069519010080541.png",
    github:
      "https://github.com/swarna32/facial_expression_generation_using_gan_model", // GitHub link
  },
  {
    title: "Object Detection Using YOLOv9_CBAM",
    shortDescription:
      "Enhanced object detection using YOLOv9 with CBAM for improved accuracy.",
    fullDescription:
      "This project focuses on object detection using the YOLOv9 architecture enhanced with the Convolutional Block Attention Module (CBAM). We created and annotated a custom dataset and utilized pretrained weights for model initialization. YOLOv9, the latest iteration in the YOLO series, is known for its real-time detection speed and high accuracy. By integrating CBAM, which enhances representational power by focusing on important features, the model's detection capabilities are significantly improved. The trained YOLOv9_CBAM model accurately identifies and classifies objects in images.",
    image:
      "https://i.ibb.co/v1ZSGwb/resize-17170063181985223797-Screenshot20240521181012.png",
    github: "https://github.com/swarna32/object_detection_using_yolov9_CBAM", // GitHub link
  },
  {
    title: "Plant Species Identification Using CNN",
    shortDescription:
      "Plant species identification using a CNN trained on 32 classes with data augmentation for improved accuracy",
    fullDescription:
      "This project utilizes a Convolutional Neural Network (CNN) to identify plant species from a dataset containing 1800 images of 32 different species. The images were resized and normalized before training, and data augmentation was used to enhance the dataset. The CNN architecture includes three convolutional layers with increasing filter sizes and ReLU activation functions, followed by max pooling layers to downsample the feature maps. Two fully connected layers with ReLU activation precede the output layer, which uses a softmax activation function to classify the plant species. The model's performance was evaluated using accuracy and loss metrics, a confusion matrix, and ROC curves for each class.",
    image: "https://i.ibb.co/S7QVK9R/8-Figure5-1.png",
    github: "https://github.com/swarna32/plant-species-identification", // GitHub link
  },
  {
    title: "Emotion Classification Using TF-IDF",
    shortDescription:
      "Classifying emotions into six categories using TF-IDF for feature extraction and various machine learning models for evaluation.",
    fullDescription:
      "This project focuses on classifying emotions into six categories: sadness, anger, love, surprise, fear, and happy. The dataset undergoes preprocessing to clean the text data, removing noise and irrelevant information. For feature extraction, TF-IDF (Term Frequency-Inverse Document Frequency) is employed to transform the textual data into numerical features. TF-IDF converts the text into a matrix of term features, where each term's weight indicates its importance within a document relative to the entire corpus.Several machine learning models are trained and evaluated to determine their effectiveness in emotion classification. The models' performances are assessed using standard evaluation metrics such as accuracy, precision, recall, and F1-score. By comparing these metrics, the project identifies which model best classifies the emotions based on the TF-IDF features extracted from the text data.",
    image: "https://i.ibb.co/VgcXNkf/6a1d833b-6448-40c0-aec2-bea1c2d6618d.jpg",
    github:
      "https://github.com/swarna32/EmotionClassificationTFIDF-RandomForest", // GitHub link
  },
  {
    title: "Kidney Failure Classification Using ANN",
    shortDescription:
      "Classifying kidney failure using an Artificial Neural Network (ANN) with preprocessed data, evaluated using accuracy, precision, recall, F1 score, and confusion matrix.",
    fullDescription:
      "This project aims to classify kidney failure into two classes: 0 (no kidney failure) and 1 (kidney failure) using an Artificial Neural Network (ANN). The dataset is preprocessed to ensure optimal model performance. Label encoding is used to convert categorical labels into numerical format, one-hot encoding transforms categorical features into a binary matrix representation, and Min-Max scaling scales feature values to a range between 0 and 1.The ANN model architecture includes an input layer with 60 neurons (input dimension of 25) and ReLU activation, followed by a hidden layer with 40 neurons and ReLU activation. The output layer consists of a single neuron with sigmoid activation for binary classification. The model is compiled with binary cross-entropy loss, Adam optimizer, and accuracy as the evaluation metric.",
    image: "https://i.ibb.co/BB3rVrn/resize-17170043651387211415images.jpg",
    github: "https://github.com/swarna32/kidney_failure", // GitHub link
  },
  {
    title: "Depression Classification Using TF-IDF and Machine Learning Models",
    shortDescription:
      "Classifying depression using TF-IDF for feature extraction and various machine learning models.",
    fullDescription:
      "This project aims to classify depression into two classes: 0 (non-depressed) and 1 (depressed) using machine learning models. The dataset undergoes preprocessing to clean the text data, removing noise and irrelevant information. For feature extraction, TF-IDF (Term Frequency-Inverse Document Frequency) is employed to transform the textual data into numerical features. TF-IDF converts the text into a matrix of term features, where each term's weight indicates its importance within a document relative to the entire corpus.Several machine learning models are trained and evaluated to determine their effectiveness in depression classification. The models' performances are assessed using standard evaluation metrics such as accuracy, precision, recall, and F1-score.",
    image: "https://i.ibb.co/M1kMr3D/images.jpg",
    github: "https://github.com/swarna32/Depression", // GitHub link
  },
  {
    title: "Bangla News Detector",
    shortDescription:
      "Classifying Bangla news articles as real or fake using TF-IDF and various machine learning models.",
    fullDescription:
      "This project aims to classify Bangla news articles into two classes: real and fake. The dataset undergoes extensive preprocessing, including the removal of Bangla punctuation and stopwords, and the application of a Bangla stemmer to reduce words to their root forms. SMOTE (Synthetic Minority Over-sampling Technique) is used to balance the dataset by oversampling the minority class. For feature extraction, TF-IDF (Term Frequency-Inverse Document Frequency) is employed to transform the textual data into numerical features. TF-IDF converts the text into a matrix of term features, where each term's weight indicates its importance within a document relative to the entire corpus. Several machine learning models are trained and evaluated to determine their effectiveness in classifying Bangla news articles. The models' performances are assessed using standard evaluation metrics such as accuracy, precision, recall, F1-score, and confusion matrix. By comparing these metrics, the project identifies which model best classifies Bangla news articles as real or fake based on the TF-IDF features extracted from the text data.",
    image:
      "https://i.ibb.co/1bV2kQg/resize-1717007954192226241039150cb884845d5898fc9b50e1120bdnov182019pennstateistockfakenews640x360.png",
    github: "https://github.com/swarna32/bangla_news_detector", // GitHub link
  },
  {
    title: "YouTube Comment Sentiment Analysis",
    shortDescription:
      "Classifying YouTube comments into six sentiment categories using extensive preprocessing, TF-IDF, and multiple machine learning models.",
    fullDescription:
      "This project focuses on classifying YouTube comments into six sentiment categories: Positive, Negative, Corrective, Interrogative, Imperative, and Neutral. The dataset undergoes extensive preprocessing, including the removal of punctuation and extra spaces, part-of-speech tagging, and lemmatization. To address class imbalance, the Synthetic Minority Over-sampling Technique (SMOTE) is applied. Feature extraction is conducted using Term Frequency-Inverse Document Frequency (TF-IDF), transforming text data into numerical features that reflect the importance of terms within documents relative to the entire corpus. Several machine learning models are trained and evaluated, including Naive Bayes, Decision Tree, Random Forest, Logistic Regression, K-Nearest Neighbors, and Support Vector Machine. The performance of these models is assessed using metrics such as accuracy, precision, recall, F1 score, and ROC curves, alongside a confusion matrix to illustrate classification effectiveness. The results showcase precision, recall, and F1-score comparisons, ROC curves for performance visualization, and classifier accuracy by class, demonstrating the models' effectiveness in sentiment analysis of YouTube comments.",
    image: "https://i.ibb.co/R0Q3zfs/resize-1717008285484450951unnamed.jpg",
    github: "https://github.com/swarna32/youtube_comment_sentiment_analysis", // GitHub link
  },
  {
    title: "Handwritten Digit Recognition",
    shortDescription:
      "Implementing a system to recognize handwritten digits using OpenCV and normalized cross-correlation for matching test images with candidate digits.",
    fullDescription:
      "This project implements a system for recognizing handwritten digits using image processing techniques with OpenCV. The system compares a test image with candidate images to find the closest matching digit based on normalized cross-correlation (NCC). The dataset comprises candidate images representing digits 0-9 and a test image containing handwritten digits to be recognized. The preprocessing steps include loading the images with OpenCV, converting them to grayscale, applying adaptive thresholding for binarization, detecting contours to isolate individual digits, and resizing and normalizing the detected digits to 50x50 pixels. For the recognition process, contours are extracted from each candidate image to isolate the digit, which is then resized and normalized. The same preprocessing is applied to the test image to find digit contours. NCC is calculated between the candidate digit and each digit in the test image to find the closest match. The results display the closest matching digit from the candidate set alongside the test image with the matched digit highlighted, aiding in visualizing the system's performance.",
    image: "https://i.ibb.co/HxyML57/Screenshot-2024-05-30-005417.png",
    github: "https://github.com/swarna32/Handwritten_digit_recognition", // GitHub link
  },
];

const Projects = () => {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Container darkMode={darkMode}>
      <ProjectsWrapper>
        <Title>
          <Highlight>Projects</Highlight>
        </Title>
        <ProgressBar />
        <ProjectsDescription>
          Below are some of my projects, showcasing my skills and experience.
        </ProjectsDescription>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              darkMode={darkMode}
              onClick={() => openModal(project)}
            >
              <ImageContainer>
                <Image src={project.image} alt={project.title} />
                <Overlay>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>
                    {project.shortDescription}
                  </ProjectDescription>
                </Overlay>
              </ImageContainer>
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </ProjectsWrapper>

      {selectedProject && (
        <ModalOverlay darkMode={darkMode} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalImage
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <ModalTitle>{selectedProject.title}</ModalTitle>
            <ModalDescription>
              {selectedProject.fullDescription}
            </ModalDescription>
            <GitHubButton href={selectedProject.github} target="_blank">
              <FaGithub /> View Project on GitHub
            </GitHubButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  width: 150px;
  margin: 0 auto 2rem auto;
`;

const ProjectsDescription = styled.p`
  margin-bottom: 2rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ProjectCard = styled.div`
  position: relative;
  width: calc(33.333% - 1rem);
  height: 250px;
  margin-bottom: 1rem;
  text-align: left;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background: ${(props) => (props.darkMode ? "#333" : "#f9f9f9")};

  &:hover {
    transform: scale(0.97);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: calc(50% - 1rem);
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 200px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  padding: 0.2rem;
  color: #00aaff;
  font-size: 1.5rem;
  text-align: center;
`;

const ProjectDescription = styled.p`
  padding: 0.2rem;
  color: #fff;
  text-align: center;
  font-size: 1rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.darkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.darkMode ? "#333" : "#fff")};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 500px;
  width: 100%;
  text-align: center;
  max-height: 80vh;
  overflow-y: auto;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const ModalTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${(props) => (props.darkMode ? "#00aaff" : "#333")};
`;

const ModalDescription = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const GitHubButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #00aaff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #008fcc;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
