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

  // POST /api/anomalies/detect - Scan existing data and generate anomalies
  fastify.post('/api/anomalies/detect', async (request, reply) => {
    try {
      let detected = 0;

      // 1. Detect students with high absences (>=5) who don't already have an unresolved anomaly
      const highAbsence = await query(`
        SELECT s.STUDENT_ID, s.FIRST_NAME, s.LAST_NAME, s.ABSENCE_COUNT
        FROM STUDENTS s
        WHERE s.ABSENCE_COUNT >= 5
        AND NOT EXISTS (
          SELECT 1 FROM ANOMALY_PATTERNS ap
          WHERE ap.STUDENT_ID = s.STUDENT_ID
          AND ap.PATTERN_TYPE = 'HIGH_ABSENCE_COUNT'
          AND ap.IS_RESOLVED = 0
        )
      `);
      for (const row of (highAbsence.rows || [])) {
        const severity = row.ABSENCE_COUNT >= 10 ? 'CRITICAL' : row.ABSENCE_COUNT >= 7 ? 'HIGH' : 'MEDIUM';
        await query(
          `INSERT INTO ANOMALY_PATTERNS (STUDENT_ID, PATTERN_TYPE, DESCRIPTION, SEVERITY)
           VALUES (:1, 'HIGH_ABSENCE_COUNT', :2, :3)`,
          [
            row.STUDENT_ID,
            row.FIRST_NAME + ' ' + row.LAST_NAME + ' has ' + row.ABSENCE_COUNT + ' absences',
            severity,
          ]
        );
        detected++;
      }

      // 2. Detect students with both absences and lates (combined risk)
      const combinedRisk = await query(`
        SELECT s.STUDENT_ID, s.FIRST_NAME, s.LAST_NAME, s.ABSENCE_COUNT, s.LATE_COUNT
        FROM STUDENTS s
        WHERE s.ABSENCE_COUNT >= 3 AND s.LATE_COUNT >= 2
        AND NOT EXISTS (
          SELECT 1 FROM ANOMALY_PATTERNS ap
          WHERE ap.STUDENT_ID = s.STUDENT_ID
          AND ap.PATTERN_TYPE = 'COMBINED_RISK'
          AND ap.IS_RESOLVED = 0
        )
      `);
      for (const row of (combinedRisk.rows || [])) {
        await query(
          `INSERT INTO ANOMALY_PATTERNS (STUDENT_ID, PATTERN_TYPE, DESCRIPTION, SEVERITY)
           VALUES (:1, 'COMBINED_RISK', :2, 'MEDIUM')`,
          [
            row.STUDENT_ID,
            row.FIRST_NAME + ' ' + row.LAST_NAME + ' has ' + row.ABSENCE_COUNT + ' absences and ' + row.LATE_COUNT + ' lates',
          ]
        );
        detected++;
      }

      return { success: true, message: `Detection complete. ${detected} new anomaly pattern(s) created.`, detected };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to detect anomalies' });
    }
  });

  // PUT /api/anomalies/:id/resolve - Resolve an anomaly
  fastify.put<{ Params: { id: string } }>('/api/anomalies/:id/resolve', async (request, reply) => {
    try {
      const patternId = parseInt(request.params.id);
      if (!patternId) return reply.status(400).send({ error: 'Invalid pattern ID' });

      try {
        await query(
          `UPDATE ANOMALY_PATTERNS SET IS_RESOLVED = 1, RESOLVED_DATE = SYSDATE WHERE PATTERN_ID = :id AND IS_RESOLVED = 0`,
          [patternId]
        );
      } catch (e: any) {
        // Fallback if RESOLVED_DATE column doesn't exist yet
        if (e?.message?.includes('RESOLVED_DATE') || e?.errorNum === 904) {
          await query(
            `UPDATE ANOMALY_PATTERNS SET IS_RESOLVED = 1 WHERE PATTERN_ID = :id AND IS_RESOLVED = 0`,
            [patternId]
          );
        } else {
          throw e;
        }
      }

      return { success: true, message: 'Anomaly resolved' };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to resolve anomaly' });
    }
  });
}
