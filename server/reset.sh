#!/bin/bash

# Reset Attendance Script
# This script resets DAY_CHECK to 0 for all students so they can be marked again

echo "🔄 Resetting student attendance status..."
echo ""

# Check if sqlplus is available
if command -v sqlplus &> /dev/null; then
    # Using SQL*Plus
    echo "Using SQL*Plus..."
    sqlplus -s ${ORACLE_USER:-admin}/${ORACLE_PASSWORD}@${ORACLE_CONNECTION_STRING} <<EOF
    UPDATE STUDENTS SET DAY_CHECK = 0;
    SELECT COUNT(*) || ' students reset successfully' as RESULT FROM STUDENTS WHERE DAY_CHECK = 0;
    COMMIT;
    EXIT;
EOF
else
    # Using curl to call the API endpoint (server must be running)
    echo "Using API endpoint..."
    RESPONSE=$(curl -s -X POST http://localhost:3001/api/admin/reset-day-check)
    
    if echo "$RESPONSE" | grep -q "success"; then
        echo "✓ $RESPONSE"
    else
        echo "✗ Failed to reset. Make sure the server is running."
        echo "Response: $RESPONSE"
        exit 1
    fi
fi

echo ""
echo "✓ All students can now be marked for attendance again!"
