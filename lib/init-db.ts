import { query } from './db';

export async function initDatabase() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        message TEXT NOT NULL,
        consent BOOLEAN NOT NULL DEFAULT false,
        consent_timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        ip_address VARCHAR(45),
        user_agent TEXT
      );
      
      CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
      CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
    `;

    await query(createTableQuery);
    console.log('Database tables initialized successfully (EU - Azure Frankfurt)');
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}
