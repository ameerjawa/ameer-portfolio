const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    const { name, email, message } = JSON.parse(event.body);

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
      },
  });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "your-receiving-email@example.com", // Your receiving email
            subject: "New Contact Form Submission",
            text: message,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully!" }),
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email." }),
        };
    }
};
