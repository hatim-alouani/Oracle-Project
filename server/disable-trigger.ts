import 'dotenv/config';
import { initializePool, query, closePool } from './db';

async function disableTrigger() {
  try {
    await initializePool();
    console.log('Connected to database');

    await query(`ALTER TRIGGER TRG_CONSECUTIVE_ABSENCES DISABLE`);
    console.log('✅ Trigger TRG_CONSECUTIVE_ABSENCES disabled successfully');

    await closePool();
    process.exit(0);
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

disableTrigger();
