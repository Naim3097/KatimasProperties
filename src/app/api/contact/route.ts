import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * Out of the box this validates the submission and returns success. To deliver
 * the message, set CONTACT_WEBHOOK_URL (e.g. a Zapier/Make webhook, or a small
 * email service endpoint) — submissions are forwarded there as JSON. Swap in
 * Resend / Nodemailer / SMTP here if you prefer direct email.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown> | null = null;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data?.name ?? "").trim();
  const email = String(data?.email ?? "").trim();
  const phone = String(data?.phone ?? "").trim();
  const message = String(data?.message ?? "").trim();
  const honeypot = String(data?.company ?? "").trim();

  // Bot caught by honeypot — pretend success, do nothing.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const submission = {
    name,
    email,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch {
      return NextResponse.json(
        { error: "We could not send your message right now. Please try again or email us directly." },
        { status: 502 },
      );
    }
  } else {
    // No delivery configured yet — log so submissions are visible in dev/server logs.
    console.log("[contact] new submission:", submission);
  }

  return NextResponse.json({ ok: true });
}
