require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "shroteconsultancyservices@gmail.com",
        pass: "euzuirmaurbxmpjm",
    },
});

// Endpoint for Contact Form
app.post("/send-contact-email", (req, res) => {
    const { name, email, phone, project, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: "info@shrote.com", 
        subject: `New Contact Message from ${name}`,
        text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone},
        Project: ${project},
        Subject: ${subject},
        Message: ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending contact email:", error);
            return res.status(500).send(error);
        }
        res.status(200).send("Contact email sent successfully.");
    });
});

// Endpoint for Appointment Form
app.post("/send-appointment-email", (req, res) => {
    const { firstName, email, phone, gender, date, department, comments } = req.body;

    const mailOptions = {
        from: email,
        to: "info@shrote.com", // Replace with your company email
        subject: `New Appointment Request`,
        text: `
        Name: ${firstName}
        Email: ${email}
        Phone: ${phone}
        Gender: ${gender}
        Date: ${date}
        Department: ${department}
        Comments: ${comments}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending appointment email:", error);
            return res.status(500).send("Failed to send appointment email.");
        }
        res.status(200).send("Appointment email sent successfully.");
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
