import React from "react";
import styled from "styled-components";

// Styled Components
const ContactPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 155px;
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
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
  font-family: "BOLDE";
  letter-spacing: 1.5px;
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
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
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

  &:focus {
    border-color: #3498db;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

const ContactInfo = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
      font-family: 'Phonk Contrast DEMO';
    font-size: 1.2rem;
}
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  color: #3498db;
  margin-right: 15px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0;
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 15px;
  letter-spacing: 1px;
`;

const MapContainer = styled.div`
  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

// ContactUs Component
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
          {/* <InfoItem>
            <Icon>📍</Icon>
            <InfoText>
              MAYA INCOPRATION, HNO. 303 GANESH GALAXY CITY BUILDING AYODHYA
              BYPASS ROAD BHOPAL <br />
              India, 462041  Dist-BHOPAL
            </InfoText>
          </InfoItem> */}
          {/* <InfoItem>
            <Icon>📞</Icon>
            <InfoText>+91 9990253738</InfoText>
          </InfoItem> */}
          <InfoItem>
            <Icon>📧</Icon>
            <InfoText>contact@artiumhive.art</InfoText>
          </InfoItem>
          <div
            style={{
              display: "flex",
            //   justifyContent: "center",
            //   justifyItems: "center",
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
              {/* <InfoText>contact@artiumhive.art</InfoText> */}
            </InfoItem>
            <InfoItem>
              <Icon>
                <div>
                  <a
                    href="https://x.com/ArtiumHive?t=ZqhhacLJ8laU3w9hJtDWfQ&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i id="x" className="fa-brands fa-x-twitter"></i>{" "}
                  </a>
                </div>
              </Icon>
              {/* <InfoText>contact@artiumhive.art</InfoText> */}
            </InfoItem>
          </div>
        </ContactInfo>
      </ContactGrid>

      {/* Embedded Map */}
      {/* <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715317365928!2d72.83260931538497!3d19.04198825790038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f6f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sCreative%20City!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
          title="ArtiumHive Location"
          allowFullScreen
          loading="lazy"
        />
      </MapContainer> */}
    </ContactPageContainer>
  );
};

export default ContactUs;
