import 'dotenv/config';
import { initializePool, closePool, query } from '../server/db';

const students = [
  { firstName: "Najwa", lastName: "Adda" },
  { firstName: "Hajar", lastName: "Ahmane" },
  { firstName: "Hajar", lastName: "Alahyane" },
  { firstName: "Mohamed", lastName: "Alaoui" },
  { firstName: "Otman", lastName: "Amal" },
  { firstName: "Zinoun", lastName: "Amine" },
  { firstName: "Ayoub", lastName: "Anam" },
  { firstName: "Sara", lastName: "Arroub" },
  { firstName: "Salma", lastName: "Atafi" },
  { firstName: "Salah Eddine", lastName: "Azlafi" },
  { firstName: "Moiz", lastName: "Azlani" },
  { firstName: "Hamza", lastName: "Badr" },
  { firstName: "Yahya", lastName: "Bouchak" },
  { firstName: "Azh", lastName: "Brahim" },
  { firstName: "Oussama", lastName: "Chabani" },
  { firstName: "Adil", lastName: "Chagri" },
  { firstName: "Fatima Ezzahraa", lastName: "Daoudi" },
  { firstName: "Youssef", lastName: "Didi" },
  { firstName: "Salma", lastName: "El Fadili" },
  { firstName: "Taha", lastName: "Elatoui" },
  { firstName: "Fatima Zahra", lastName: "Elhossi" },
  { firstName: "Nadia", lastName: "Elmahi" },
  { firstName: "Fatima Ezzahra", lastName: "Nini" },
  { firstName: "Zahira", lastName: "Habyby" },
  { firstName: "Mohcine", lastName: "Jaad" },
  { firstName: "Chouaib", lastName: "Jbel" },
  { firstName: "Achraf", lastName: "Kasmi" },
  { firstName: "Ismahane", lastName: "Lebriz" },
  { firstName: "Mohamed", lastName: "Maadani" },
  { firstName: "Abderrahmane", lastName: "Mansir" },
  { firstName: "Wassim", lastName: "Moussaif" },
  { firstName: "Salima", lastName: "Nacir" },
  { firstName: "Ilias", lastName: "Naoui" },
  { firstName: "Salma", lastName: "Ouardi" },
  { firstName: "Houria", lastName: "Oulhanafi" },
  { firstName: "Layla", lastName: "Ouyoussef" },
  { firstName: "Saad", lastName: "Es-Sebbar" },
  { firstName: "Salma", lastName: "Zair" },
  { firstName: "User", lastName: "Y" },
];

function generateEmail(firstName: string, lastName: string): string {
  const cleanFirst = firstName.toLowerCase().replace(/\s+/g, '.');
  const cleanLast = lastName.toLowerCase().replace(/\s+/g, '.');
  return `${cleanFirst}.${cleanLast}@school.ma`;
}

function getRandomAbsences(): number {
  // Random absences between 2 and 8
  return Math.floor(Math.random() * 7) + 2; // 2-8
}

async function addStudentWithAbsences(firstName: string, lastName: string, absenceDays: number) {
  try {
    const email = generateEmail(firstName, lastName);
    
    // Insert new student
    await query(
      `INSERT INTO STUDENTS (FIRST_NAME, LAST_NAME, EMAIL, DAY_CHECK)
       VALUES (:firstName, :lastName, :email, 0)`,
      [firstName, lastName, email]
    );

    // Get the newly inserted student ID
    const result = await query(
      `SELECT student_id FROM STUDENTS WHERE LOWER(first_name) = LOWER(:firstName) AND LOWER(last_name) = LOWER(:lastName)`,
      [firstName, lastName]
    );

    const studentId = (result.rows![0] as any).STUDENT_ID;
    console.log(`✓ Added ${firstName} ${lastName} (${email}) - ID: ${studentId}`)

    // Add absence records (spread over the last 30 days)
    const today = new Date();
    for (let i = 0; i < absenceDays; i++) {
      const daysAgo = Math.floor(Math.random() * 30) + 1; // Random day in last 30 days
      const date = new Date(today);
      date.setDate(date.getDate() - daysAgo);
      const dateStr = date.toISOString().split('T')[0];

      try {
        // Check if attendance record already exists for this date
        const existing = await query(
          `SELECT attendance_id FROM ATTENDANCE WHERE student_id = :studentId AND TRUNC(session_date) = TO_DATE(:dateStr, 'YYYY-MM-DD')`,
          [studentId, dateStr]
        );

        if (!existing.rows || existing.rows.length === 0) {
          await query(
            `INSERT INTO ATTENDANCE (STUDENT_ID, STATUS, SESSION_DATE, REASON)
             VALUES (:studentId, 'ABSENT', TO_DATE(:dateStr, 'YYYY-MM-DD'), 'Historical absence')`,
            [studentId, dateStr]
          );
        }
      } catch (err) {
        console.log(`  - Warning: Could not add absence for ${dateStr}`);
      }
    }

    if (absenceDays > 0) {
      // Update the ABSENCE_COUNT in STUDENTS table
      await query(
        `UPDATE STUDENTS SET ABSENCE_COUNT = :absenceDays WHERE STUDENT_ID = :studentId`,
        [absenceDays, studentId]
      );
      console.log(`  → Added ${absenceDays} absence(s)`);
    }

    return { studentId, email };
  } catch (error) {
    console.error(`Error adding ${firstName} ${lastName}:`, error);
    throw error;
  }
}

async function main() {
  try {
    console.log('🚀 Starting student import...\n');
    await initializePool();
    console.log('✓ Connected to database\n');

    // Delete all existing students and related data
    console.log('🗑️  Removing all existing students...\n');
    try {
      await query('DELETE FROM ATTENDANCE');
      console.log('  ✓ Cleared attendance records');
      await query('DELETE FROM ALERTS');
      console.log('  ✓ Cleared alerts');
      await query('DELETE FROM STUDENT_CLASSES');
      console.log('  ✓ Cleared enrollments');
      try {
        await query('DELETE FROM ANOMALY_PATTERNS');
        console.log('  ✓ Cleared anomaly patterns');
      } catch (e) {
        // Ignore if table doesn't exist
      }
      await query('DELETE FROM STUDENTS');
      console.log('  ✓ Cleared all students\n');
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }

    let successCount = 0;
    let errorCount = 0;

    for (const student of students) {
      try {
        const absences = getRandomAbsences();
        await addStudentWithAbsences(student.firstName, student.lastName, absences);
        successCount++;
      } catch (error) {
        console.error(`✗ Failed to add ${student.firstName} ${student.lastName}`);
        errorCount++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`✓ Successfully added/updated: ${successCount} students`);
    if (errorCount > 0) {
      console.log(`✗ Failed: ${errorCount} students`);
    }
    console.log('='.repeat(50));

  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  } finally {
    await closePool();
    console.log('\n✓ Database connection closed');
  }
}

main();
