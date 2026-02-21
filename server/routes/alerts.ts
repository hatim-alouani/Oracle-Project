import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function alertRoutes(fastify: FastifyInstance) {
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

  fastify.put<{ Params: { id: string } }>('/api/alerts/:id/resolve', async (request, reply) => {
    try {
      const alertId = parseInt(request.params.id);
      if (!alertId) return reply.status(400).send({ error: 'Invalid alert ID' });

      try {
        await query(
          `UPDATE ALERTS SET STATUS = 'RESOLVED', RESOLVED_AT = SYSDATE WHERE ALERT_ID = :id AND STATUS = 'ACTIVE'`,
          [alertId]
        );
      } catch (e: any) {
        if (e?.errorNum === 904) {
          await query(
            `UPDATE ALERTS SET STATUS = 'RESOLVED' WHERE ALERT_ID = :id AND STATUS = 'ACTIVE'`,
            [alertId]
          );
        } else {
          throw e;
        }
      }

      return { success: true, message: 'Alert resolved' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to resolve alert' });
    }
  });

  fastify.put<{ Params: { id: string } }>('/api/alerts/:id/dismiss', async (request, reply) => {
    try {
      const alertId = parseInt(request.params.id);
      if (!alertId) return reply.status(400).send({ error: 'Invalid alert ID' });

      try {
        await query(
          `UPDATE ALERTS SET STATUS = 'DISMISSED', RESOLVED_AT = SYSDATE WHERE ALERT_ID = :id AND STATUS = 'ACTIVE'`,
          [alertId]
        );
      } catch (e: any) {
        if (e?.errorNum === 904) {
          await query(
            `UPDATE ALERTS SET STATUS = 'DISMISSED' WHERE ALERT_ID = :id AND STATUS = 'ACTIVE'`,
            [alertId]
          );
        } else {
          throw e;
        }
      }

      return { success: true, message: 'Alert dismissed' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to dismiss alert' });
    }
  });
}
