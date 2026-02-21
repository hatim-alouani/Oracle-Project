# Reset Student Attendance

This directory contains scripts to reset `DAY_CHECK` to 0 for all students, allowing them to be marked for attendance again.

## Methods to Reset:

### Method 1: Using npm script (Recommended)
```bash
npm run reset
```
**Requires:** Backend server running on port 3001

### Method 2: Using bash script
```bash
cd server
./reset.sh
```
**Requires:** Backend server running OR sqlplus installed

### Method 3: Direct SQL execution
```bash
cd server
sqlplus username/password@connection_string @reset-attendance.sql
```
**Requires:** SQL*Plus installed

### Method 4: Using n8n workflow
Execute your existing n8n workflow that runs:
```sql
UPDATE students SET day_check = 0
```

### Method 5: Manual SQL
Connect to your Oracle database and run:
```sql
UPDATE STUDENTS SET DAY_CHECK = 0;
COMMIT;
```

## What Gets Reset:

- `DAY_CHECK` field: Set to 0 for all students
- This allows the Present/Late/Absent buttons to work again
- Attendance history is NOT affected
- Absence/Late counts are NOT affected

## When to Use:

- Testing attendance marking multiple times per day
- Correcting mistakes in daily attendance
- Manual reset before the automatic 8 PM reset
- Development/debugging purposes

## Automatic Reset:

Your system automatically resets `DAY_CHECK` every day at 8:00 PM via:
- Node.js cron job in `server/cron.ts`
- n8n workflow (if configured)

No manual intervention needed for daily operations!
