#!/usr/bin/env node

const http = require('http');

const studentId = process.argv[2] || 76; // First student ID or provided ID

console.log(`Testing marking student ${studentId} as absent...\n`);

const postData = JSON.stringify({
  student_id: parseInt(studentId)
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/attendance/absent',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log('Response:', data);
    console.log();
    
    if (res.statusCode === 200) {
      console.log('✅ SUCCESS - Student marked as absent');
    } else {
      console.log('❌ FAILED - Could not mark student as absent');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error.message);
  console.log('Make sure the server is running on port 3001');
});

req.write(postData);
req.end();
