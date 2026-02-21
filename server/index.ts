import 'dotenv/config';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { studentRoutes } from './routes/students';
import { classRoutes } from './routes/classes';
import { alertRoutes } from './routes/alerts';
import { anomalyRoutes } from './routes/anomalies';
import { reportRoutes } from './routes/reports';
import { thresholdRoutes } from './routes/thresholds';
import { initializePool, closePool, query } from './db';
import { setupCronJobs } from './cron';

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});

fastify.register(cors, {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
});

fastify.addContentTypeParser('application/json', { parseAs: 'string' }, (req, body, done) => {
  try {
    const str = (body as string || '').trim();
    done(null, str ? JSON.parse(str) : {});
  } catch (err: any) {
    done(err, undefined);
  }
});

fastify.get('/health', async (request, reply) => {
  try {
    await query('SELECT 1 FROM DUAL');
    return { status: 'healthy', timestamp: new Date().toISOString() };
  } catch (error) {
    reply.status(503).send({ status: 'unhealthy', error: 'Database connection failed' });
  }
});

async function registerRoutes() {
  await fastify.register(studentRoutes);
  await fastify.register(classRoutes);
  await fastify.register(alertRoutes);
  await fastify.register(anomalyRoutes);
  await fastify.register(reportRoutes);
  await fastify.register(thresholdRoutes);
}

async function start() {
  try {
    await initializePool();
    fastify.log.info('Oracle Database connection pool initialized');
    
    setupCronJobs();
    
    await registerRoutes();
    
    const port = parseInt(process.env.PORT || '4000');
    const host = process.env.HOST || '0.0.0.0';
    
    await fastify.listen({ port, host });
    
    fastify.log.info(`🚀 Server running at http://${host}:${port}`);
    fastify.log.info(`Health check: http://${host}:${port}/health`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  fastify.log.info('Received SIGINT, shutting down gracefully...');
  await closePool();
  await fastify.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  fastify.log.info('Received SIGTERM, shutting down gracefully...');
  await closePool();
  await fastify.close();
  process.exit(0);
});

start();
