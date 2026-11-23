require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const port = process.env.PORT || 4000;
app.use(helmet());
app.use(cors({ origin: (process.env.FRONTEND_ORIGIN || 'http://localhost:5173').split(',').map(s => s.trim()) }));
app.use(express.json({ limit: '20kb' }));
const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'portfolio-api' }));
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100) return res.status(400).json({ error: 'Please enter a valid name.' });
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return res.status(400).json({ error: 'Please enter a valid email address.' });
  if (typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) return res.status(400).json({ error: 'Please enter a message between 10 and 5000 characters.' });
  if (!supabase) return res.status(503).json({ error: 'The contact database is not configured yet. Please use the email link instead.' });
  const { error } = await supabase.from('contact_messages').insert([{ name: name.trim(), email: email.trim(), message: message.trim() }]);
  if (error) { console.error('Contact insert failed:', error.message); return res.status(500).json({ error: 'Your message could not be saved. Please email me directly.' }); }
  return res.status(201).json({ message: 'Message received.' });
});
app.listen(port, () => console.log(`Portfolio API listening on ${port}`));