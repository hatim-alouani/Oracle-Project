#!/usr/bin/env node

require('dotenv/config');
const oracledb = require('oracledb');
const path = require('path');

console.log('📚 Setting up classes and enrollments...\n');

async function setupClassesAndEnrollments() {
  let connection;
  
  try {
    const dbConfig = {
      user: process.env.ORACLE_USER || 'admin',
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    };

    if (process.env.ORACLE_WALLET_LOCATION) {
      const walletLocation = path.resolve(__dirname, '..', process.env.ORACLE_WALLET_LOCATION);
      process.env.TNS_ADMIN = walletLocation;
      dbConfig.walletLocation = walletLocation;
      
      if (process.env.ORACLE_WALLET_PASSWORD) {
        dbConfig.walletPassword = process.env.ORACLE_WALLET_PASSWORD;
      }
    }

    connection = await oracledb.getConnection(dbConfig);
    
    // Clear existing classes and enrollments
    await connection.execute(`DELETE FROM STUDENT_CLASSES`);
    await connection.execute(`DELETE FROM CLASSES`);
    console.log('✓ Cleared existing classes and enrollments\n');
    
    // Create classes for Fall 2026 and Spring 2026
    const classes = [
      { name: 'Machine Learning', semester: 'Fall 2026' },
      { name: 'Deep Learning', semester: 'Fall 2026' },
      { name: 'Maths', semester: 'Fall 2026' },
      { name: 'Oracle', semester: 'Fall 2026' },
      { name: 'Computer Vision', semester: 'Spring 2026' },
      { name: 'English', semester: 'Spring 2026' },
      { name: 'French', semester: 'Spring 2026' },
      { name: 'AI', semester: 'Spring 2026' },
    ];
    
    console.log('Creating classes...');
    for (const cls of classes) {
      await connection.execute(
        `INSERT INTO CLASSES (CLASS_NAME, SEMESTER) VALUES (:name, :semester)`,
        [cls.name, cls.semester]
      );
      console.log(`  ✓ ${cls.name} (${cls.semester})`);
    }
    
    // Get all students and classes
    const studentsResult = await connection.execute(
      `SELECT STUDENT_ID FROM STUDENTS ORDER BY STUDENT_ID`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    const classesResult = await connection.execute(
      `SELECT CLASS_ID FROM CLASSES ORDER BY CLASS_ID`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    const students = studentsResult.rows;
    const classIds = classesResult.rows;
    
    if (students.length === 0) {
      console.log('\n⚠️  No students found. Run "npm run add-students" first');
      return;
    }
    
    console.log(`\nEnrolling ${students.length} students into ALL classes...`);
    
    let enrollmentCount = 0;
    
    // Enroll each student in ALL classes
    for (const student of students) {
      for (const cls of classIds) {
        await connection.execute(
          `INSERT INTO STUDENT_CLASSES (STUDENT_ID, CLASS_ID) VALUES (:studentId, :classId)`,
          [student.STUDENT_ID, cls.CLASS_ID]
        );
        enrollmentCount++;
      }
    }
    
    await connection.commit();
    
    console.log(`\n✅ SUCCESS!`);
    console.log(`   Created ${classes.length} classes`);
    console.log(`   Enrolled ${students.length} students in ${enrollmentCount} total enrollments`);
    console.log(`   All students enrolled in all ${classes.length} classes\n`);
    
  } catch (err) {
    console.log('❌ FAILED:', err.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

setupClassesAndEnrollments();
