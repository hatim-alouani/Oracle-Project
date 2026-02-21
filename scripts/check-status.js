#!/usr/bin/env node

require('dotenv/config');
const oracledb = require('oracledb');
const path = require('path');

async function checkStatus() {
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
    
    const result = await connection.execute(
      `SELECT 
         COUNT(*) as TOTAL,
         SUM(CASE WHEN DAY_CHECK = 0 THEN 1 ELSE 0 END) as UNMARKED,
         SUM(CASE WHEN DAY_CHECK = 1 THEN 1 ELSE 0 END) as MARKED
       FROM STUDENTS`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    const stats = result.rows[0];
    
    console.log('\n📊 Current Student Status:');
    console.log('─'.repeat(40));
    console.log(`Total Students:    ${stats.TOTAL}`);
    console.log(`Can be marked:     ${stats.UNMARKED} (DAY_CHECK = 0)`);
    console.log(`Already marked:    ${stats.MARKED} (DAY_CHECK = 1)`);
    console.log('─'.repeat(40));
    
    if (stats.MARKED > 0) {
      console.log('\n⚠️  Some students are already marked!');
      console.log('Run "npm run reset" to allow marking them again.\n');
    } else {
      console.log('\n✅ All students can be marked for attendance!\n');
    }
    
  } catch (err) {
    console.log('❌ Error:', err.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

checkStatus();
