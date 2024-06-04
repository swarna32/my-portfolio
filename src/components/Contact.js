import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaShareAlt } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!form.name) {
      valid = false;
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      valid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      valid = false;
      newErrors.email = "Email is invalid";
    }

    if (!form.subject) {
      valid = false;
      newErrors.subject = "Subject is required";
    }

    if (!form.message) {
      valid = false;
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSent(true);
      // Clear form
      setForm({ name: "", email: "", subject: "", message: "" });

      // Hide confirmation message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }
  };

  return (
    <Container darkMode={darkMode}>
      <ContactContainer>
        <Title>
          <Highlight>CONTACT ME</Highlight>
        </Title>
        <ProgressBar />
        <Content>
          <LeftSection>
            <ContactInformation>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoDescription>
                Don't hesitate to get in touch; I'm just a message away. Whether
                you're interested in my work, looking for a skilled
                professional, or simply want to chat about the latest trends in
                our industry, I'd love to hear from you. Your feedback and ideas
                are always welcome.
              </InfoDescription>
              <ContactDetails>
                <ContactCard darkMode={darkMode}>
                  <Icon>
                    <FaEnvelope size={30} />
                  </Icon>
                  <ContactText>
                    <ContactHeading>Contact on mail</ContactHeading>
                    <ContactInfo>swarnacse36@gmail.com</ContactInfo>
                  </ContactText>
                </ContactCard>
                <ContactCard darkMode={darkMode}>
                  <Icon>
                    <FaShareAlt size={30} />
                  </Icon>
                  <ContactText>
                    <ContactHeading>Connect socially</ContactHeading>
                    <ContactInfo>
                      <Icon>
                        <a
                          href="https://www.linkedin.com/in/swarna-das/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin size={30} color="#0e76a8" />
                        </a>
                      </Icon>
                    </ContactInfo>
                  </ContactText>
                </ContactCard>
              </ContactDetails>
            </ContactInformation>
          </LeftSection>
          <RightSection darkMode={darkMode}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label darkMode={darkMode}>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  darkMode={darkMode}
                  hasError={!!errors.name}
                />
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <Label darkMode={darkMode}>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  darkMode={darkMode}
                  hasError={!!errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <Label darkMode={darkMode}>Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  darkMode={darkMode}
                  hasError={!!errors.subject}
                />
                {errors.subject && (
                  <ErrorMessage>{errors.subject}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup>
                <Label darkMode={darkMode}>Message</Label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter message"
                  darkMode={darkMode}
                  hasError={!!errors.message}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message}</ErrorMessage>
                )}
              </FormGroup>
              <SubmitButton type="submit">SEND</SubmitButton>
              {isSent && (
                <ConfirmationMessage>
                  Your message has been sent successfully!
                </ConfirmationMessage>
              )}
            </Form>
          </RightSection>
        </Content>
      </ContactContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 2rem;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  background: ${(props) => (props.darkMode ? "#333" : "#f9f9f9")};
  padding: 2rem;
  border-radius: 8px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContactInformation = styled.div`
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const InfoTitle = styled.h3`
  margin-bottom: 1rem;
`;

const InfoDescription = styled.p`
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => (props.darkMode ? "#444" : "#e0e0e0")};
  padding: 1rem;
  border-radius: 8px;
`;

const Icon = styled.div`
  margin-right: 1rem;
`;

const ContactText = styled.div`
  text-align: left;
`;

const ContactHeading = styled.h4`
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.p`
  margin: 0;

  a {
    color: #00aaff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: ${(props) =>
    props.hasError
      ? "1px solid #ff4d4f"
      : props.darkMode
      ? "none"
      : "1px solid #ccc"};
  border-radius: 4px;
  background: ${(props) => (props.darkMode ? "#222" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  box-shadow: ${(props) => (props.hasError ? "0 0 5px #ff4d4f" : "none")};
`;
const Textarea = styled.textarea`
  padding: 0.75rem;
  border: ${(props) =>
    props.hasError
      ? "1px solid #ff4d4f"
      : props.darkMode
      ? "none"
      : "1px solid #ccc"};
  border-radius: 4px;
  background: ${(props) => (props.darkMode ? "#222" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  resize: none;
  height: 100px;
  box-shadow: ${(props) => (props.hasError ? "0 0 5px #ff4d4f" : "none")};
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 0.875rem;
  margin: 0.25rem 0 0 0;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  background: #00aaff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #007acc;
  }
`;

const ConfirmationMessage = styled.div`
  margin-top: 1rem;
  color: #4caf50;
`;
