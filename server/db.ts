import oracledb from 'oracledb';
import path from 'path';

const dbConfig: any = {
  user: process.env.ORACLE_USER || 'admin',
  password: process.env.ORACLE_PASSWORD,
  connectString: process.env.ORACLE_CONNECTION_STRING,
  poolMin: 2,
  poolMax: 20,
  poolIncrement: 2,
  poolTimeout: 60,
};

if (process.env.ORACLE_WALLET_LOCATION) {
  const walletLocation = path.resolve(process.env.ORACLE_WALLET_LOCATION);
  
  process.env.TNS_ADMIN = walletLocation;
  
  dbConfig.walletLocation = walletLocation;
  
  if (process.env.ORACLE_WALLET_PASSWORD) {
    dbConfig.walletPassword = process.env.ORACLE_WALLET_PASSWORD;
  }
  
  console.log(`Using Oracle Wallet from: ${walletLocation}`);
} else {
  console.log('No wallet configured - using direct connection');
}

let pool: oracledb.Pool | null = null;

export async function initializePool() {
  try {
    pool = await oracledb.createPool(dbConfig);
    console.log('Oracle Database connection pool created successfully');
    return pool;
  } catch (err: any) {
    console.error('Error creating Oracle connection pool:', err);
    throw err;
  }
}

export async function getConnection(): Promise<oracledb.Connection> {
  if (!pool) {
    await initializePool();
  }
  return pool!.getConnection();
}

export async function query(sql: string, binds: any[] = [], options: any = {}) {
  let connection: oracledb.Connection | null = null;
  try {
    const start = Date.now();
    connection = await getConnection();
    
    const result = await connection.execute(sql, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      autoCommit: true,
      ...options,
    });
    
    const duration = Date.now() - start;
    console.log('Executed query', { duration, rows: result.rows?.length || 0 });
    
    return result;
  } catch (err: any) {
    console.error('Database query error:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}

export async function closePool() {
  if (pool) {
    try {
      await pool.close(10);
      console.log('Oracle connection pool closed');
    } catch (err) {
      console.error('Error closing pool:', err);
    }
  }
}

export default { getConnection, query, closePool, initializePool };
