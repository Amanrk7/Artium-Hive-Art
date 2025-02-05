import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "YOUR_RAZORPAY_KEY_ID",
  key_secret: "YOUR_RAZORPAY_KEY_SECRET",
});

export const processPayment = async (amount, userEmail) => {
  const paymentData = {
    amount: amount * 100, // Amount in paise
    currency: "INR",
    receipt: "receipt#1",
  };

  try {
    const order = await razorpay.orders.create(paymentData);
    console.log("Payment initiated:", order);

    // Send invoice email
    await generateInvoice(userEmail, amount);
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
};
