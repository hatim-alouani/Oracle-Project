import { FastifyInstance } from 'fastify';
import { query } from '../db';

export async function reportRoutes(fastify: FastifyInstance) {
  fastify.get('/api/statistics', async (request, reply) => {
    try {
      const studentsResult = await query('SELECT COUNT(*) as TOTAL FROM STUDENTS');
      const totalStudents = studentsResult.rows?.[0]?.TOTAL || 0;

      const alertsResult = await query(
        `SELECT COUNT(*) as TOTAL FROM ALERTS WHERE STATUS = 'ACTIVE'`
      );
      const activeAlerts = alertsResult.rows?.[0]?.TOTAL || 0;

      const riskResult = await query(
        `SELECT COUNT(*) as TOTAL FROM STUDENTS WHERE ABSENCE_COUNT >= 5`
      );
      const atRiskStudents = riskResult.rows?.[0]?.TOTAL || 0;

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

  fastify.get('/api/reports/risk-assessment', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
          s.STUDENT_ID,
          s.FIRST_NAME,
          s.LAST_NAME,
          s.FIRST_NAME || ' ' || s.LAST_NAME AS STUDENT_NAME,
          s.EMAIL,
          s.ABSENCE_COUNT,
          s.LATE_COUNT,
          (
            SELECT COUNT(*) 
            FROM ALERTS al 
            WHERE al.STUDENT_ID = s.STUDENT_ID 
            AND al.STATUS = 'ACTIVE'
          ) AS ACTIVE_ALERTS,
          (
            SELECT COUNT(*) 
            FROM ANOMALY_PATTERNS ap 
            WHERE ap.STUDENT_ID = s.STUDENT_ID 
            AND ap.IS_RESOLVED = 0
          ) AS DETECTED_ANOMALIES,
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

  fastify.get('/api/reports/semester-kpis', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
          c.SEMESTER,
          COUNT(DISTINCT sc.STUDENT_ID) AS TOTAL_STUDENTS,
          COUNT(DISTINCT c.CLASS_ID) AS TOTAL_CLASSES,
          ROUND(
            (SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) * 100.0) / 
            NULLIF(COUNT(a.ATTENDANCE_ID), 0),
            2
          ) AS AVG_ATTENDANCE_RATE,
          COUNT(DISTINCT CASE 
            WHEN s.ABSENCE_COUNT >= 5 THEN sc.STUDENT_ID 
          END) AS AT_RISK_STUDENTS,
          COUNT(DISTINCT CASE 
            WHEN (SELECT COUNT(*) FROM ALERTS al WHERE al.STUDENT_ID = sc.STUDENT_ID AND al.STATUS = 'ACTIVE') > 0 
            THEN sc.STUDENT_ID 
          END) AS STUDENTS_WITH_ALERTS
        FROM CLASSES c
        LEFT JOIN STUDENT_CLASSES sc ON c.CLASS_ID = sc.CLASS_ID
        LEFT JOIN STUDENTS s ON sc.STUDENT_ID = s.STUDENT_ID
        LEFT JOIN ATTENDANCE a ON c.CLASS_ID = a.CLASS_ID AND a.STUDENT_ID = sc.STUDENT_ID
        GROUP BY c.SEMESTER
        ORDER BY c.SEMESTER
      `);
      
      return { data: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch semester KPIs' });
    }
  });

  fastify.get('/api/reports/class-attendance', async (request, reply) => {
    try {
      const result = await query(`
        SELECT 
          c.CLASS_ID,
          c.CLASS_NAME,
          c.SEMESTER,
          COUNT(DISTINCT sc.STUDENT_ID) AS ENROLLED_STUDENTS,
          COUNT(a.ATTENDANCE_ID) AS TOTAL_ATTENDANCE_RECORDS,
          SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) AS TOTAL_PRESENT,
          SUM(CASE WHEN a.STATUS = 'LATE' THEN 1 ELSE 0 END) AS TOTAL_LATE,
          SUM(CASE WHEN a.STATUS = 'ABSENT' THEN 1 ELSE 0 END) AS TOTAL_ABSENT,
          ROUND(
            (SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) * 100.0) / 
            NULLIF(COUNT(a.ATTENDANCE_ID), 0),
            2
          ) AS CLASS_ATTENDANCE_RATE
        FROM CLASSES c
        LEFT JOIN STUDENT_CLASSES sc ON c.CLASS_ID = sc.CLASS_ID
        LEFT JOIN ATTENDANCE a ON sc.STUDENT_ID = a.STUDENT_ID AND a.CLASS_ID = c.CLASS_ID
        GROUP BY c.CLASS_ID, c.CLASS_NAME, c.SEMESTER
        ORDER BY c.SEMESTER, c.CLASS_NAME
      `);
      
      return { data: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch class attendance' });
    }
  });

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
          TO_CHAR(a.SESSION_DATE, 'Month YYYY') AS MONTH_NAME,
          COUNT(*) AS TOTAL_DAYS,
          SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) AS DAYS_PRESENT,
          SUM(CASE WHEN a.STATUS = 'ABSENT' THEN 1 ELSE 0 END) AS DAYS_ABSENT,
          SUM(CASE WHEN a.STATUS = 'LATE' THEN 1 ELSE 0 END) AS DAYS_LATE,
          ROUND(
            (SUM(CASE WHEN a.STATUS = 'PRESENT' THEN 1 ELSE 0 END) * 100.0) / COUNT(*),
            2
          ) AS ATTENDANCE_RATE,
          ROUND(
            AVG(CASE WHEN a.STATUS = 'LATE' THEN a.MINUTES_LATE ELSE 0 END),
            2
          ) AS AVG_MINUTES_LATE
        FROM ATTENDANCE a
        JOIN STUDENTS s ON a.STUDENT_ID = s.STUDENT_ID
        LEFT JOIN CLASSES c ON a.CLASS_ID = c.CLASS_ID
        GROUP BY 
          s.STUDENT_ID,
          s.FIRST_NAME,
          s.LAST_NAME,
          c.CLASS_NAME,
          TO_CHAR(a.SESSION_DATE, 'YYYY-MM'),
          TO_CHAR(a.SESSION_DATE, 'Month YYYY')
        ORDER BY MONTH DESC, FULL_NAME
      `);
      
      return { data: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch monthly report' });
    }
  });

  fastify.get<{
    Querystring: { student_id?: string; class_id?: string; limit?: string }
  }>('/api/attendance/history', async (request, reply) => {
    try {
      const { student_id, class_id, limit } = request.query;
      const maxRows = parseInt(limit || '50') || 50;

      let sql = `
        SELECT 
          a.ATTENDANCE_ID,
          a.STUDENT_ID,
          s.FIRST_NAME,
          s.LAST_NAME,
          s.FIRST_NAME || ' ' || s.LAST_NAME AS STUDENT_NAME,
          a.CLASS_ID,
          c.CLASS_NAME,
          a.SESSION_DATE,
          a.STATUS,
          a.MINUTES_LATE,
          a.REASON,
          a.CREATED_DATE
        FROM ATTENDANCE a
        JOIN STUDENTS s ON a.STUDENT_ID = s.STUDENT_ID
        LEFT JOIN CLASSES c ON a.CLASS_ID = c.CLASS_ID
        WHERE 1=1
      `;
      const binds: any[] = [];

      if (student_id) {
        sql += ` AND a.STUDENT_ID = :student_id`;
        binds.push(parseInt(student_id));
      }
      if (class_id) {
        sql += ` AND a.CLASS_ID = :class_id`;
        binds.push(parseInt(class_id));
      }

      sql += ` ORDER BY a.SESSION_DATE DESC, a.CREATED_DATE DESC FETCH FIRST :maxRows ROWS ONLY`;
      binds.push(maxRows);

      const result = await query(sql, binds);
      return { data: result.rows };
    } catch (error: any) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Failed to fetch attendance history' });
    }
  });
}
