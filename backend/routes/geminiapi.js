let express = require('express');
let rateLimit = require('express-rate-limit');

let geminirouter = express.Router();
let handlegeminiapi = require('../controller/geminiapi');

// Limit Gemini AI calls to protect free tier usage.
// Example: max 7 requests per IP per day.
const geminiLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 7,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Daily AI limit reached. Please try again tomorrow.',
  },
});

geminirouter.post('/gemini', geminiLimiter, handlegeminiapi);

module.exports = geminirouter;