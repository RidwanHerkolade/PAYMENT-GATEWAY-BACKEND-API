const PAYSTACK_API_URL =
  "https://api.paystack.co";

const secretKey = process.env.PAYSTACK_SECRET_KEY;

if (!secretKey) {
  throw new Error("PAYSTACK_SECRET_KEY is not defined");
}

type InitializePaymentInput = {
  email: string;
  amount: number;
  reference: string;
};

type PaystackInitializeResponse = {
  status: boolean;
  message: string;
  data?: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
};

export async function initializePaystackTransaction(
  input: InitializePaymentInput,
) {
  const response = await fetch(
    `${PAYSTACK_API_URL}/transaction/initialize`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        amount: input.amount,
        reference: input.reference,
        currency: "NGN",
      }),
    },
  );
  
  const data =
    (await response.json()) as PaystackInitializeResponse;

  if (!response.ok || !data.status || !data.data) {
    throw new Error(
      data.message || "Paystack initialization failed",
    );
  }

  return data.data;
}

type PaystackVerifyResponse = {
  status: boolean;
  message: string;
  data?: {
    status: string;
    reference: string;
    amount: number;
    currency: string;
    paid_at: string | null;
  };
};

export async function verifyPaystackTransaction(
  reference: string,
) {
  const response = await fetch(
    `${PAYSTACK_API_URL}/transaction/verify/${encodeURIComponent(reference)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    },
  );

  const data =
    (await response.json()) as PaystackVerifyResponse;

  if (!response.ok || !data.status || !data.data) {
    throw new Error(
      data.message || "Paystack verification failed",
    );
  }

  return data.data;
}