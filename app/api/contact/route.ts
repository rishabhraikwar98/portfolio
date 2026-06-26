import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const htmlBody = `
      <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #0a0a0a; border-radius: 16px;">
        <div style="height: 4px; width: 64px; background: linear-gradient(90deg, #7C3AED, #06B6D4); border-radius: 9999px; margin-bottom: 24px;"></div>
        <h2 style="color: #ffffff; font-size: 20px; margin: 0 0 4px;">New Portfolio Message</h2>
        <p style="color: #a1a1aa; font-size: 13px; margin: 0 0 24px;">Someone reached out through your contact form.</p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 0; border-bottom: 1px solid #27272a;">Name</td>
          </tr>
          <tr>
            <td style="color: #f4f4f5; font-size: 15px; padding: 4px 0 16px;">${name}</td>
          </tr>
          <tr>
            <td style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 0; border-bottom: 1px solid #27272a;">Email</td>
          </tr>
          <tr>
            <td style="color: #06B6D4; font-size: 15px; padding: 4px 0 16px;">${email}</td>
          </tr>
          <tr>
            <td style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 0; border-bottom: 1px solid #27272a;">Message</td>
          </tr>
          <tr>
            <td style="color: #f4f4f5; font-size: 15px; line-height: 1.6; padding: 8px 0;">${message.replace(/\n/g, "<br />")}</td>
          </tr>
        </table>

        <p style="color: #52525b; font-size: 12px; margin-top: 24px; border-top: 1px solid #27272a; padding-top: 16px;">
          Sent from your portfolio contact form. Reply directly to respond to ${name}.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL as string,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}