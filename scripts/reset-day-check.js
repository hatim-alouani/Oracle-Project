#!/usr/bin/env node

/**
 * Reset Student Attendance Script
 * Resets DAY_CHECK to 0 for all students
 */

require('dotenv/config');
const oracledb = require('oracledb');
const path = require('path');

console.log('🔄 Resetting student attendance...\n');

async function resetDayCheck() {
  let connection;
  
  try {
    // Configure Oracle connection
    const dbConfig = {
      user: process.env.ORACLE_USER || 'admin',
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    };

    // Set up wallet if configured
    if (process.env.ORACLE_WALLET_LOCATION) {
      const walletLocation = path.resolve(__dirname, '..', process.env.ORACLE_WALLET_LOCATION);
      process.env.TNS_ADMIN = walletLocation;
      dbConfig.walletLocation = walletLocation;
      
      if (process.env.ORACLE_WALLET_PASSWORD) {
        dbConfig.walletPassword = process.env.ORACLE_WALLET_PASSWORD;
      }
    }

    // Connect to database
    connection = await oracledb.getConnection(dbConfig);
    
    // First check how many students need reset
    const beforeResult = await connection.execute(
      `SELECT COUNT(*) as MARKED FROM STUDENTS WHERE DAY_CHECK = 1`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    const markedCount = beforeResult.rows[0].MARKED;
    
    // Delete today's attendance records (to allow re-marking)
    const deleteResult = await connection.execute(
      `DELETE FROM ATTENDANCE WHERE TRUNC(SESSION_DATE) = TRUNC(SYSDATE)`,
      [],
      { autoCommit: false }
    );
    
    // Execute reset query
    const result = await connection.execute(
      `UPDATE STUDENTS SET DAY_CHECK = 0 WHERE DAY_CHECK = 1`,
      [],
      { autoCommit: false }
    );
    
    // Commit both operations together
    await connection.commit();
    
    // Get total student count
    const countResult = await connection.execute(
      `SELECT COUNT(*) as TOTAL FROM STUDENTS`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    const totalStudents = countResult.rows[0].TOTAL;
    
    console.log('✅ SUCCESS!');
    if (deleteResult.rowsAffected > 0) {
      console.log(`   Deleted ${deleteResult.rowsAffected} attendance record(s) for today`);
    }
    if (markedCount > 0) {
      console.log(`   Reset ${markedCount} marked student(s)`);
    } else {
      console.log(`   No students needed reset - all were already unmarked`);
    }
    console.log(`   All ${totalStudents} students can now be marked for attendance\n`);
    
  } catch (err) {
    console.log('❌ FAILED:', err.message);
    console.log('\nMake sure:');
    console.log('  - Environment variables are set correctly (.env file)');
    console.log('  - Oracle wallet is in the correct location');
    console.log('  - Database connection string is valid\n');
    process.exit(1);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err.message);
      }
    }
  }
}

resetDayCheck();
