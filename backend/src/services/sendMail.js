import asyncHandler from "../utils/asyncHandler.js";
import nodemailer from 'nodemailer';
// const email = process.env.EMAIL_ADDRESS;
// const password = process.env.EMAIL_SMTP_PASSWORD;

const sendMail = async (email, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            // secure: true,
            port: 465,
            auth: {
                type: 'login',
                user: process.env.EMAIL_ADDRESS, // replace with your email
                pass: process.env.EMAIL_SMTP_PASSWORD,  // replace with your email password
            },
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL_ADDRESS,
            to: email,
            subject,
            html,
        });

        if (!info) {
            console.log("Error sending mail");
        }
        console.log("Mail sent" + info.messageId);
    } catch (error) {
        console.log(error);
    }
};

export default sendMail;