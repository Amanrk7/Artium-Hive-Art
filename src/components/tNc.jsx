import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  margin-top: 151px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Phonk Contrast DEMO";
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #34495e;
  cursor: pointer;
  padding: 10px;
  background: #ecf0f1;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease;
  font-size: 1.5rem;
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "BOLDE";
  letter-spacing: 1.5px;
  &:hover {
    background: #d5dbdb;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionContent = styled.div`
  padding: 10px;
  background: #f9f9f9;
  border-radius: 5px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 20px;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
  font-family: "Tanseek Modern Pro Arabic Book";
  font-size: 20px;
  letter-spacing: 1.5px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  color: #2c3e50;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "BOLDE";
  letter-spacing: 1.5px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// ConditionsTermsPage Component
export function ConditionsTermsPage() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <TermsContainer>
      <Title>Terms and Conditions</Title>

      {/* Section 1: Introduction */}
      <Section>
        <SectionTitle onClick={() => toggleSection("introduction")}>
          1. Introduction {openSections.introduction ? "▼" : "▶"}
        </SectionTitle>
        {openSections.introduction && (
          <SectionContent>
            <Paragraph>
              Welcome to ArtiumHive! This document sets out the Terms and
              Conditions (“Terms”) on which Maya Incorporation ("ArtiumHive",
              "Platform," "we," "our," or "us") provides you (“You” or “Your”)
              with its Platform [artiumhive.art] (“Platform”).
            </Paragraph>
            <Paragraph>
              ArtiumHive is a digital marketplace designed to empower artists by
              providing them with a platform to showcase, sell, and distribute
              their digital artwork. Simultaneously, it allows buyers to explore
              and purchase unique digital creations.
            </Paragraph>
            <Paragraph>
              By accessing, browsing, or using ArtiumHive, you acknowledge that
              you have read, understood, and agreed to be bound by these Terms.
              If you do not agree with any part of these Terms, you must not use
              our platform.
            </Paragraph>
            <Paragraph>
              We reserve the right to update or modify these Terms at any time.
              Continued use of ArtiumHive after such modifications constitutes
              your acceptance of the new Terms.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      {/* Section 2: Definitions */}
      <Section>
        <SectionTitle onClick={() => toggleSection("definitions")}>
          2. Definitions {openSections.definitions ? "▼" : "▶"}
        </SectionTitle>
        {openSections.definitions && (
          <SectionContent>
            <List>
              <ListItem>
                <strong>"Platform"</strong> – Refers to ArtiumHive, including
                its website, mobile applications, and any associated services.
              </ListItem>
              <ListItem>
                <strong>"User"</strong> – Any person who accesses or uses
                ArtiumHive, including Sellers and Buyers.
              </ListItem>
              <ListItem>
                <strong>"Seller"</strong> – A registered User (including Artists
                and Buyers) who sells digital artwork to ArtiumHive for a
                one-time payment. ArtiumHive retains full rights to distribute
                and resell the purchased artwork.
              </ListItem>
              <ListItem>
                <strong>"Buyer"</strong> – A registered User or visitor who
                purchases digital artwork from ArtiumHive.
              </ListItem>
              <ListItem>
                <strong>"Content"</strong> – Any text, images, graphics, digital
                artwork, or other materials displayed on ArtiumHive.
              </ListItem>
              <ListItem>
                <strong>"Digital Artwork"</strong> – Any creative work,
                including but not limited to digital paintings, illustrations,
                photographs, and animations, purchased by ArtiumHive from
                Sellers for resale and distribution.
              </ListItem>
              <ListItem>
                <strong>"Transaction"</strong> – Any purchase or exchange of
                Digital Artwork, either between ArtiumHive and Sellers, or
                between ArtiumHive and Buyers.
              </ListItem>
              <ListItem>
                <strong>"Intellectual Property Rights"</strong> – Legal rights
                related to copyrights, trademarks, and ownership of Digital
                Artwork.
              </ListItem>
              <ListItem>
                <strong>"Prohibited Content"</strong> – Any content that
                violates these Terms, including but not limited to stolen
                artwork, offensive material, or content that infringes on
                intellectual property rights.
              </ListItem>
            </List>
          </SectionContent>
        )}
      </Section>

      {/* Section 3: User Eligibility & Registration */}
      <Section>
        <SectionTitle onClick={() => toggleSection("userEligibility")}>
          3. User Eligibility & Registration{" "}
          {openSections.userEligibility ? "▼" : "▶"}
        </SectionTitle>
        {openSections.userEligibility && (
          <SectionContent>
            <Subtitle>Eligibility</Subtitle>
            <Paragraph>
              To use ArtiumHive, you must be at least 18 years old or the legal
              age of majority in your jurisdiction.
            </Paragraph>
            <Paragraph>
              By using the platform, you confirm that you have the legal
              capacity to enter into agreements and comply with these Terms.
            </Paragraph>

            <Subtitle>Account Registration</Subtitle>
            <Paragraph>
              Users must create an account to purchase digital artwork from
              ArtiumHive.
            </Paragraph>
            <Paragraph>
              Sellers who wish to list their artwork directly on ArtiumHive may
              be required to create an account, but not all Sellers will be
              registered users.
            </Paragraph>
            <Paragraph>
              Many artworks are acquired privately from local artists without
              requiring them to register on the platform. These transactions are
              conducted outside the online platform and are subject to separate
              agreements between ArtiumHive and the artist.
            </Paragraph>
            <Paragraph>
              During registration, Users must provide accurate, complete, and
              up-to-date information. Failure to do so may result in account
              suspension or termination.
            </Paragraph>
            <Paragraph>
              You are responsible for maintaining the confidentiality of your
              account credentials and agree not to share your login details with
              anyone.
            </Paragraph>
            <Paragraph>
              If you suspect unauthorized access to your account, you must
              notify ArtiumHive immediately.
            </Paragraph>

            <Subtitle>Seller Verification & Responsibility</Subtitle>
            <Paragraph>
              ArtiumHive acquires digital artwork from both registered and
              unregistered Sellers.
            </Paragraph>
            <Paragraph>
              ArtiumHive does not guarantee the verification of every Seller’s
              identity or the originality of artwork provided. The
              responsibility to ensure authenticity lies solely with the Seller
              (whether registered or unregistered).
            </Paragraph>
            <Paragraph>
              Sellers are solely responsible for ensuring that all information
              they provide is truthful and accurate.
            </Paragraph>
            <Paragraph>
              If a Seller (registered or unregistered) provides false,
              misleading, or fraudulent information, they will bear full legal
              and financial consequences, including:
            </Paragraph>
            <List>
              <ListItem>
                Liability for any legal claims or fraudulent activities.
              </ListItem>
              <ListItem>
                All associated legal fees, penalties, and damages.
              </ListItem>
              <ListItem>
                Reimbursement to ArtiumHive for any financial or reputational
                harm suffered.
              </ListItem>
              <ListItem>
                Permanent account suspension (if applicable) and potential legal
                action if necessary.
              </ListItem>
            </List>
            <Paragraph>
              If a Seller provides artwork that is not their original creation
              or violates intellectual property rights, they will bear full
              legal and financial consequences, including:
            </Paragraph>
            <List>
              <ListItem>
                Liability for any legal claims or copyright infringement
                actions.
              </ListItem>
              <ListItem>
                All associated legal fees, penalties, and damages.
              </ListItem>
              <ListItem>
                Reimbursement to ArtiumHive for any financial or reputational
                damage suffered.
              </ListItem>
              <ListItem>
                Permanent account suspension (if applicable) and legal action if
                necessary.
              </ListItem>
            </List>
            <Paragraph>
              ArtiumHive assumes no liability for losses, damages, or disputes
              arising due to false Seller-provided information or fraudulent
              artwork sales.
            </Paragraph>

            <Subtitle>Multiple Accounts</Subtitle>
            <Paragraph>
              Users are prohibited from creating multiple accounts for
              fraudulent activities or to bypass platform restrictions. Any such
              behavior may lead to a permanent ban.
            </Paragraph>

            <Subtitle>Termination of Account</Subtitle>
            <Paragraph>
              ArtiumHive reserves the right to suspend or terminate accounts
              that violate these Terms, engage in fraudulent activities, or fail
              to comply with platform policies.
            </Paragraph>
            <Paragraph>
              Users may request to delete their account by contacting
              ArtiumHive’s support team. However, any pending transactions must
              be completed before the account is closed.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => toggleSection("userResponsibilities")}>
          4. User Responsibilities{" "}
          {openSections.userResponsibilities ? "▼" : "▶"}
        </SectionTitle>
        {openSections.userResponsibilities && (
          <SectionContent>
            <Paragraph>
              All users of ArtiumHive must adhere to the following
              responsibilities to ensure a fair, secure, and ethical
              marketplace:
            </Paragraph>

            <Subtitle>a. General Responsibilities</Subtitle>
            <Paragraph>
              Users agree to use ArtiumHive in compliance with these Terms,
              applicable laws, and ethical business practices.
            </Paragraph>
            <Paragraph>
              Users must not engage in any fraudulent, misleading, or deceptive
              activities on the platform.
            </Paragraph>
            <Paragraph>
              Users must not attempt to manipulate the platform’s operations,
              pricing, or listings in any unfair manner.
            </Paragraph>

            <Subtitle>b. Seller Responsibilities</Subtitle>
            <Paragraph>
              Sellers (both registered and unregistered) must only sell artwork
              that they have full rights to.
            </Paragraph>
            <Paragraph>
              Sellers must not submit stolen, copied, or unauthorized digital
              artwork. Selling non-original artwork or infringing intellectual
              property rights will result in full legal and financial liability
              for the Seller.
            </Paragraph>
            <Paragraph>
              Sellers agree to fully compensate ArtiumHive for any legal claims,
              fines, or damages caused by fraudulent artwork submissions.
            </Paragraph>
            <Paragraph>
              Sellers must provide accurate and honest information about their
              digital artwork, including its origin and ownership.
            </Paragraph>
            <Paragraph>
              If a Seller is found to have provided false or misleading
              information, ArtiumHive reserves the right to blacklist them and
              pursue legal action if necessary.
            </Paragraph>

            <Subtitle>c. Buyer Responsibilities</Subtitle>
            <Paragraph>
              Buyers agree that all purchases on ArtiumHive are final, and
              refunds or cancellations may not be possible unless explicitly
              stated in a separate policy.
            </Paragraph>
            <Paragraph>
              Buyers must not misuse or distribute purchased artwork in a way
              that violates ArtiumHive's policies or the original artist’s
              intellectual property rights.
            </Paragraph>
            <Paragraph>
              Buyers agree to provide accurate payment and contact information
              when making purchases.
            </Paragraph>

            <Subtitle>d. Prohibited Conduct</Subtitle>
            <Paragraph>Users must not:</Paragraph>
            <List>
              <ListItem>
                Provide false information during registration, transactions, or
                communication with ArtiumHive.
              </ListItem>
              <ListItem>
                Attempt to resell, distribute, or reproduce digital artwork in
                violation of its original licensing terms.
              </ListItem>
              <ListItem>
                Engage in any form of harassment, abuse, or harmful behavior
                towards other users, sellers, or the ArtiumHive team.
              </ListItem>
              <ListItem>
                Upload or share malicious content, including viruses,
                unauthorized scripts, or spam.
              </ListItem>
              <ListItem>
                Use ArtiumHive for illegal activities or to promote unlawful
                conduct.
              </ListItem>
            </List>

            <Subtitle>
              e. Consequences of Violating User Responsibilities
            </Subtitle>
            <Paragraph>
              If a user violates any of these responsibilities, ArtiumHive may
              take one or more of the following actions:
            </Paragraph>
            <List>
              <ListItem>Issue a formal warning to the user.</ListItem>
              <ListItem>
                Suspend or permanently terminate the user’s account (if
                applicable).
              </ListItem>
              <ListItem>
                Blacklist the user from future transactions or partnerships.
              </ListItem>
              <ListItem>
                Take legal action against the user for damages, fraud, or
                intellectual property violations.
              </ListItem>
              <ListItem>
                Report the user to law enforcement authorities if applicable.
              </ListItem>
            </List>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => toggleSection("layawayPlan")}>
          5. Layaway Plan Policy {openSections.layawayPlan ? "▼" : "▶"}
        </SectionTitle>
        {openSections.layawayPlan && (
          <SectionContent>
            <Paragraph>
              At ArtiumHive, we believe that everyone deserves to enjoy art. To
              make it easier for art enthusiasts to own the pieces they love, we
              offer a Layaway Plan—a flexible payment method that allows Buyers
              to reserve digital artwork and pay for it over time.
            </Paragraph>

            <Subtitle>a. How the Layaway Plan Works</Subtitle>
            <Paragraph>
              A Buyer can reserve a piece of digital artwork under the Layaway
              Plan for up to one (1) year.
            </Paragraph>
            <Paragraph>
              The Buyer can make payments at any time, in any amount, towards
              the total price of the reserved artwork.
            </Paragraph>
            <Paragraph>
              Once the full purchase price is paid, the Buyer will receive the
              original digital print of the artwork via email or another
              designated digital delivery method.
            </Paragraph>

            <Subtitle>b. Non-Refundable & No Reimbursement Policy</Subtitle>
            <Paragraph>
              If the Buyer fails to pay the full price within the one-year
              period, all payments made are non-refundable.
            </Paragraph>
            <Paragraph>
              There will be no reimbursements under any circumstances, as
              ArtiumHive held the artwork exclusively for the Buyer during this
              period, preventing others from purchasing it.
            </Paragraph>

            <Subtitle>c. Cancellation Due to Non-Payment</Subtitle>
            <Paragraph>
              If the Buyer fails to make any deposits for 3 consecutive days,
              ArtiumHive reserves the right to cancel the reservation and put
              the artwork back up for sale.
            </Paragraph>
            <Paragraph>
              Any payments made before cancellation are non-refundable.
            </Paragraph>
            <Paragraph>
              ArtiumHive holds full discretion in deciding whether to extend the
              reservation period or reinstate a canceled reservation.
            </Paragraph>

            <Subtitle>d. Transfer of Ownership</Subtitle>
            <Paragraph>
              The Buyer does not own the artwork until the full payment is
              completed.
            </Paragraph>
            <Paragraph>
              ArtiumHive retains full ownership and rights to the artwork until
              the final transaction is completed.
            </Paragraph>
            <Paragraph>
              If the Buyer fails to complete the payment, they forfeit all
              claims to the reserved artwork.
            </Paragraph>

            <Subtitle>e. No Modifications to Layaway Terms</Subtitle>
            <Paragraph>
              The Layaway Plan operates under strict terms, and no exceptions
              will be made for refunds, extensions, or alternative payment
              arrangements.
            </Paragraph>
            <Paragraph>
              Buyers are responsible for managing their payments within the
              allowed timeframe.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => toggleSection("intellectualProperty")}>
          6. Intellectual Property Rights{" "}
          {openSections.intellectualProperty ? "▼" : "▶"}
        </SectionTitle>
        {openSections.intellectualProperty && (
          <SectionContent>
            <Subtitle>a. Automatic Transfer of Ownership</Subtitle>
            <Paragraph>
              When a Seller (whether registered or unregistered) sells digital
              artwork to ArtiumHive, they automatically and irrevocably transfer
              full ownership, rights to sell, distribute, modify, and use the
              artwork without requiring a separate written agreement, contract,
              or digital signature.
            </Paragraph>
            <Paragraph>
              Once payment is made, ArtiumHive becomes the sole and exclusive
              owner of the artwork. The Seller forfeits all rights, including:
            </Paragraph>
            <List>
              <ListItem>The right to resell the artwork.</ListItem>
              <ListItem>
                The right to reproduce or distribute the artwork.
              </ListItem>
              <ListItem>Any future claims to ownership.</ListItem>
            </List>

            <Subtitle>b. Rights of Buyers</Subtitle>
            <Paragraph>
              When a Buyer completes payment under the Layaway Plan or a direct
              purchase, they receive a digital print of the artwork.
            </Paragraph>
            <Paragraph>
              The Buyer’s rights are limited to personal use only, unless
              otherwise stated in the product description.
            </Paragraph>
            <Paragraph>Buyers may not:</Paragraph>
            <List>
              <ListItem>
                Resell, redistribute, or reproduce the artwork for commercial
                purposes.
              </ListItem>
              <ListItem>Claim authorship of the artwork.</ListItem>
              <ListItem>
                Modify or alter the artwork without prior written consent from
                ArtiumHive.
              </ListItem>
            </List>

            <Subtitle>c. Prohibited Use of Intellectual Property</Subtitle>
            <Paragraph>
              No User may use ArtiumHive's name, logo, trademarks, or content
              without prior written permission.
            </Paragraph>
            <Paragraph>
              Unauthorized use of ArtiumHive’s intellectual property will result
              in legal action.
            </Paragraph>

            <Subtitle>
              d. Infringement, Brand Damage, and Legal Consequences
            </Subtitle>
            <Paragraph>
              If a Seller provides stolen, copied, or non-original artwork, they
              will be fully liable for any legal claims, damages, and costs
              incurred by ArtiumHive.
            </Paragraph>
            <Paragraph>
              The Seller must fully reimburse ArtiumHive for any financial or
              reputational damage caused due to fraudulent artwork submissions,
              including:
            </Paragraph>
            <List>
              <ListItem>
                Legal fees, penalties, and compensation costs.
              </ListItem>
              <ListItem>
                Loss of revenue resulting from disputes or takedowns.
              </ListItem>
              <ListItem>
                Damage to ArtiumHive’s brand reputation, including public
                relations or legal consequences.
              </ListItem>
            </List>
            <Paragraph>
              ArtiumHive reserves the right to take legal action against any
              individual or entity that infringes on its intellectual property
              rights.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => toggleSection("paymentsTransactions")}>
          7. Payments & Transactions{" "}
          {openSections.paymentsTransactions ? "▼" : "▶"}
        </SectionTitle>
        {openSections.paymentsTransactions && (
          <SectionContent>
            <Subtitle>a. Payments & Pricing</Subtitle>
            <Paragraph>
              Buyers must pay the full listed price for digital artwork before
              receiving the final digital print.
            </Paragraph>
            <Paragraph>
              Prices are non-negotiable, and ArtiumHive reserves the right to
              change prices at any time without prior notice.
            </Paragraph>
            <Paragraph>
              Payments must be made using approved payment methods listed on the
              platform.
            </Paragraph>

            <Subtitle>b. No Refund, No Cancellation Policy</Subtitle>
            <Paragraph>
              All sales on ArtiumHive are final. Once a Buyer completes a
              purchase, there are NO refunds, cancellations, exchanges, or
              modifications under any circumstances.
            </Paragraph>
            <Paragraph>
              As digital artwork is instantly accessible after payment,
              ArtiumHive does not offer replacements or alternative products for
              any reason.
            </Paragraph>
            <Paragraph>
              Buyers are responsible for carefully reviewing the artwork before
              making a purchase.
            </Paragraph>

            <Subtitle>
              c. Layaway Plan Transactions & Deposit Transfers
            </Subtitle>
            <Paragraph>
              Buyers who purchase artwork using the Layaway Plan must follow the
              terms outlined in Section 5.
            </Paragraph>
            <Paragraph>
              Deposits made under the Layaway Plan are strictly non-refundable
              under all circumstances.
            </Paragraph>
            <Paragraph>
              However, if the reservation is still active (i.e., has not been
              canceled due to non-payment), ArtiumHive may allow the deposit to
              be transferred to another artwork at the Buyer’s request.
            </Paragraph>
            <Paragraph>
              If a Buyer fails to make payments for 3 consecutive days,
              ArtiumHive has the right to cancel the reservation, and any prior
              deposits will be forfeited without the possibility of transfer or
              refund.
            </Paragraph>
            <Paragraph>
              If a Buyer fails to complete the full payment within one (1) year,
              all deposits are non-refundable, and the artwork will be relisted
              for sale.
            </Paragraph>

            <Subtitle>d. Seller Payments & Rights Transfer</Subtitle>
            <Paragraph>
              Once ArtiumHive purchases artwork from a Seller, payment will be
              processed upon successful verification and completion of the sale.
            </Paragraph>
            <Paragraph>
              After receiving payment, the Seller automatically transfers full
              ownership rights to ArtiumHive as per Section 6 (Intellectual
              Property Rights).
            </Paragraph>
            <Paragraph>
              Sellers cannot request additional payments, royalties, or
              ownership claims after the transaction is completed.
            </Paragraph>

            <Subtitle>e. Fraudulent Transactions & Chargebacks</Subtitle>
            <Paragraph>
              ArtiumHive reserves the right to investigate any suspicious
              transactions and take legal action against fraudulent Buyers or
              Sellers.
            </Paragraph>
            <Paragraph>
              Chargebacks, payment disputes, or unauthorized refund requests
              will result in immediate account suspension and legal action if
              necessary.
            </Paragraph>
            <Paragraph>
              If a Buyer issues a fraudulent chargeback, ArtiumHive reserves the
              right to recover losses and report the Buyer to payment
              authorities.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      {/* ---------------------------from 8th------------------- */}
      <Section>
        <SectionTitle onClick={() => toggleSection("prohibitedActivities")}>
          8. Prohibited Activities{" "}
          {openSections.prohibitedActivities ? "▼" : "▶"}
        </SectionTitle>
        {openSections.prohibitedActivities && (
          <SectionContent>
            <Paragraph>
              To ensure a fair and secure environment, ArtiumHive strictly
              prohibits the following actions by any User (Buyers, Sellers, or
              Visitors):
            </Paragraph>

            <Subtitle>a. Fraudulent Activities & Misrepresentation</Subtitle>
            <Paragraph>
              Providing false, misleading, or fraudulent information during
              registration, transactions, or communication with ArtiumHive.
            </Paragraph>
            <Paragraph>
              Selling stolen, copied, or unauthorized digital artwork—violators
              will bear full legal and financial responsibility (see Section 6 –
              Intellectual Property Rights).
            </Paragraph>
            <Paragraph>
              Using fake accounts, impersonating others, or submitting false
              identity verification to gain unauthorized access to the platform.
            </Paragraph>
            <Paragraph>
              Initiating fraudulent chargebacks or unnecessary payment disputes
              after purchasing artwork.
            </Paragraph>

            <Subtitle>
              b. Violation of Intellectual Property & Ownership Rights
            </Subtitle>
            <Paragraph>
              Reselling, redistributing, or reproducing digital artwork in
              violation of ArtiumHive’s policies.
            </Paragraph>
            <Paragraph>
              Attempting to modify, claim authorship, or commercially exploit
              artwork without explicit authorization from ArtiumHive.
            </Paragraph>
            <Paragraph>
              Attempting to repurchase and resell artwork that was previously
              sold to ArtiumHive, without proper authorization.
            </Paragraph>

            <Subtitle>
              c. Payment Manipulation & Layaway Plan Violations
            </Subtitle>
            <Paragraph>
              Intentionally delaying Layaway Plan payments while continuing to
              reserve artwork unfairly.
            </Paragraph>
            <Paragraph>
              Depositing funds with the intention of refund abuse, knowing
              refunds are not permitted.
            </Paragraph>
            <Paragraph>
              Attempting to transfer deposits to another artwork after a
              reservation has been canceled due to non-payment.
            </Paragraph>

            <Subtitle>d. Malicious Behavior & Security Violations</Subtitle>
            <Paragraph>
              Engaging in harassment, threats, hate speech, or abusive behavior
              toward other users or the ArtiumHive team.
            </Paragraph>
            <Paragraph>
              Uploading or sharing malicious software, viruses, or any
              unauthorized scripts that could harm the platform.
            </Paragraph>
            <Paragraph>
              Attempting to hack, manipulate, or disrupt ArtiumHive’s systems,
              databases, or payment processing.
            </Paragraph>

            <Subtitle>
              e. Unauthorized Commercial & Marketing Activities
            </Subtitle>
            <Paragraph>
              Using ArtiumHive to advertise, promote, or sell non-approved
              services, products, or competing platforms.
            </Paragraph>
            <Paragraph>
              Spamming, phishing, or engaging in unauthorized solicitation of
              users.
            </Paragraph>

            <Subtitle>f. Fraudulent Chargebacks & Payment Disputes</Subtitle>
            <Paragraph>
              Any Buyer who initiates a fraudulent or unnecessary chargeback to
              dispute a legitimate transaction must reimburse ArtiumHive for any
              financial or reputational damage caused.
            </Paragraph>
            <Paragraph>
              The Buyer must pay back 10 times the disputed amount as
              compensation for the trouble caused.
            </Paragraph>
            <Paragraph>
              Failure to pay will result in immediate legal action, account
              blacklisting, and possible debt collection measures.
            </Paragraph>

            <Subtitle>
              g. Consequences of Violating Prohibited Activities
            </Subtitle>
            <Paragraph>
              Any User found engaging in prohibited activities may face the
              following actions:
            </Paragraph>
            <List>
              <ListItem>
                Immediate account suspension or termination (if applicable).
              </ListItem>
              <ListItem>
                Legal action for fraudulent activities, intellectual property
                violations, or financial harm.
              </ListItem>
              <ListItem>
                Blacklist from future transactions or partnerships with
                ArtiumHive.
              </ListItem>
              <ListItem>
                Financial penalties or reimbursement for damages caused to
                ArtiumHive.
              </ListItem>
              <ListItem>
                Reporting to law enforcement authorities if criminal activity is
                suspected.
              </ListItem>
            </List>
          </SectionContent>
        )}
      </Section>

      {/* Section 9: Dispute Resolution */}
      <Section>
        <SectionTitle onClick={() => toggleSection("disputeResolution")}>
          9. Dispute Resolution {openSections.disputeResolution ? "▼" : "▶"}
        </SectionTitle>
        {openSections.disputeResolution && (
          <SectionContent>
            <Paragraph>
              At ArtiumHive, we strive to maintain a transparent and fair
              marketplace. However, in the event of a dispute between ArtiumHive
              and a User (whether a Seller or Buyer), the following resolution
              process will apply:
            </Paragraph>

            <Subtitle>a. Internal Resolution First</Subtitle>
            <Paragraph>
              Before taking legal action, Users must first attempt to resolve
              disputes by contacting ArtiumHive’s support team via official
              communication channels.
            </Paragraph>
            <Paragraph>
              ArtiumHive will review the complaint within 10 business days and
              attempt to reach a fair resolution.
            </Paragraph>
            <Paragraph>
              Users must provide all relevant details and supporting evidence
              when submitting a dispute.
            </Paragraph>

            <Subtitle>b. Arbitration & Mediation</Subtitle>
            <Paragraph>
              If a dispute cannot be resolved through internal negotiation, both
              parties agree to seek mediation or arbitration before resorting to
              legal action.
            </Paragraph>
            <Paragraph>
              Arbitration will take place in India, and both parties will bear
              their own legal costs unless otherwise determined by the
              arbitrator.
            </Paragraph>

            <Subtitle>c. Governing Law</Subtitle>
            <Paragraph>
              These Terms & Conditions and any disputes arising from them will
              be governed by the laws of India, without regard to conflict of
              law principles.
            </Paragraph>

            <Subtitle>d. No Class Actions</Subtitle>
            <Paragraph>
              Users agree to resolve disputes on an individual basis.
            </Paragraph>
            <Paragraph>
              No User may file or participate in class-action lawsuits, joint
              claims, or collective proceedings against ArtiumHive.
            </Paragraph>

            <Subtitle>e. Fraudulent Disputes & Consequences</Subtitle>
            <Paragraph>
              Any attempt to file a false dispute, engage in bad faith claims,
              or abuse the dispute process will result in:
            </Paragraph>
            <List>
              <ListItem>
                Immediate account termination (if applicable).
              </ListItem>
              <ListItem>Financial penalties for damages incurred.</ListItem>
              <ListItem>Legal action to recover financial losses.</ListItem>
            </List>
          </SectionContent>
        )}
      </Section>

      {/* Section 10: Termination & Suspension */}
      <Section>
        <SectionTitle onClick={() => toggleSection("terminationSuspension")}>
          10. Termination & Suspension{" "}
          {openSections.terminationSuspension ? "▼" : "▶"}
        </SectionTitle>
        {openSections.terminationSuspension && (
          <SectionContent>
            <Subtitle>a. Voluntary Account Termination by Users</Subtitle>
            <Paragraph>
              Users may request to delete their account by contacting
              ArtiumHive’s support team.
            </Paragraph>
            <Paragraph>
              Any pending transactions must be completed before the account can
              be deleted.
            </Paragraph>
            <Paragraph>
              No refunds, reversals, or transfer of purchases will be granted
              upon account termination.
            </Paragraph>

            <Subtitle>b. Termination & Suspension by ArtiumHive</Subtitle>
            <Paragraph>
              ArtiumHive reserves the right to suspend or terminate a User’s
              account without prior notice if they:
            </Paragraph>
            <List>
              <ListItem>
                Violate any Terms & Conditions outlined in this agreement.
              </ListItem>
              <ListItem>
                Engage in fraudulent activities, chargebacks, or unauthorized
                payment disputes (see Section 8).
              </ListItem>
              <ListItem>
                Provide false, misleading, or fraudulent information at any
                stage.
              </ListItem>
              <ListItem>
                Sell stolen, copied, or unauthorized artwork (see Section 6 –
                Intellectual Property Rights).
              </ListItem>
              <ListItem>
                Fail to make payments on their Layaway Plan for 3 consecutive
                days, leading to automatic cancellation.
              </ListItem>
              <ListItem>
                Harass, threaten, or abuse other users or ArtiumHive staff (see
                Section 8 – Prohibited Activities).
              </ListItem>
              <ListItem>
                Attempt to hack, manipulate, or disrupt the platform's
                operations.
              </ListItem>
              <ListItem>
                Engage in any illegal activity on or through the platform.
              </ListItem>
            </List>

            <Subtitle>c. Consequences of Termination & Suspension</Subtitle>
            <Paragraph>
              If a User’s account is suspended or terminated:
            </Paragraph>
            <List>
              <ListItem>
                They lose access to their account and all associated
                transactions.
              </ListItem>
              <ListItem>
                They forfeit any ongoing Layaway Plan deposits or reservations.
              </ListItem>
              <ListItem>
                Sellers lose any claims to artwork sold to ArtiumHive.
              </ListItem>
              <ListItem>
                ArtiumHive reserves the right to pursue legal action or
                financial penalties if damages occur.
              </ListItem>
              <ListItem>
                Reinstatement of accounts is at ArtiumHive’s sole discretion and
                is not guaranteed.
              </ListItem>
            </List>
          </SectionContent>
        )}
      </Section>

      {/* Section 11: Limitation of Liability */}
      <Section>
        <SectionTitle onClick={() => toggleSection("limitationLiability")}>
          11. Limitation of Liability{" "}
          {openSections.limitationLiability ? "▼" : "▶"}
        </SectionTitle>
        {openSections.limitationLiability && (
          <SectionContent>
            <Subtitle>a. General Liability Disclaimer</Subtitle>
            <Paragraph>
              ArtiumHive provides its platform "as is" and "as available"
              without any warranties, guarantees, or representations regarding
              uninterrupted service, accuracy, or reliability.
            </Paragraph>
            <Paragraph>
              ArtiumHive is not responsible for any losses, damages, or
              liabilities arising from:
            </Paragraph>
            <List>
              <ListItem>
                User errors, misuse, or unauthorized access to accounts.
              </ListItem>
              <ListItem>
                Technical issues, service disruptions, or cyber-attacks
                affecting platform performance.
              </ListItem>
              <ListItem>
                Loss of data or digital artwork due to unforeseen circumstances.
              </ListItem>
              <ListItem>
                Third-party payment processing errors, delays, or security
                breaches.
              </ListItem>
            </List>

            <Subtitle>b. Financial & Transactional Risks</Subtitle>
            <Paragraph>
              ArtiumHive is not liable for financial losses due to fraudulent
              chargebacks, unauthorized transactions, or user mistakes in
              payment processing.
            </Paragraph>
            <Paragraph>
              Users are responsible for their own financial security, including
              safeguarding payment details and complying with transaction
              policies.
            </Paragraph>
            <Paragraph>
              No compensation, refunds, or reimbursement will be issued for
              losses due to fraudulent disputes or non-compliance with platform
              policies.
            </Paragraph>

            <Subtitle>c. No Guarantee of Sales or Revenue</Subtitle>
            <Paragraph>
              ArtiumHive does not guarantee sales, exposure, or profit for
              Sellers listing their artwork.
            </Paragraph>
            <Paragraph>
              ArtiumHive is not responsible for market demand, fluctuations in
              artwork value, or changes in purchasing behavior.
            </Paragraph>

            <Subtitle>d. Third-Party Services & External Links</Subtitle>
            <Paragraph>
              ArtiumHive may contain links to third-party websites, services, or
              payment processors.
            </Paragraph>
            <Paragraph>
              ArtiumHive is not responsible for third-party actions, policies,
              or security breaches that occur outside the platform.
            </Paragraph>
            <Paragraph>
              Users should review third-party terms & conditions separately
              before engaging with external services.
            </Paragraph>

            <Subtitle>e. Maximum Liability Cap</Subtitle>
            <Paragraph>
              In no event shall ArtiumHive’s liability exceed the total amount
              paid by the User for a specific transaction, if applicable.
            </Paragraph>
            <Paragraph>
              ArtiumHive shall not be liable for indirect, incidental, punitive,
              or consequential damages under any circumstances.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      {/* Section 12: Governing Law */}
      <Section>
        <SectionTitle onClick={() => toggleSection("governingLaw")}>
          12. Governing Law {openSections.governingLaw ? "▼" : "▶"}
        </SectionTitle>
        {openSections.governingLaw && (
          <SectionContent>
            <Paragraph>
              These Terms & Conditions are governed by and interpreted in
              accordance with the laws of India, without regard to conflict of
              law principles.
            </Paragraph>
            <Paragraph>
              Any legal disputes, claims, or proceedings arising from the use of
              ArtiumHive shall be exclusively handled within the courts of
              India.
            </Paragraph>
            <Paragraph>
              Users agree to submit to the exclusive jurisdiction of Indian
              courts in the event of any legal disputes with ArtiumHive.
            </Paragraph>
            <Paragraph>
              If any provision of these Terms & Conditions is found to be
              unenforceable or invalid, the remaining provisions shall remain in
              full force and effect.
            </Paragraph>
            <Paragraph>
              Failure to enforce any right or provision of these Terms shall not
              constitute a waiver of that right or provision.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      {/* Section 13: Changes to Terms & Conditions */}
      <Section>
        <SectionTitle onClick={() => toggleSection("changesToTermsConditions")}>
          13. Changes to Terms & Conditions{" "}
          {openSections.changesToTermsConditions ? "▼" : "▶"}
        </SectionTitle>
        {openSections.changesToTermsConditions && (
          <SectionContent>
            <Paragraph>
              ArtiumHive reserves the right to modify, update, or amend these
              Terms & Conditions at any time, at its sole discretion.
            </Paragraph>
            <Paragraph>
              Any changes to these Terms will become effective immediately upon
              posting on the platform, unless stated otherwise.
            </Paragraph>
            <Paragraph>
              Users will NOT be notified of changes. It is their sole
              responsibility to review these Terms periodically.
            </Paragraph>
            <Paragraph>
              Continued use of ArtiumHive after updates are made constitutes
              acceptance of the new Terms.
            </Paragraph>
            <Paragraph>
              Failure to enforce any right or provision of these Terms shall not
              constitute a waiver of that right or provision.
            </Paragraph>
          </SectionContent>
        )}
      </Section>

      {/* Section 14: Contact Information */}
      <Section>
        <SectionTitle onClick={() => toggleSection("contactInformation")}>
          14. Contact Information {openSections.contactInformation ? "▼" : "▶"}
        </SectionTitle>
        {openSections.contactInformation && (
          <SectionContent>
            <Paragraph>
              For any questions, concerns, or support inquiries regarding these
              Terms & Conditions, Users may contact Maya Incorporation
              (operating as ArtiumHive) through the following official channels:
            </Paragraph>
            {/* <ContactList> */}
            {/* <ContactListItem> */}
            <Paragraph></Paragraph>
            📧 Email: contact@artiumhive.art
            {/* </ContactListItem> */}
            {/* <ContactListItem> */}
            <Paragraph></Paragraph>
            🌍 Website: https://artiumhive.art
            {/* </ContactListItem> */}
            {/* </ContactList> */}
            <Paragraph>
              Maya Incorporation (ArtiumHive) will only respond to inquiries
              submitted through official channels.
            </Paragraph>
            <Paragraph>
              Unauthorized requests, spam, or fraudulent communications will be
              ignored and may result in legal action.
            </Paragraph>
          </SectionContent>
        )}
      </Section>
    </TermsContainer>
  );
}
