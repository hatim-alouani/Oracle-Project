# Oracle Attendance Tracking System

A comprehensive student attendance tracking and analytics system built with Next.js and Fastify.

## Architecture

- **Frontend**: Next.js 16 with React 19 and Tailwind CSS
- **Backend**: Fastify with TypeScript
- **Database**: PostgreSQL

## Prerequisites

- Node.js 20+ 
- PostgreSQL 14+
- npm or yarn

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

Create a PostgreSQL database and run the schema:

```bash
# Create database
createdb oracle_db

# Run schema
psql -d oracle_db -f server/schema.sql
```

### 3. Environment Variables

Copy the example environment file and configure:

```bash
cp .env.example .env
```

Edit `.env` with your database credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=oracle_db
DB_USER=postgres
DB_PASSWORD=your_password

PORT=4000
CORS_ORIGIN=http://localhost:3000
```

### 4. Run Development Servers

**Option A: Run both frontend and backend together**
```bash
npm run dev:all
```

**Option B: Run separately**
```bash
# Terminal 1 - Backend API
npm run dev:server

# Terminal 2 - Frontend
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)  
The backend API will be available at [http://localhost:4000](http://localhost:4000)

### 5. Verify Setup

Check the backend health endpoint:
```bash
curl http://localhost:4000/health
```

## API Endpoints

### Students
- `GET /api/students` - Fetch all students
- `POST /api/students` - Add new student
- `POST /api/students/remove` - Remove student

### Attendance
- `POST /api/attendance/present` - Mark student present
- `POST /api/attendance/late` - Mark student late
- `POST /api/attendance/absent` - Mark student absent

### Classes
- `GET /api/classes` - Fetch all classes
- `POST /api/classes` - Add new class
- `POST /api/classes/enroll` - Enroll student in class

### Alerts
- `GET /api/alerts` - Fetch all alerts
- `GET /api/alerts/active` - Fetch active alerts

### Reports
- `GET /api/statistics` - Dashboard statistics
- `GET /api/reports/risk-assessment` - Student risk assessment
- `GET /api/reports/semester-kpis` - Semester KPIs
- `GET /api/reports/monthly` - Monthly attendance report

## Build for Production

### Backend
```bash
npm run build:server
npm run start:server
```

### Frontend
```bash
npm run build
npm run start
```

## Project Structure

```
Oracle-Project/
├── app/                    # Next.js pages
├── components/             # React components
├── lib/                    # Utilities and API client
├── server/                 # Fastify backend
│   ├── routes/            # API route handlers
│   ├── db.ts              # Database connection
│   ├── index.ts           # Server entry point
│   └── schema.sql         # Database schema
├── public/                # Static assets
└── package.json           # Dependencies
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Fastify Documentation](https://fastify.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## License

Private project - All rights reserved
