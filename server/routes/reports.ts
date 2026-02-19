import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function reportRoutes(fastify: FastifyInstance) {
  // GET /api/statistics - Dashboard statistics
  fastify.get('/api/statistics', async (request, reply) => {
    try {
      // Get total students
      const studentsResult = await query('SELECT COUNT(*) as TOTAL FROM STUDENTS');
      const totalStudents = studentsResult.rows?.[0]?.TOTAL || 0;

      // Get active alerts
      const alertsResult = await query(
        `SELECT COUNT(*) as TOTAL FROM ALERTS WHERE STATUS = 'ACTIVE'`
      );
      const activeAlerts = alertsResult.rows?.[0]?.TOTAL || 0;

      // Get at-risk students (students with 5+ absences)
      const riskResult = await query(
        `SELECT COUNT(*) as TOTAL FROM STUDENTS WHERE ABSENCE_COUNT >= 5`
      );
      const atRiskStudents = riskResult.rows?.[0]?.TOTAL || 0;

      // Get recent anomalies if table exists
      let recentAnomalies = [];
      try {
        const anomaliesResult = await query(`
          SELECT 
            PATTERN_ID,
            STUDENT_ID,
            PATTERN_TYPE,
            DESCRIPTION,
            DETECTION_DATE,
            SEVERITY
          FROM ANOMALY_PATTERNS
          WHERE ROWNUM <= 5
          ORDER BY DETECTION_DATE DESC
        `);
        recentAnomalies = anomaliesResult.rows || [];
      } catch (e) {
        // Anomaly table might not exist, that's ok
      }

      return {
        totalStudents,
        activeAlerts,
        atRiskStudents,
        recentAnomalies
      };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch statistics' });
    }
  });

  // GET /api/reports/risk-assessment - Student risk assessment
  fastify.get('/api/reports/risk-assessment', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
          s.STUDENT_ID,
          s.FIRST_NAME,
          s.LAST_NAME,
          s.FIRST_NAME || ' ' || s.LAST_NAME AS FULL_NAME,
          s.ABSENCE_COUNT,
          s.LATE_COUNT,
          (
            SELECT COUNT(*) 
            FROM ALERTS al 
            WHERE al.STUDENT_ID = s.STUDENT_ID 
            AND al.STATUS = 'ACTIVE'
          ) AS ACTIVE_ALERTS,
          CASE 
            WHEN s.ABSENCE_COUNT >= 10 THEN 'CRITICAL'
            WHEN s.ABSENCE_COUNT >= 5 THEN 'HIGH'
            WHEN s.ABSENCE_COUNT >= 3 THEN 'MEDIUM'
            ELSE 'LOW'
          END AS RISK_LEVEL,
          CASE 
            WHEN s.ABSENCE_COUNT >= 10 THEN 1
            WHEN s.ABSENCE_COUNT >= 5 THEN 2
            WHEN s.ABSENCE_COUNT >= 3 THEN 3
            ELSE 4
          END AS RISK_PRIORITY
        FROM STUDENTS s
        ORDER BY RISK_PRIORITY, s.ABSENCE_COUNT DESC
      `);
      
      return { data: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch risk assessment' });
    }
  });

  // GET /api/reports/semester-kpis - Semester KPIs
  fastify.get('/api/reports/semester-kpis', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
          c.CLASS_ID,
          c.CLASS_NAME,
          c.SEMESTER,
          COUNT(DISTINCT sc.STUDENT_ID) AS ENROLLED_STUDENTS,
          COUNT(DISTINCT a.ATTENDANCE_ID) AS TOTAL_SESSIONS,
          SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) AS PRESENT_COUNT,
          SUM(CASE WHEN a.STATUS = 'ABSENT' THEN 1 ELSE 0 END) AS ABSENT_COUNT,
          SUM(CASE WHEN a.STATUS = 'LATE' THEN 1 ELSE 0 END) AS LATE_COUNT,
          ROUND(
            (SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) * 100.0) / 
            NULLIF(COUNT(a.ATTENDANCE_ID), 0),
            2
          ) AS ATTENDANCE_RATE
        FROM CLASSES c
        LEFT JOIN STUDENT_CLASSES sc ON c.CLASS_ID = sc.CLASS_ID
        LEFT JOIN ATTENDANCE a ON c.CLASS_ID = a.CLASS_ID
        GROUP BY c.CLASS_ID, c.CLASS_NAME, c.SEMESTER
        ORDER BY c.SEMESTER, c.CLASS_NAME
      `);
      
      return { data: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch semester KPIs' });
    }
  });

  // GET /api/reports/monthly - Monthly attendance report
  fastify.get<{
    Querystring: { month?: string; student_id?: string; class_id?: string }
  }>('/api/reports/monthly', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
          s.STUDENT_ID,
          s.FIRST_NAME,
          s.LAST_NAME,
          s.FIRST_NAME || ' ' || s.LAST_NAME AS FULL_NAME,
          c.CLASS_NAME,
          TO_CHAR(a.SESSION_DATE, 'YYYY-MM') AS MONTH,
          COUNT(*) AS TOTAL_SESSIONS,
          SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) AS PRESENT_COUNT,
          SUM(CASE WHEN a.STATUS = 'ABSENT' THEN 1 ELSE 0 END) AS ABSENT_COUNT,
          SUM(CASE WHEN a.STATUS = 'LATE' THEN 1 ELSE 0 END) AS LATE_COUNT,
          ROUND(
            (SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) * 100.0) / COUNT(*),
            2
          ) AS ATTENDANCE_RATE
        FROM ATTENDANCE a
        JOIN STUDENTS s ON a.STUDENT_ID = s.STUDENT_ID
        LEFT JOIN CLASSES c ON a.CLASS_ID = c.CLASS_ID
        GROUP BY 
          s.STUDENT_ID,
          s.FIRST_NAME,
          s.LAST_NAME,
          c.CLASS_NAME,
          TO_CHAR(a.SESSION_DATE, 'YYYY-MM')
        ORDER BY MONTH DESC, FULL_NAME
      `);
      
      return { data: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch monthly report' });
    }
  });
}
