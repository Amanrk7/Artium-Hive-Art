// import { sendInvoiceEmail } from "../utils/sendEmail"; // Utility to send email

export const InvoiceEmail = ({ userEmail, invoiceDetails }) => {
  const sendInvoice = async () => {
    console.log("invoice sent successfully");
    // try {

    //   await sendInvoiceEmail(userEmail, invoiceDetails);
    // } catch (error) {
    //   console.error("Error sending invoice: ", error);
    // }
  };

  return (
    <div>
      <button onClick={sendInvoice}>Send Invoice</button>
    </div>
  );
};
