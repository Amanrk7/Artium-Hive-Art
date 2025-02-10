import React from "react";
import styled from "styled-components";

// Styled Components
const RefundPolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 151px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Phonk Contrast DEMO";
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
      font-family: 'BOLDE';
    letter-spacing: 1.5px;
}
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
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
export function RefundPolicy() {
  return (
    <RefundPolicyContainer>
      <Title>Refund And Layaway Policy</Title>

      <SectionTitle>1. Layaway Plan – How It Works</SectionTitle>
      <Paragraph>
        A buyer can reserve a piece of digital artwork under the Layaway Plan
        for up to one (1) year. Payments can be made at any time, in any amount,
        toward the total price. Once fully paid, the buyer receives the original
        digital print.
      </Paragraph>

      <SectionTitle>2. Non-Refundable & No Reimbursement Policy</SectionTitle>
      <Paragraph>
        If the buyer fails to pay the full price within one year, all payments
        made are non-refundable. No reimbursements are provided under any
        circumstances.
      </Paragraph>

      <SectionTitle>3. Cancellation Due to Non-Payment</SectionTitle>
      <Paragraph>
        If the buyer fails to make any deposits for 3 consecutive days,
        ArtiumHive reserves the right to cancel the reservation and relist the
        artwork. Payments made before cancellation are non-refundable.
      </Paragraph>

      <SectionTitle>4. Transfer of Ownership</SectionTitle>
      <Paragraph>
        The buyer does not own the artwork until full payment is completed.
        ArtiumHive retains full ownership until the transaction is finalized.
      </Paragraph>

      <SectionTitle>5. No Modifications to Layaway Terms</SectionTitle>
      <Paragraph>
        The Layaway Plan operates under strict terms. No exceptions are made for
        refunds, extensions, or alternative payment arrangements.
      </Paragraph>

      <SectionTitle>
        6. Buyer Responsibility & Penalty for Violations
      </SectionTitle>
      <Paragraph>
        Buyers are fully responsible for their actions. Any attempt to violate
        or manipulate policies will result in legal consequences, including a
        penalty of 10x the dispute amount.
      </Paragraph>

      <SectionTitle>7. No Refunds & No Disputes Policy</SectionTitle>
      <Paragraph>
        All transactions on ArtiumHive are final—no refunds, cancellations, or
        exchanges. Disputes or chargebacks will be considered a violation of our
        policy.
      </Paragraph>

      <SectionTitle>8. Policy Updates</SectionTitle>
      <Paragraph>
        ArtiumHive may update this policy at any time. Continued use of the
        platform constitutes acceptance of the updated terms.
      </Paragraph>

      <Paragraph>
        For any questions, contact{" "}
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
    </RefundPolicyContainer>
  );
}
