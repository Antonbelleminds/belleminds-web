import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { initDatabase } from '@/lib/init-db';
import { getUncachableResendClient } from '@/lib/resend-client';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    await initDatabase();
    
    const { name, email, company, message, consent } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Namn, e-post och meddelande är obligatoriska' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Du måste godkänna GDPR-villkoren' },
        { status: 400 }
      );
    }

    const ipHeader = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || '';
    const ipAddress = ipHeader.split(',')[0].trim().slice(0, 45);
    const userAgent = request.headers.get('user-agent') || '';

    // 1. SPARA I DATABASEN (viktigast!)
    const result = await query(
      `INSERT INTO contact_submissions 
        (name, email, company, message, consent, consent_timestamp, created_at, ip_address, user_agent)
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW(), $6, $7)
       RETURNING id, created_at`,
      [name, email, company, message, consent, ipAddress, userAgent]
    );

    console.log('✅ Kontakt sparad i EU-databasen:', {
      id: result.rows[0].id,
      email: email,
    });

    // 2. SKICKA EMAIL (sekundärt - om det misslyckas, data är ändå sparad!)
    try {
      const { client, fromEmail } = await getUncachableResendClient();
      
      await client.emails.send({
        from: fromEmail,
        to: ['info@belleminds.ai'],
        subject: `Nytt meddelande från ${name}`,
        text: `Namn: ${name}\nE-post: ${email}\nFöretag: ${company || 'Ej angivet'}\n\nMeddelande:\n${message}\n\n---\nSubmission ID: ${result.rows[0].id}`,
      });

      console.log('📧 Email skickat till info@belleminds.ai');
    } catch (emailError) {
      console.error('⚠️ Email misslyckades (men data är sparad):', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Tack för ditt meddelande! Vi återkommer till dig inom kort.',
      id: result.rows[0].id
    });

  } catch (error) {
    console.error('❌ Kontaktformulär-fel:', error);
    return NextResponse.json(
      { 
        error: 'Ett fel uppstod. Försök igen senare.',
        details: (error as Error).message
      },
      { status: 500 }
    );
  }
}
