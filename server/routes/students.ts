import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function studentRoutes(fastify: FastifyInstance) {
  fastify.get('/api/students', async (request, reply) => {
    try {
      const result = await query(`
        SELECT * FROM STUDENTS ORDER BY student_id
      `);
      
      return { students: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch students' });
    }
  });

  fastify.post<{
    Body: { first_name: string; last_name: string; email?: string }
  }>('/api/students', async (request, reply) => {
    try {
      const { first_name, last_name, email } = request.body;
      
      if (!first_name || !last_name) {
        return reply.status(400).send({ error: 'First name and last name are required' });
      }

      await query(
        `INSERT INTO STUDENTS (FIRST_NAME, LAST_NAME, EMAIL)
         VALUES (:first_name, :last_name, :email)`,
        [first_name, last_name, email || null]
      );

      const result = await query(
        `SELECT student_id, first_name, last_name, email
         FROM students
         WHERE student_id = (SELECT MAX(student_id) FROM students)`
      );

      return { success: true, student: result.rows?.[0] };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to add student' });
    }
  });

  fastify.post<{
    Body: { student_id: number }
  }>('/api/students/remove', async (request, reply) => {
    try {
      const { student_id } = request.body;

      if (!student_id) {
        return reply.status(400).send({ error: 'Student ID is required' });
      }

      await query('DELETE FROM ATTENDANCE WHERE student_id = :student_id', [student_id]);
      
      await query('DELETE FROM ALERTS WHERE student_id = :student_id', [student_id]);
      
      await query('DELETE FROM STUDENT_CLASSES WHERE student_id = :student_id', [student_id]);
      
      try {
        await query('DELETE FROM ANOMALY_PATTERNS WHERE student_id = :student_id', [student_id]);
      } catch (e) {
      }
      
      await query('DELETE FROM STUDENTS WHERE student_id = :student_id', [student_id]);

      return { success: true, message: 'Student removed successfully' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to remove student' });
    }
  });

  fastify.post<{
    Body: { student_id: number; class_id?: number; session_date?: string; status: string }
  }>('/api/attendance/present', async (request, reply) => {
    try {
      const { student_id, class_id } = request.body;

      const updateResult = await query(
        `UPDATE STUDENTS
         SET DAY_CHECK = 1,
             UPDATED_DATE = SYSDATE
         WHERE STUDENT_ID = :student_id
         AND DAY_CHECK = 0`,
        [student_id]
      );

      if (updateResult.rowsAffected === 0) {
        return reply.status(400).send({ 
          error: 'Student already marked for today or student not found' 
        });
      }

      const result = await query(
        `INSERT INTO ATTENDANCE (
           STUDENT_ID,
           SESSION_DATE,
           STATUS,
           CLASS_ID
         ) VALUES (
           :student_id,
           SYSDATE,
           'PRESENT',
           :class_id
         )`,
        [student_id, class_id || null]
      );

      return { success: true, message: 'Marked as present' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to mark attendance' });
    }
  });

  fastify.post<{
    Body: { 
      student_id: number; 
      class_id?: number; 
      session_date?: string; 
      status: string;
      minutes_late?: number;
      reason?: string;
    }
  }>('/api/attendance/late', async (request, reply) => {
    try {
      const { student_id, class_id, minutes_late, reason } = request.body;

      const updateResult = await query(
        `UPDATE STUDENTS
         SET LATE_COUNT = LATE_COUNT + 1,
             DAY_CHECK = 1,
             UPDATED_DATE = SYSDATE
         WHERE STUDENT_ID = :student_id
         AND DAY_CHECK = 0`,
        [student_id]
      );

      if (updateResult.rowsAffected === 0) {
        return reply.status(400).send({ 
          error: 'Student already marked for today or student not found' 
        });
      }

      // Insert attendance record
      await query(
        `INSERT INTO ATTENDANCE (
           STUDENT_ID,
           SESSION_DATE,
           STATUS,
           MINUTES_LATE,
           REASON,
           CLASS_ID
         ) VALUES (
           :student_id,
           SYSDATE,
           'LATE',
           :minutes_late,
           :reason,
           :class_id
         )`,
        [student_id, minutes_late || 1, reason || null, class_id || null]
      );

      return { success: true, message: 'Marked as late' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to mark attendance' });
    }
  });

  fastify.post<{
    Body: { 
      student_id: number; 
      class_id?: number; 
      session_date?: string; 
      status: string;
      reason?: string;
    }
  }>('/api/attendance/absent', async (request, reply) => {
    try {
      const { student_id, class_id, reason } = request.body;

      const updateResult = await query(
        `UPDATE STUDENTS
         SET ABSENCE_COUNT = ABSENCE_COUNT + 1,
             DAY_CHECK = 1,
             UPDATED_DATE = SYSDATE
         WHERE STUDENT_ID = :student_id
         AND DAY_CHECK = 0`,
        [student_id]
      );

      if (updateResult.rowsAffected === 0) {
        return reply.status(400).send({ 
          error: 'Student already marked for today or student not found' 
        });
      }

      // Insert attendance record
      await query(
        `INSERT INTO ATTENDANCE (
           STUDENT_ID,
           SESSION_DATE,
           STATUS,
           REASON,
           CLASS_ID
         ) VALUES (
           :student_id,
           SYSDATE,
           'ABSENT',
           :reason,
           :class_id
         )`,
        [student_id, reason || 'No reason provided', class_id || null]
      );

      return { success: true, message: 'Marked as absent' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to mark attendance' });
    }
  });
}
