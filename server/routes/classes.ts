import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function classRoutes(fastify: FastifyInstance) {
  fastify.get('/api/classes', async (request, reply) => {
    try {
      const result = await query(`
        SELECT * FROM CLASSES ORDER BY SEMESTER, CLASS_NAME
      `);
      
      return { classes: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch classes' });
    }
  });

  fastify.post<{
    Body: { class_name: string; semester: string }
  }>('/api/classes', async (request, reply) => {
    try {
      const { class_name, semester } = request.body;

      if (!class_name || !semester) {
        return reply.status(400).send({ error: 'Class name and semester are required' });
      }

      await query(
        `INSERT INTO CLASSES (CLASS_NAME, SEMESTER)
         VALUES (:class_name, :semester)`,
        [class_name, semester]
      );

      return { success: true, message: 'Class added successfully' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to add class' });
    }
  });

  fastify.post<{
    Body: { student_id: number; class_id: number }
  }>('/api/classes/enroll', async (request, reply) => {
    try {
      const { student_id, class_id } = request.body;

      if (!student_id || !class_id) {
        return reply.status(400).send({ error: 'Student ID and Class ID are required' });
      }

      await query(
        `INSERT INTO STUDENT_CLASSES (STUDENT_ID, CLASS_ID)
         VALUES (:student_id, :class_id)`,
        [student_id, class_id]
      );

      return { success: true, message: 'Student enrolled successfully' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to enroll student' });
    }
  });

  fastify.delete<{
    Params: { id: string }
  }>('/api/classes/:id', async (request, reply) => {
    try {
      const classId = parseInt(request.params.id);

      if (isNaN(classId)) {
        return reply.status(400).send({ error: 'Invalid class ID' });
      }

      await query(
        `DELETE FROM CLASSES WHERE CLASS_ID = :classId`,
        [classId]
      );

      return { success: true, message: 'Class deleted successfully' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to delete class' });
    }
  });
}
