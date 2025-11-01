import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { initDatabase } from "@/lib/init-db";
import { getUncachableResendClient } from "@/lib/resend-client";

export async function POST(request: Request) {
  try {
    await initDatabase();
    const { name, email, company, message, consent } = await request.json();

    if (!name || !email || !message || consent !== true) {
      return NextResponse.json(
        {
          error:
            "Namn, e-postadress, meddelande och samtycke är obligatoriska.",
        },
        { status: 400 },
      );
    }

    const ipHeader =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "";
    const ipAddress = ipHeader.split(",")[0].trim().slice(0, 45);
    const userAgent = request.headers.get("user-agent") || "";

    await query(
      `INSERT INTO contact_submissions (name, email, company, message, consent, consent_timestamp, created_at, ip_address, user_agent)
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW(), $6, $7)`,
      [name, email, company, message, consent, ipAddress, userAgent],
    );

    const { client, fromEmail } = await getUncachableResendClient();

    await client.emails.send({
      from: fromEmail,
      to: ["info@belleminds.ai"],
      subject: "Nytt meddelande från Belleminds kontaktsida",
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ett fel inträffade. Försök igen." },
      { status: 500 },
    );
  }
}
