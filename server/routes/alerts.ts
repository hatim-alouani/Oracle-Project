import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function alertRoutes(fastify: FastifyInstance) {
  // GET /api/alerts - Fetch all alerts
  fastify.get('/api/alerts', async (request, reply) => {
    try {
      const result = await query(`
        SELECT * FROM ALERTS ORDER BY ALERT_ID
      `);
      
      return { alerts: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch alerts' });
    }
  });

  // GET /api/alerts/active - Fetch active (unresolved) alerts
  fastify.get('/api/alerts/active', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
            a.ALERT_ID,
            a.STUDENT_ID,
            s.FIRST_NAME,
            s.LAST_NAME,
            a.ALERT_TYPE,
            a.MESSAGE,
            a.CREATED_AT
        FROM ALERTS a
        JOIN STUDENTS s ON a.STUDENT_ID = s.STUDENT_ID
        WHERE a.STATUS = 'ACTIVE'
        ORDER BY a.CREATED_AT DESC
      `);
      
      return { alerts: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch active alerts' });
    }
  });
}
