import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function thresholdRoutes(fastify: FastifyInstance) {
  // GET /api/thresholds - Fetch all alert thresholds
  fastify.get('/api/thresholds', async (request, reply) => {
    try {
      const result = await query(`
        SELECT * FROM ALERT_THRESHOLDS ORDER BY THRESHOLD_ID
      `);
      
      return { thresholds: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch thresholds' });
    }
  });

  // POST /api/thresholds - Create a new threshold
  fastify.post<{
    Body: {
      threshold_type: string;
      threshold_value: number;
      period?: string;
      description?: string;
    }
  }>('/api/thresholds', async (request, reply) => {
    try {
      const { threshold_type, threshold_value, period, description } = request.body;

      if (!threshold_type || threshold_value === undefined) {
        return reply.status(400).send({ error: 'Threshold type and value are required' });
      }

      await query(
        `INSERT INTO ALERT_THRESHOLDS (THRESHOLD_TYPE, THRESHOLD_VALUE, PERIOD, DESCRIPTION)
         VALUES (:threshold_type, :threshold_value, :period, :description)`,
        [threshold_type, threshold_value, period || 'MONTHLY', description || null]
      );

      return { success: true, message: 'Threshold created successfully' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to create threshold' });
    }
  });

  // PUT /api/thresholds/:id - Update a threshold
  fastify.put<{
    Params: { id: string };
    Body: {
      threshold_value?: number;
      period?: string;
      description?: string;
      is_active?: number;
    }
  }>('/api/thresholds/:id', async (request, reply) => {
    try {
      const thresholdId = parseInt(request.params.id);
      if (!thresholdId) return reply.status(400).send({ error: 'Invalid threshold ID' });

      const { threshold_value, period, description, is_active } = request.body;

      await query(
        `UPDATE ALERT_THRESHOLDS 
         SET THRESHOLD_VALUE = NVL(:threshold_value, THRESHOLD_VALUE),
             PERIOD = NVL(:period, PERIOD),
             DESCRIPTION = NVL(:description, DESCRIPTION),
             IS_ACTIVE = NVL(:is_active, IS_ACTIVE),
             UPDATED_DATE = SYSDATE
         WHERE THRESHOLD_ID = :id`,
        [
          threshold_value ?? null,
          period ?? null,
          description ?? null,
          is_active ?? null,
          thresholdId,
        ]
      );

      return { success: true, message: 'Threshold updated successfully' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to update threshold' });
    }
  });

  // DELETE /api/thresholds/:id - Delete a threshold
  fastify.delete<{ Params: { id: string } }>('/api/thresholds/:id', async (request, reply) => {
    try {
      const thresholdId = parseInt(request.params.id);
      if (!thresholdId) return reply.status(400).send({ error: 'Invalid threshold ID' });

      await query('DELETE FROM ALERT_THRESHOLDS WHERE THRESHOLD_ID = :id', [thresholdId]);

      return { success: true, message: 'Threshold deleted successfully' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to delete threshold' });
    }
  });
}
