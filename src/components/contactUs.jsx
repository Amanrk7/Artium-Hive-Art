import React from "react";
import styled from "styled-components";

const ContactPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: inherit;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 155px;
  animation: contactus_anim 0.7s ease forwards;
  @keyframes contactus_anim {
    0% {
      opacity: 0;
      margin-top: 500px;
    }
    100% {
      opacity: 1;
      margin-top: 155px;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: rgb(0 0 0);
  margin-bottom: 10px;
  font-family: "Phonk Contrast DEMO";
  color: var(--primary);
  justify-self: center;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
  font-family: "BOLDE";
  letter-spacing: 1.5px;
  color: var(--text);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: inherit;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  ba
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  background: var(--accent);
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 18px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: var(--text);
  &:focus {
    border-color: var(--secondary);
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease;
  background: var(--accent);
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 18px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: var(--text);
  &:focus {
    border-color: var(--secondary);
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 18px;
  letter-spacing: 1.5px;
  font-weight: 600;
  &:hover {
    background: #2980b9;
  }
`;

const ContactInfo = styled.div`
  background: inherit;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-family: "Phonk Contrast DEMO";
  font-size: 1.2rem;
  color: var(--primary);
  background: none;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: none;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  color: #3498db;
  margin-right: 15px;
  background: none;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: var(--text);
  margin: 0;
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 15px;
  letter-spacing: 1px;
  background: none;
  font-size: 18px;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <ContactPageContainer>
      <Title>Contact Us</Title>
      <Subtitle>
        We'd love to hear from you! Whether you have a question, feedback, or
        just want to say hello, feel free to reach out.
      </Subtitle>

      <ContactGrid>
        {/* Contact Form */}
        <ContactForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Subject" required />
          <TextArea placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        {/* Contact Information */}
        <ContactInfo>
          <InfoTitle>Connect With Us</InfoTitle>
          <InfoItem>
            <Icon>📧</Icon>
            <InfoText>contact@artiumhive.art</InfoText>
          </InfoItem>
          <div
            style={{
              display: "flex",
              background: "none",
            }}
          >
            <InfoItem>
              <Icon>
                <div className="instagram-icon">
                  <a
                    href="https://www.instagram.com/artiumhive/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i id="instagram" className="fa-brands fa-instagram"></i>{" "}
                  </a>
                </div>
              </Icon>
            </InfoItem>
            <InfoItem>
              <Icon>
                <div
                  style={{
                    background: "none",
                  }}
                >
                  <a
                    href="https://x.com/ArtiumHive?t=ZqhhacLJ8laU3w9hJtDWfQ&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "none",
                    }}
                  >
                    <i id="x" className="fa-brands fa-x-twitter"></i>{" "}
                  </a>
                </div>
              </Icon>
            </InfoItem>
          </div>
        </ContactInfo>
      </ContactGrid>
    </ContactPageContainer>
  );
};

export default ContactUs;
