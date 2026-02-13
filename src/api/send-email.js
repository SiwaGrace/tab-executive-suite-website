export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: name,
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email: process.env.BREVO_RECIPIENT_EMAIL }],
        replyTo: { email: email },
        subject: `New enquiry from ${name}`,
        htmlContent: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: "Email sent successfully" });
    } else {
      const error = await response.json();
      return res.status(400).json({ message: "Failed to send", error });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
}
