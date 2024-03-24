const KEY = import.meta.env.VITE_PUBLIC_RAZORPAY_KEY_ID;

export const razorpayOptions = {
    key: KEY,
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    notes: {
        address: "42 DP Nagar , Kolkata , West Bengal"
    },
    theme: {
        color: "#3399cc"
    }
}