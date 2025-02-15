import React from "react";
import styled from "styled-components";

const PrivacyPolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: inherit;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 151px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 20px;
  font-family: "Phonk Contrast DEMO";
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--primary);
  margin-top: 20px;
  margin-bottom: 10px;
      font-family: 'BOLDE';
    letter-spacing: 1.5px;
}
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 15px;
  line-height: 1.6;
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 20px;
  letter-spacing: 1.5px;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 20px;
  letter-spacing: 1.5px;
`;

export function PrivacyPolicy() {
  return (
    <PrivacyPolicyContainer>
      <Title>Privacy Policy</Title>
      <Paragraph>Last Updated: FEBRUARY 10, 2025 </Paragraph>

      <SectionTitle>1. Introduction</SectionTitle>
      <Paragraph>
        Welcome to ArtiumHive, operated by Maya Incorporation ("Company", "we",
        "us", or "our"). This Privacy Policy explains how we collect, use,
        share, and protect your information when you use our website.
      </Paragraph>
      <Paragraph>
        By accessing or using ArtiumHive, you agree to the collection and use of
        your information as described in this policy. If you do not agree,
        please discontinue using our website.
      </Paragraph>
      <Paragraph>
        This Privacy Policy is intended to provide you with detailed information
        about how we handle your personal data, including the rights and choices
        you have in relation to your information. We are committed to
        transparency and protecting your privacy at all times.
      </Paragraph>

      <SectionTitle>2. Information We Collect</SectionTitle>
      <Paragraph>
        We collect a wide range of information from our users, which includes
        but is not limited to:
      </Paragraph>
      <List>
        <ListItem>
          Personal Details: Full name, email address, phone number, and address.
        </ListItem>
        <ListItem>
          Payment Information: Processed securely by third-party providers like
          PayPal and Razorpay.
        </ListItem>
        <ListItem>
          Social Media Profiles: Username and profile picture if linked.
        </ListItem>
        <ListItem>
          User-Generated Content: Artwork, comments, and other contributions.
        </ListItem>
        <ListItem>
          Automated Data Collection: Device identifiers, IP address, and
          browsing behavior.
        </ListItem>
      </List>

      <SectionTitle>3. How We Collect Data</SectionTitle>
      <Paragraph>
        We gather user data through multiple channels, including:
      </Paragraph>
      <List>
        <ListItem>Direct user input via online forms.</ListItem>
        <ListItem>Cookies and tracking technologies.</ListItem>
        <ListItem>User-generated content submissions.</ListItem>
        <ListItem>Analytics tools for website usage.</ListItem>
      </List>

      <SectionTitle>4. How We Use Your Data</SectionTitle>
      <Paragraph>
        We use your data for purposes such as account management, payment
        processing, marketing, and security.
      </Paragraph>

      <SectionTitle>5. Data Sharing</SectionTitle>
      <Paragraph>
        We share data with trusted third parties, including payment processors,
        marketing services, and legal authorities when required.
      </Paragraph>

      <SectionTitle>6. Cookies & Tracking Technologies</SectionTitle>
      <Paragraph>
        We use cookies to enhance functionality, analyze traffic, and deliver
        targeted ads. Users can disable cookies via browser settings.
      </Paragraph>

      <SectionTitle>7. Data Security</SectionTitle>
      <Paragraph>
        We implement SSL encryption, multi-layer authentication, and regular
        security reviews to protect your data.
      </Paragraph>

      <SectionTitle>8. Compliance with Indian & U.S. Laws</SectionTitle>
      <Paragraph>
        We adhere to Indian IT Rules, 2011, and U.S. laws like CCPA and GDPR
        where applicable.
      </Paragraph>

      <SectionTitle>9. Children's Privacy</SectionTitle>
      <Paragraph>
        Our platform is not intended for children under 13 (or 16 in the EU). We
        do not knowingly collect data from minors.
      </Paragraph>

      <SectionTitle>10. Policy Updates</SectionTitle>
      <Paragraph>
        We may update this policy at any time. Users are encouraged to review it
        regularly.
      </Paragraph>

      <SectionTitle>11. Contact Us</SectionTitle>
      <Paragraph>
        For privacy-related inquiries, contact us at{" "}
        <strong
          style={{
            fontFamily: "Tanseek Modern Pro Arabic Book",
            fontSize: "20px",
            letterSpacing: "1.5px",
          }}
        >
          contact@artiumhive.art
        </strong>
        .
      </Paragraph>
    </PrivacyPolicyContainer>
  );
}
