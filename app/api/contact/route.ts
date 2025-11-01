import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { initDatabase } from '@/lib/init-db';
import { getUncachableResendClient } from '@/lib/resend-client';

let dbInitialized = false;

export async function POST(request: Request) {
  try {
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }

    const body = await request.json();
    const { name, email, company, message, consent } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Namn, e-post och meddelande är obligatoriska' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Du måste godkänna GDPR-villkoren för att skicka meddelandet' },
        { status: 400 }
      );
    }

    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const insertQuery = `
      INSERT INTO contact_submissions 
        (name, email, company, message, consent, consent_timestamp, ip_address, user_agent)
      VALUES 
        ($1, $2, $3, $4, $5, NOW(), $6, $7)
      RETURNING id, created_at
    `;

    const result = await query(insertQuery, [
      name,
      email,
      company || null,
      message,
      consent,
      ipAddress,
      userAgent
    ]);

    console.log('Contact form submitted to EU database (Azure Frankfurt):', {
      id: result.rows[0].id,
      timestamp: result.rows[0].created_at,
      consentGiven: consent,
    });

    try {
      const { client, fromEmail } = await getUncachableResendClient();
      
      await client.emails.send({
        from: fromEmail,
        to: 'info@belleminds.ai',
        subject: `Nytt kontaktformulär från ${name}`,
        html: `
          <h2>Nytt meddelande från kontaktformuläret</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          ${company ? `<p><strong>Företag:</strong> ${company}</p>` : ''}
          <p><strong>Meddelande:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Skickat från belleminds.ai kontaktformulär</p>
          <p style="color: #666; font-size: 12px;">Submission ID: ${result.rows[0].id}</p>
        `,
      });

      console.log('Email sent successfully to info@belleminds.ai');
    } catch (emailError) {
      console.error('Failed to send email via Resend:', emailError);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Tack för ditt meddelande! Vi återkommer till dig inom kort.',
        id: result.rows[0].id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form database error:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      DATABASE_URL_exists: !!process.env.DATABASE_URL,
      DATABASE_URL_prefix: process.env.DATABASE_URL?.substring(0, 20) + '...',
    });
    return NextResponse.json(
      { 
        error: 'Ett fel uppstod vid inlämning av formuläret. Försök igen senare.',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      },
      { status: 500 }
    );
  }
}
