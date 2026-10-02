require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security and compression headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});

// Serve static assets with caching
app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  maxAge: '1d',
  immutable: false
}));

// Serve static files from root (index.html, robots.txt, etc.)
app.use(express.static(__dirname, {
  maxAge: '1h'
}));

// Health check endpoint for cloud monitoring & production readiness checks
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Fallback to index.html for single-page routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start listening
const server = app.listen(PORT, () => {
  console.log(`✨ Pookie Scrapbook server running on port ${PORT}`);
  console.log(`🌐 Ready for production deployment`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
