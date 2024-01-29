const email = process.env.EMAIL_ADDRESS;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email, // replace with your email
        pass: password,  // replace with your email password
    },
});