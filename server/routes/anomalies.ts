import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function anomalyRoutes(fastify: FastifyInstance) {
  // GET /api/anomalies - Fetch detected anomalies
  fastify.get('/api/anomalies', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
            ap.PATTERN_ID,
            ap.STUDENT_ID,
            s.FIRST_NAME || ' ' || s.LAST_NAME AS STUDENT_NAME,
            ap.PATTERN_TYPE,
            ap.DESCRIPTION,
            ap.SEVERITY,
            ap.DETECTION_DATE,
            ap.IS_RESOLVED
        FROM ANOMALY_PATTERNS ap
        JOIN STUDENTS s ON ap.STUDENT_ID = s.STUDENT_ID
        ORDER BY ap.DETECTION_DATE DESC, ap.SEVERITY
      `);
      
      return { anomalies: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch anomalies' });
    }
  });
}
