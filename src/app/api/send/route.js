import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, topic } = body;

    // --- Basic validation ---
    if (!name || !email || !message || !topic) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // --- Simple sanitization to prevent HTML injection ---
    const sanitize = (str) => String(str).replace(/[<>]/g, "");

    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanMessage = sanitize(message);
    const cleanTopic = sanitize(topic);

    // --- Send email via Resend ---
    const data = await resend.emails.send({
      from: `Website Contact <no-reply@yourdomain.com>`, // <-- Use your verified domain here
      to: [
        "melissa@smrelations.com",
        "melissa@socialrevoltagency.com",
        "mkdey70@gmail.com",
      ],
      reply_to: cleanEmail, // ✅ Replies go to the user
      subject: `New ${cleanTopic} Inquiry from ${cleanName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Topic:</strong> ${cleanTopic}</p>
        <p><strong>Message:</strong><br/>${cleanMessage}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
        data,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      { status: 500 }
    );
  }
}
