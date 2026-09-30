import crypto from "node:crypto";

const secret = process.env.PAYSTACK_SECRET_KEY;

if (!secret) {
  throw new Error("PAYSTACK_SECRET_KEY is not defined");
}

const payload = {
  event: "charge.success",
  data: {
    reference: "PAY-704db490-b474-4aab-a78b-f5ea675dad87",
    amount: 500000,
    currency: "NGN",
    paid_at: new Date().toISOString(),
  },
};

const body = JSON.stringify(payload);

const signature = crypto
  .createHmac("sha512", secret)
  .update(body)
  .digest("hex");

const response = await fetch(
  "http://localhost:3000/api/payments/webhook",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-paystack-signature": signature,
    },
    body,
  },
);

console.log("Status:", response.status);
console.log("Response:", await response.text());