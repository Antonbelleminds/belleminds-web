import { Resend } from "resend";

let connectionSettings: any;

async function getCredentials() {
  // 1️⃣ Försök först hämta nyckel via Replit connector (dev-miljö)
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (hostname && xReplitToken) {
    try {
      connectionSettings = await fetch(
        `https://${hostname}/api/v2/connection?include_secrets=true&connector_names=resend`,
        {
          headers: {
            Accept: "application/json",
            X_REPLIT_TOKEN: xReplitToken,
          },
        },
      )
        .then((res) => res.json())
        .then((data) => data.items?.[0]);
    } catch (err) {
      console.warn("⚠️ Kunde inte läsa Replit connector – använder fallback.");
    }
  }

  // 2️⃣ Production fallback – använd RESEND_API_KEY från miljövariabel
  const apiKey =
    connectionSettings?.settings?.api_key || process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("❌ Resend API key not found (connector + env failed)");
  }

  return {
    apiKey,
    fromEmail: "info@belleminds.ai", // din verifierade adress
  };
}

export async function getUncachableResendClient() {
  const credentials = await getCredentials();
  return {
    client: new Resend(credentials.apiKey),
    fromEmail: credentials.fromEmail,
  };
}
