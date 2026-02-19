-- Oracle Views for Reporting
-- These views are used by the n8n workflows for analytics and reporting

-- =====================================================
-- V_MONTHLY_ATTENDANCE - Monthly attendance summary
-- =====================================================
CREATE OR REPLACE VIEW V_MONTHLY_ATTENDANCE AS
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
    TO_CHAR(a.SESSION_DATE, 'YYYY-MM');

-- =====================================================
-- V_STUDENT_RISK_ASSESSMENT - Student risk analysis
-- =====================================================
CREATE OR REPLACE VIEW V_STUDENT_RISK_ASSESSMENT AS
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
    (
        SELECT COUNT(*) 
        FROM ANOMALY_PATTERNS ap 
        WHERE ap.STUDENT_ID = s.STUDENT_ID 
        AND ap.IS_RESOLVED = 0
    ) AS UNRESOLVED_PATTERNS,
    CASE 
        WHEN s.ABSENCE_COUNT >= 10 OR 
             (SELECT COUNT(*) FROM ALERTS al WHERE al.STUDENT_ID = s.STUDENT_ID AND al.STATUS = 'ACTIVE') >= 3 
        THEN 'CRITICAL'
        WHEN s.ABSENCE_COUNT >= 5 OR s.LATE_COUNT >= 10 OR
             (SELECT COUNT(*) FROM ALERTS al WHERE al.STUDENT_ID = s.STUDENT_ID AND al.STATUS = 'ACTIVE') >= 2
        THEN 'HIGH'
        WHEN s.ABSENCE_COUNT >= 3 OR s.LATE_COUNT >= 5 OR
             (SELECT COUNT(*) FROM ALERTS al WHERE al.STUDENT_ID = s.STUDENT_ID AND al.STATUS = 'ACTIVE') >= 1
        THEN 'MEDIUM'
        ELSE 'LOW'
    END AS RISK_LEVEL,
    CASE 
        WHEN s.ABSENCE_COUNT >= 10 OR 
             (SELECT COUNT(*) FROM ALERTS al WHERE al.STUDENT_ID = s.STUDENT_ID AND al.STATUS = 'ACTIVE') >= 3 
        THEN 1
        WHEN s.ABSENCE_COUNT >= 5 OR s.LATE_COUNT >= 10 OR
             (SELECT COUNT(*) FROM ALERTS al WHERE al.STUDENT_ID = s.STUDENT_ID AND al.STATUS = 'ACTIVE') >= 2
        THEN 2
        WHEN s.ABSENCE_COUNT >= 3 OR s.LATE_COUNT >= 5 OR
             (SELECT COUNT(*) FROM ALERTS al WHERE al.STUDENT_ID = s.STUDENT_ID AND al.STATUS = 'ACTIVE') >= 1
        THEN 3
        ELSE 4
    END AS RISK_PRIORITY
FROM STUDENTS s;

-- =====================================================
-- V_SEMESTER_KPI - Semester-level Key Performance Indicators
-- =====================================================
CREATE OR REPLACE VIEW V_SEMESTER_KPI AS
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
        NULLIF(COUNT(DISTINCT a.ATTENDANCE_ID), 0),
        2
    ) AS ATTENDANCE_RATE,
    ROUND(
        (SUM(CASE WHEN a.STATUS = 'LATE' THEN 1 ELSE 0 END) * 100.0) / 
        NULLIF(COUNT(DISTINCT a.ATTENDANCE_ID), 0),
        2
    ) AS LATE_RATE,
    ROUND(
        AVG(a.MINUTES_LATE),
        2
    ) AS AVG_MINUTES_LATE
FROM CLASSES c
LEFT JOIN STUDENT_CLASSES sc ON c.CLASS_ID = sc.CLASS_ID
LEFT JOIN ATTENDANCE a ON c.CLASS_ID = a.CLASS_ID
GROUP BY 
    c.CLASS_ID,
    c.CLASS_NAME,
    c.SEMESTER;

-- =====================================================
-- V_DASHBOARD_STATS - Quick stats for dashboard
-- =====================================================
CREATE OR REPLACE VIEW V_DASHBOARD_STATS AS
SELECT 
    (SELECT COUNT(*) FROM STUDENTS) AS TOTAL_STUDENTS,
    (SELECT COUNT(*) FROM ALERTS WHERE STATUS = 'ACTIVE') AS ACTIVE_ALERTS,
    (SELECT COUNT(*) FROM STUDENTS WHERE ABSENCE_COUNT >= 5) AS AT_RISK_STUDENTS,
    (SELECT COUNT(*) FROM CLASSES) AS TOTAL_CLASSES
FROM DUAL;

-- Grant SELECT permissions on views (adjust user as needed)
-- GRANT SELECT ON V_MONTHLY_ATTENDANCE TO your_app_user;
-- GRANT SELECT ON V_STUDENT_RISK_ASSESSMENT TO your_app_user;
-- GRANT SELECT ON V_SEMESTER_KPI TO your_app_user;
-- GRANT SELECT ON V_DASHBOARD_STATS TO your_app_user;
