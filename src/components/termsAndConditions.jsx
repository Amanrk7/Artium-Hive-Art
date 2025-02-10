import React, { useState } from "react";

export function TermsAndConditions() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>

      {/* Section 1: Introduction */}
      <div className="section">
        <h2 onClick={() => toggleSection("introduction")}>
          1. Introduction {openSections.introduction ? "▼" : "▶"}
        </h2>
        {openSections.introduction && (
          <div>
            <p>
              Welcome to ArtiumHive! This document sets out the Terms and
              Conditions (“Terms”) on which Maya Incorporation ("ArtiumHive",
              "Platform," "we," "our," or "us") provides you (“You” or “Your”)
              with its Platform [artiumhive.art] (“Platform”).
            </p>
            <p>
              ArtiumHive is a digital marketplace designed to empower artists by
              providing them with a platform to showcase, sell, and distribute
              their digital artwork. Simultaneously, it allows buyers to explore
              and purchase unique digital creations.
            </p>
            <p>
              By accessing, browsing, or using ArtiumHive, you acknowledge that
              you have read, understood, and agreed to be bound by these Terms.
              If you do not agree with any part of these Terms, you must not use
              our platform.
            </p>
            <p>
              We reserve the right to update or modify these Terms at any time.
              Continued use of ArtiumHive after such modifications constitutes
              your acceptance of the new Terms.
            </p>
          </div>
        )}
      </div>

      {/* Section 2: Definitions */}
      <div className="section">
        <h2 onClick={() => toggleSection("definitions")}>
          2. Definitions {openSections.definitions ? "▼" : "▶"}
        </h2>
        {openSections.definitions && (
          <div>
            <ul>
              <li>
                <strong>"Platform"</strong> – Refers to ArtiumHive, including
                its website, mobile applications, and any associated services.
              </li>
              <li>
                <strong>"User"</strong> – Any person who accesses or uses
                ArtiumHive, including Sellers and Buyers.
              </li>
              <li>
                <strong>"Seller"</strong> – A registered User (including Artists
                and Buyers) who sells digital artwork to ArtiumHive for a
                one-time payment. ArtiumHive retains full rights to distribute
                and resell the purchased artwork.
              </li>
              <li>
                <strong>"Buyer"</strong> – A registered User or visitor who
                purchases digital artwork from ArtiumHive.
              </li>
              <li>
                <strong>"Content"</strong> – Any text, images, graphics, digital
                artwork, or other materials displayed on ArtiumHive.
              </li>
              <li>
                <strong>"Digital Artwork"</strong> – Any creative work,
                including but not limited to digital paintings, illustrations,
                photographs, and animations, purchased by ArtiumHive from
                Sellers for resale and distribution.
              </li>
              <li>
                <strong>"Transaction"</strong> – Any purchase or exchange of
                Digital Artwork, either between ArtiumHive and Sellers, or
                between ArtiumHive and Buyers.
              </li>
              <li>
                <strong>"Intellectual Property Rights"</strong> – Legal rights
                related to copyrights, trademarks, and ownership of Digital
                Artwork.
              </li>
              <li>
                <strong>"Prohibited Content"</strong> – Any content that
                violates these Terms, including but not limited to stolen
                artwork, offensive material, or content that infringes on
                intellectual property rights.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Section 3: User Eligibility & Registration */}
      <div className="section">
        <h2 onClick={() => toggleSection("userEligibility")}>
          3. User Eligibility & Registration{" "}
          {openSections.userEligibility ? "▼" : "▶"}
        </h2>
        {openSections.userEligibility && (
          <div>
            <h3>Eligibility</h3>
            <p>
              To use ArtiumHive, you must be at least 18 years old or the legal
              age of majority in your jurisdiction.
            </p>
            <p>
              By using the platform, you confirm that you have the legal
              capacity to enter into agreements and comply with these Terms.
            </p>

            <h3>Account Registration</h3>
            <p>
              Users must create an account to purchase digital artwork from
              ArtiumHive.
            </p>
            <p>
              Sellers who wish to list their artwork directly on ArtiumHive may
              be required to create an account, but not all Sellers will be
              registered users.
            </p>
            <p>
              Many artworks are acquired privately from local artists without
              requiring them to register on the platform. These transactions are
              conducted outside the online platform and are subject to separate
              agreements between ArtiumHive and the artist.
            </p>
            <p>
              During registration, Users must provide accurate, complete, and
              up-to-date information. Failure to do so may result in account
              suspension or termination.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and agree not to share your login details with
              anyone.
            </p>
            <p>
              If you suspect unauthorized access to your account, you must
              notify ArtiumHive immediately.
            </p>

            <h3>Seller Verification & Responsibility</h3>
            <p>
              ArtiumHive acquires digital artwork from both registered and
              unregistered Sellers.
            </p>
            <p>
              ArtiumHive does not guarantee the verification of every Seller’s
              identity or the originality of artwork provided. The
              responsibility to ensure authenticity lies solely with the Seller
              (whether registered or unregistered).
            </p>
            <p>
              Sellers are solely responsible for ensuring that all information
              they provide is truthful and accurate.
            </p>
            <p>
              If a Seller (registered or unregistered) provides false,
              misleading, or fraudulent information, they will bear full legal
              and financial consequences, including:
            </p>
            <ul>
              <li>Liability for any legal claims or fraudulent activities.</li>
              <li>All associated legal fees, penalties, and damages.</li>
              <li>
                Reimbursement to ArtiumHive for any financial or reputational
                harm suffered.
              </li>
              <li>
                Permanent account suspension (if applicable) and potential legal
                action if necessary.
              </li>
            </ul>
            <p>
              If a Seller provides artwork that is not their original creation
              or violates intellectual property rights, they will bear full
              legal and financial consequences, including:
            </p>
            <ul>
              <li>
                Liability for any legal claims or copyright infringement
                actions.
              </li>
              <li>All associated legal fees, penalties, and damages.</li>
              <li>
                Reimbursement to ArtiumHive for any financial or reputational
                damage suffered.
              </li>
              <li>
                Permanent account suspension (if applicable) and legal action if
                necessary.
              </li>
            </ul>
            <p>
              ArtiumHive assumes no liability for losses, damages, or disputes
              arising due to false Seller-provided information or fraudulent
              artwork sales.
            </p>

            <h3>Multiple Accounts</h3>
            <p>
              Users are prohibited from creating multiple accounts for
              fraudulent activities or to bypass platform restrictions. Any such
              behavior may lead to a permanent ban.
            </p>

            <h3>Termination of Account</h3>
            <p>
              ArtiumHive reserves the right to suspend or terminate accounts
              that violate these Terms, engage in fraudulent activities, or fail
              to comply with platform policies.
            </p>
            <p>
              Users may request to delete their account by contacting
              ArtiumHive’s support team. However, any pending transactions must
              be completed before the account is closed.
            </p>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 4: User Responsibilities */}
      <div className="section">
        <h2 onClick={() => toggleSection("userResponsibilities")}>
          4. User Responsibilities{" "}
          {openSections.userResponsibilities ? "▼" : "▶"}
        </h2>
        {openSections.userResponsibilities && (
          <div>
            <p>
              All users of ArtiumHive must adhere to the following
              responsibilities to ensure a fair, secure, and ethical
              marketplace:
            </p>
            <h3>a. General Responsibilities</h3>
            <p>
              Users agree to use ArtiumHive in compliance with these Terms,
              applicable laws, and ethical business practices.
            </p>
            <p>
              Users must not engage in any fraudulent, misleading, or deceptive
              activities on the platform.
            </p>
            <p>
              Users must not attempt to manipulate the platform’s operations,
              pricing, or listings in any unfair manner.
            </p>

            <h3>b. Seller Responsibilities</h3>
            <p>
              Sellers (both registered and unregistered) must only sell artwork
              that they have full rights to.
            </p>
            <p>
              Sellers must not submit stolen, copied, or unauthorized digital
              artwork. Selling non-original artwork or infringing intellectual
              property rights will result in full legal and financial liability
              for the Seller.
            </p>
            <p>
              Sellers agree to fully compensate ArtiumHive for any legal claims,
              fines, or damages caused by fraudulent artwork submissions.
            </p>
            <p>
              Sellers must provide accurate and honest information about their
              digital artwork, including its origin and ownership.
            </p>
            <p>
              If a Seller is found to have provided false or misleading
              information, ArtiumHive reserves the right to blacklist them and
              pursue legal action if necessary.
            </p>

            <h3>c. Buyer Responsibilities</h3>
            <p>
              Buyers agree that all purchases on ArtiumHive are final, and
              refunds or cancellations may not be possible unless explicitly
              stated in a separate policy.
            </p>
            <p>
              Buyers must not misuse or distribute purchased artwork in a way
              that violates ArtiumHive's policies or the original artist’s
              intellectual property rights.
            </p>
            <p>
              Buyers agree to provide accurate payment and contact information
              when making purchases.
            </p>

            <h3>d. Prohibited Conduct</h3>
            <p>Users must not:</p>
            <ul>
              <li>
                Provide false information during registration, transactions, or
                communication with ArtiumHive.
              </li>
              <li>
                Attempt to resell, distribute, or reproduce digital artwork in
                violation of its original licensing terms.
              </li>
              <li>
                Engage in any form of harassment, abuse, or harmful behavior
                towards other users, sellers, or the ArtiumHive team.
              </li>
              <li>
                Upload or share malicious content, including viruses,
                unauthorized scripts, or spam.
              </li>
              <li>
                Use ArtiumHive for illegal activities or to promote unlawful
                conduct.
              </li>
            </ul>

            <h3>e. Consequences of Violating User Responsibilities</h3>
            <p>
              If a user violates any of these responsibilities, ArtiumHive may
              take one or more of the following actions:
            </p>
            <ul>
              <li>Issue a formal warning to the user.</li>
              <li>
                Suspend or permanently terminate the user’s account (if
                applicable).
              </li>
              <li>
                Blacklist the user from future transactions or partnerships.
              </li>
              <li>
                Take legal action against the user for damages, fraud, or
                intellectual property violations.
              </li>
              <li>
                Report the user to law enforcement authorities if applicable.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 5: Layaway Plan Policy */}
      <div className="section">
        <h2 onClick={() => toggleSection("layawayPlan")}>
          5. Layaway Plan Policy {openSections.layawayPlan ? "▼" : "▶"}
        </h2>
        {openSections.layawayPlan && (
          <div>
            <p>
              At ArtiumHive, we believe that everyone deserves to enjoy art. To
              make it easier for art enthusiasts to own the pieces they love, we
              offer a Layaway Plan—a flexible payment method that allows Buyers
              to reserve digital artwork and pay for it over time.
            </p>

            <h3>a. How the Layaway Plan Works</h3>
            <p>
              A Buyer can reserve a piece of digital artwork under the Layaway
              Plan for up to one (1) year.
            </p>
            <p>
              The Buyer can make payments at any time, in any amount, towards
              the total price of the reserved artwork.
            </p>
            <p>
              Once the full purchase price is paid, the Buyer will receive the
              original digital print of the artwork via email or another
              designated digital delivery method.
            </p>

            <h3>b. Non-Refundable & No Reimbursement Policy</h3>
            <p>
              If the Buyer fails to pay the full price within the one-year
              period, all payments made are non-refundable.
            </p>
            <p>
              There will be no reimbursements under any circumstances, as
              ArtiumHive held the artwork exclusively for the Buyer during this
              period, preventing others from purchasing it.
            </p>

            <h3>c. Cancellation Due to Non-Payment</h3>
            <p>
              If the Buyer fails to make any deposits for 3 consecutive days,
              ArtiumHive reserves the right to cancel the reservation and put
              the artwork back up for sale.
            </p>
            <p>Any payments made before cancellation are non-refundable.</p>
            <p>
              ArtiumHive holds full discretion in deciding whether to extend the
              reservation period or reinstate a canceled reservation.
            </p>

            <h3>d. Transfer of Ownership</h3>
            <p>
              The Buyer does not own the artwork until the full payment is
              completed.
            </p>
            <p>
              ArtiumHive retains full ownership and rights to the artwork until
              the final transaction is completed.
            </p>
            <p>
              If the Buyer fails to complete the payment, they forfeit all
              claims to the reserved artwork.
            </p>

            <h3>e. No Modifications to Layaway Terms</h3>
            <p>
              The Layaway Plan operates under strict terms, and no exceptions
              will be made for refunds, extensions, or alternative payment
              arrangements.
            </p>
            <p>
              Buyers are responsible for managing their payments within the
              allowed timeframe.
            </p>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 6: Intellectual Property Rights */}
      <div className="section">
        <h2 onClick={() => toggleSection("intellectualProperty")}>
          6. Intellectual Property Rights{" "}
          {openSections.intellectualProperty ? "▼" : "▶"}
        </h2>
        {openSections.intellectualProperty && (
          <div>
            <h3>a. Automatic Transfer of Ownership</h3>
            <p>
              When a Seller (whether registered or unregistered) sells digital
              artwork to ArtiumHive, they automatically and irrevocably transfer
              full ownership, rights to sell, distribute, modify, and use the
              artwork without requiring a separate written agreement, contract,
              or digital signature.
            </p>
            <p>
              Once payment is made, ArtiumHive becomes the sole and exclusive
              owner of the artwork. The Seller forfeits all rights, including:
            </p>
            <ul>
              <li>The right to resell the artwork.</li>
              <li>The right to reproduce or distribute the artwork.</li>
              <li>Any future claims to ownership.</li>
            </ul>

            <h3>b. Rights of Buyers</h3>
            <p>
              When a Buyer completes payment under the Layaway Plan or a direct
              purchase, they receive a digital print of the artwork.
            </p>
            <p>
              The Buyer’s rights are limited to personal use only, unless
              otherwise stated in the product description.
            </p>
            <p>Buyers may not:</p>
            <ul>
              <li>
                Resell, redistribute, or reproduce the artwork for commercial
                purposes.
              </li>
              <li>Claim authorship of the artwork.</li>
              <li>
                Modify or alter the artwork without prior written consent from
                ArtiumHive.
              </li>
            </ul>

            <h3>c. Prohibited Use of Intellectual Property</h3>
            <p>
              No User may use ArtiumHive's name, logo, trademarks, or content
              without prior written permission.
            </p>
            <p>
              Unauthorized use of ArtiumHive’s intellectual property will result
              in legal action.
            </p>

            <h3>d. Infringement, Brand Damage, and Legal Consequences</h3>
            <p>
              If a Seller provides stolen, copied, or non-original artwork, they
              will be fully liable for any legal claims, damages, and costs
              incurred by ArtiumHive.
            </p>
            <p>
              The Seller must fully reimburse ArtiumHive for any financial or
              reputational damage caused due to fraudulent artwork submissions,
              including:
            </p>
            <ul>
              <li>Legal fees, penalties, and compensation costs.</li>
              <li>Loss of revenue resulting from disputes or takedowns.</li>
              <li>
                Damage to ArtiumHive’s brand reputation, including public
                relations or legal consequences.
              </li>
            </ul>
            <p>
              ArtiumHive reserves the right to take legal action against any
              individual or entity that infringes on its intellectual property
              rights.
            </p>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 7: Payments & Transactions */}
      <div className="section">
        <h2 onClick={() => toggleSection("paymentsTransactions")}>
          7. Payments & Transactions{" "}
          {openSections.paymentsTransactions ? "▼" : "▶"}
        </h2>
        {openSections.paymentsTransactions && (
          <div>
            <h3>a. Payments & Pricing</h3>
            <p>
              Buyers must pay the full listed price for digital artwork before
              receiving the final digital print.
            </p>
            <p>
              Prices are non-negotiable, and ArtiumHive reserves the right to
              change prices at any time without prior notice.
            </p>
            <p>
              Payments must be made using approved payment methods listed on the
              platform.
            </p>

            <h3>b. No Refund, No Cancellation Policy</h3>
            <p>
              All sales on ArtiumHive are final. Once a Buyer completes a
              purchase, there are NO refunds, cancellations, exchanges, or
              modifications under any circumstances.
            </p>
            <p>
              As digital artwork is instantly accessible after payment,
              ArtiumHive does not offer replacements or alternative products for
              any reason.
            </p>
            <p>
              Buyers are responsible for carefully reviewing the artwork before
              making a purchase.
            </p>

            <h3>c. Layaway Plan Transactions & Deposit Transfers</h3>
            <p>
              Buyers who purchase artwork using the Layaway Plan must follow the
              terms outlined in Section 5.
            </p>
            <p>
              Deposits made under the Layaway Plan are strictly non-refundable
              under all circumstances.
            </p>
            <p>
              However, if the reservation is still active (i.e., has not been
              canceled due to non-payment), ArtiumHive may allow the deposit to
              be transferred to another artwork at the Buyer’s request.
            </p>
            <p>
              If a Buyer fails to make payments for 3 consecutive days,
              ArtiumHive has the right to cancel the reservation, and any prior
              deposits will be forfeited without the possibility of transfer or
              refund.
            </p>
            <p>
              If a Buyer fails to complete the full payment within one (1) year,
              all deposits are non-refundable, and the artwork will be relisted
              for sale.
            </p>

            <h3>d. Seller Payments & Rights Transfer</h3>
            <p>
              Once ArtiumHive purchases artwork from a Seller, payment will be
              processed upon successful verification and completion of the sale.
            </p>
            <p>
              After receiving payment, the Seller automatically transfers full
              ownership rights to ArtiumHive as per Section 6 (Intellectual
              Property Rights).
            </p>
            <p>
              Sellers cannot request additional payments, royalties, or
              ownership claims after the transaction is completed.
            </p>

            <h3>e. Fraudulent Transactions & Chargebacks</h3>
            <p>
              ArtiumHive reserves the right to investigate any suspicious
              transactions and take legal action against fraudulent Buyers or
              Sellers.
            </p>
            <p>
              Chargebacks, payment disputes, or unauthorized refund requests
              will result in immediate account suspension and legal action if
              necessary.
            </p>
            <p>
              If a Buyer issues a fraudulent chargeback, ArtiumHive reserves the
              right to recover losses and report the Buyer to payment
              authorities.
            </p>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 8: Prohibited Activities */}
      <div className="section">
        <h2 onClick={() => toggleSection("prohibitedActivities")}>
          8. Prohibited Activities{" "}
          {openSections.prohibitedActivities ? "▼" : "▶"}
        </h2>
        {openSections.prohibitedActivities && (
          <div>
            <p>
              To ensure a fair and secure environment, ArtiumHive strictly
              prohibits the following actions by any User (Buyers, Sellers, or
              Visitors):
            </p>

            <h3>a. Fraudulent Activities & Misrepresentation</h3>
            <p>
              Providing false, misleading, or fraudulent information during
              registration, transactions, or communication with ArtiumHive.
            </p>
            <p>
              Selling stolen, copied, or unauthorized digital artwork—violators
              will bear full legal and financial responsibility (see Section 6 –
              Intellectual Property Rights).
            </p>
            <p>
              Using fake accounts, impersonating others, or submitting false
              identity verification to gain unauthorized access to the platform.
            </p>
            <p>
              Initiating fraudulent chargebacks or unnecessary payment disputes
              after purchasing artwork.
            </p>

            <h3>b. Violation of Intellectual Property & Ownership Rights</h3>
            <p>
              Reselling, redistributing, or reproducing digital artwork in
              violation of ArtiumHive’s policies.
            </p>
            <p>
              Attempting to modify, claim authorship, or commercially exploit
              artwork without explicit authorization from ArtiumHive.
            </p>
            <p>
              Attempting to repurchase and resell artwork that was previously
              sold to ArtiumHive, without proper authorization.
            </p>

            <h3>c. Payment Manipulation & Layaway Plan Violations</h3>
            <p>
              Intentionally delaying Layaway Plan payments while continuing to
              reserve artwork unfairly.
            </p>
            <p>
              Depositing funds with the intention of refund abuse, knowing
              refunds are not permitted.
            </p>
            <p>
              Attempting to transfer deposits to another artwork after a
              reservation has been canceled due to non-payment.
            </p>

            <h3>d. Malicious Behavior & Security Violations</h3>
            <p>
              Engaging in harassment, threats, hate speech, or abusive behavior
              toward other users or the ArtiumHive team.
            </p>
            <p>
              Uploading or sharing malicious software, viruses, or any
              unauthorized scripts that could harm the platform.
            </p>
            <p>
              Attempting to hack, manipulate, or disrupt ArtiumHive’s systems,
              databases, or payment processing.
            </p>

            <h3>e. Unauthorized Commercial & Marketing Activities</h3>
            <p>
              Using ArtiumHive to advertise, promote, or sell non-approved
              services, products, or competing platforms.
            </p>
            <p>
              Spamming, phishing, or engaging in unauthorized solicitation of
              users.
            </p>

            <h3>f. Fraudulent Chargebacks & Payment Disputes</h3>
            <p>
              Any Buyer who initiates a fraudulent or unnecessary chargeback to
              dispute a legitimate transaction must reimburse ArtiumHive for any
              financial or reputational damage caused.
            </p>
            <p>
              The Buyer must pay back 10 times the disputed amount as
              compensation for the trouble caused.
            </p>
            <p>
              Failure to pay will result in immediate legal action, account
              blacklisting, and possible debt collection measures.
            </p>

            <h3>g. Consequences of Violating Prohibited Activities</h3>
            <p>
              Any User found engaging in prohibited activities may face the
              following actions:
            </p>
            <ul>
              <li>
                Immediate account suspension or termination (if applicable).
              </li>
              <li>
                Legal action for fraudulent activities, intellectual property
                violations, or financial harm.
              </li>
              <li>
                Blacklist from future transactions or partnerships with
                ArtiumHive.
              </li>
              <li>
                Financial penalties or reimbursement for damages caused to
                ArtiumHive.
              </li>
              <li>
                Reporting to law enforcement authorities if criminal activity is
                suspected.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 9: Dispute Resolution */}
      <div className="section">
        <h2 onClick={() => toggleSection("disputeResolution")}>
          9. Dispute Resolution {openSections.disputeResolution ? "▼" : "▶"}
        </h2>
        {openSections.disputeResolution && (
          <div>
            <p>
              At ArtiumHive, we strive to maintain a transparent and fair
              marketplace. However, in the event of a dispute between ArtiumHive
              and a User (whether a Seller or Buyer), the following resolution
              process will apply:
            </p>

            <h3>a. Internal Resolution First</h3>
            <p>
              Before taking legal action, Users must first attempt to resolve
              disputes by contacting ArtiumHive’s support team via official
              communication channels.
            </p>
            <p>
              ArtiumHive will review the complaint within 10 business days and
              attempt to reach a fair resolution.
            </p>
            <p>
              Users must provide all relevant details and supporting evidence
              when submitting a dispute.
            </p>

            <h3>b. Arbitration & Mediation</h3>
            <p>
              If a dispute cannot be resolved through internal negotiation, both
              parties agree to seek mediation or arbitration before resorting to
              legal action.
            </p>
            <p>
              Arbitration will take place in India, and both parties will bear
              their own legal costs unless otherwise determined by the
              arbitrator.
            </p>

            <h3>c. Governing Law</h3>
            <p>
              These Terms & Conditions and any disputes arising from them will
              be governed by the laws of India, without regard to conflict of
              law principles.
            </p>

            <h3>d. No Class Actions</h3>
            <p>Users agree to resolve disputes on an individual basis.</p>
            <p>
              No User may file or participate in class-action lawsuits, joint
              claims, or collective proceedings against ArtiumHive.
            </p>

            <h3>e. Fraudulent Disputes & Consequences</h3>
            <p>
              Any attempt to file a false dispute, engage in bad faith claims,
              or abuse the dispute process will result in:
            </p>
            <ul>
              <li>Immediate account termination (if applicable).</li>
              <li>Financial penalties for damages incurred.</li>
              <li>Legal action to recover financial losses.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 10: Termination & Suspension */}
      <div className="section">
        <h2 onClick={() => toggleSection("terminationSuspension")}>
          10. Termination & Suspension{" "}
          {openSections.terminationSuspension ? "▼" : "▶"}
        </h2>
        {openSections.terminationSuspension && (
          <div>
            <h3>a. Voluntary Account Termination by Users</h3>
            <p>
              Users may request to delete their account by contacting
              ArtiumHive’s support team.
            </p>
            <p>
              Any pending transactions must be completed before the account can
              be deleted.
            </p>
            <p>
              No refunds, reversals, or transfer of purchases will be granted
              upon account termination.
            </p>

            <h3>b. Termination & Suspension by ArtiumHive</h3>
            <p>
              ArtiumHive reserves the right to suspend or terminate a User’s
              account without prior notice if they:
            </p>
            <ul>
              <li>
                Violate any Terms & Conditions outlined in this agreement.
              </li>
              <li>
                Engage in fraudulent activities, chargebacks, or unauthorized
                payment disputes (see Section 8).
              </li>
              <li>
                Provide false, misleading, or fraudulent information at any
                stage.
              </li>
              <li>
                Sell stolen, copied, or unauthorized artwork (see Section 6 –
                Intellectual Property Rights).
              </li>
              <li>
                Fail to make payments on their Layaway Plan for 3 consecutive
                days, leading to automatic cancellation.
              </li>
              <li>
                Harass, threaten, or abuse other users or ArtiumHive staff (see
                Section 8 – Prohibited Activities).
              </li>
              <li>
                Attempt to hack, manipulate, or disrupt the platform's
                operations.
              </li>
              <li>
                Engage in any illegal activity on or through the platform.
              </li>
            </ul>

            <h3>c. Consequences of Termination & Suspension</h3>
            <p>If a User’s account is suspended or terminated:</p>
            <ul>
              <li>
                They lose access to their account and all associated
                transactions.
              </li>
              <li>
                They forfeit any ongoing Layaway Plan deposits or reservations.
              </li>
              <li>Sellers lose any claims to artwork sold to ArtiumHive.</li>
              <li>
                ArtiumHive reserves the right to pursue legal action or
                financial penalties if damages occur.
              </li>
              <li>
                Reinstatement of accounts is at ArtiumHive’s sole discretion and
                is not guaranteed.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 11: Limitation of Liability */}
      <div className="section">
        <h2 onClick={() => toggleSection("limitationLiability")}>
          11. Limitation of Liability{" "}
          {openSections.limitationLiability ? "▼" : "▶"}
        </h2>
        {openSections.limitationLiability && (
          <div>
            <h3>a. General Liability Disclaimer</h3>
            <p>
              ArtiumHive provides its platform "as is" and "as available"
              without any warranties, guarantees, or representations regarding
              uninterrupted service, accuracy, or reliability.
            </p>
            <p>
              ArtiumHive is not responsible for any losses, damages, or
              liabilities arising from:
            </p>
            <ul>
              <li>User errors, misuse, or unauthorized access to accounts.</li>
              <li>
                Technical issues, service disruptions, or cyber-attacks
                affecting platform performance.
              </li>
              <li>
                Loss of data or digital artwork due to unforeseen circumstances.
              </li>
              <li>
                Third-party payment processing errors, delays, or security
                breaches.
              </li>
            </ul>

            <h3>b. Financial & Transactional Risks</h3>
            <p>
              ArtiumHive is not liable for financial losses due to fraudulent
              chargebacks, unauthorized transactions, or user mistakes in
              payment processing.
            </p>
            <p>
              Users are responsible for their own financial security, including
              safeguarding payment details and complying with transaction
              policies.
            </p>
            <p>
              No compensation, refunds, or reimbursement will be issued for
              losses due to fraudulent disputes or non-compliance with platform
              policies.
            </p>

            <h3>c. No Guarantee of Sales or Revenue</h3>
            <p>
              ArtiumHive does not guarantee sales, exposure, or profit for
              Sellers listing their artwork.
            </p>
            <p>
              ArtiumHive is not responsible for market demand, fluctuations in
              artwork value, or changes in purchasing behavior.
            </p>

            <h3>d. Third-Party Services & External Links</h3>
            <p>
              ArtiumHive may contain links to third-party websites, services, or
              payment processors.
            </p>
            <p>
              ArtiumHive is not responsible for third-party actions, policies,
              or security breaches that occur outside the platform.
            </p>
            <p>
              Users should review third-party terms & conditions separately
              before engaging with external services.
            </p>

            <h3>e. Maximum Liability Cap</h3>
            <p>
              In no event shall ArtiumHive’s liability exceed the total amount
              paid by the User for a specific transaction, if applicable.
            </p>
            <p>
              ArtiumHive shall not be liable for indirect, incidental, punitive,
              or consequential damages under any circumstances.
            </p>
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 12: Governing Law */}
      <div className="section">
        <h2 onClick={() => toggleSection("governingLaw")}>
          12. Governing Law {openSections.governingLaw ? "▼" : "▶"}
        </h2>
        {openSections.governingLaw && (
          <div>
            <p>
              These Terms & Conditions are governed by and interpreted in
              accordance with the laws of India, without regard to conflict of
              law principles.
            </p>
            <p>
              Any legal disputes, claims, or proceedings arising from the use of
              ArtiumHive shall be exclusively handled within the courts of
              India.
            </p>
            <p>
              Users agree to submit to the exclusive jurisdiction of Indian
              courts in the event of any legal disputes with ArtiumHive.
            </p>
            <p>
              If any provision of these Terms & Conditions is found to be
              unenforceable or invalid, the remaining provisions shall remain in
              full force and effect.{" "}
            </p>
            <p>
              Failure to enforce any right or provision of these Terms shall not
              constitute a waiver of that right or provision.
            </p>{" "}
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 12: Governing Law */}
      <div className="section">
        <h2 onClick={() => toggleSection("changesToTermsConditions")}>
          13. Changes to Terms & Conditions
          {openSections.changesToTermsConditions ? "▼" : "▶"}
        </h2>
        {openSections.changesToTermsConditions && (
          <div>
            <p>
              ArtiumHive reserves the right to modify, update, or amend these
              Terms & Conditions at any time, at its sole discretion.
            </p>
            <p>
              Any changes to these Terms will become effective immediately upon
              posting on the platform, unless stated otherwise.
            </p>
            <p>
              Users will NOT be notified of changes. It is their sole
              responsibility to review these Terms periodically.
            </p>
            <p>
              Continued use of ArtiumHive after updates are made constitutes
              acceptance of the new Terms.
            </p>
            <p>
              Failure to enforce any right or provision of these Terms shall not
              constitute a waiver of that right or provision.
            </p>{" "}
          </div>
        )}
      </div>

      {/* Add more sections as needed */}
      {/* Example: Section 12: Governing Law */}
      <div className="section">
        <h2 onClick={() => toggleSection("contactInformation")}>
          14. Contact Information
          {openSections.contactInformation ? "▼" : "▶"}
        </h2>
        {openSections.contactInformation && (
          <div>
            <p>
              For any questions, concerns, or support inquiries regarding these
              Terms & Conditions, Users may contact Maya Incorporation
              (operating as ArtiumHive) through the following official channels:
              <li>📧 Email: contact@artiumhive.art</li>  
              <li>🌍 Website: https://artiumhive.art</li>
            </p>
            <p>
              Maya Incorporation (ArtiumHive) will only respond to inquiries
              submitted through official channels.
            </p>
            <p>
              Unauthorized requests, spam, or fraudulent communications will be
              ignored and may result in legal action.
            </p>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
