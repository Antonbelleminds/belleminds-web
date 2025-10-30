import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { initDatabase } from '@/lib/init-db';

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
      name,
      email,
      timestamp: result.rows[0].created_at,
      consentGiven: consent,
    });

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
    return NextResponse.json(
      { error: 'Ett fel uppstod vid inlämning av formuläret. Försök igen senare.' },
      { status: 500 }
    );
  }
}
