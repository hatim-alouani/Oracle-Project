import cron from 'node-cron';
import { query } from './db';

export function setupCronJobs() {
  cron.schedule('0 20 * * *', async () => {
    try {
      console.log('Running daily reset job at 8PM...');
      
      await query('UPDATE STUDENTS SET DAY_CHECK = 0');
      
      console.log('Daily reset completed successfully');
    } catch (error) {
      console.error('Error running daily reset:', error);
    }
  }, {
    timezone: "Africa/Tunis"
  });

  console.log('Cron job scheduled: Daily reset at 8PM');
}
