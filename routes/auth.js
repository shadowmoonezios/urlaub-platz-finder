const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registrierung
router.post('/register', async (req, res) => {
  // TODO: Registrierungslogik
});

// Anmeldung
router.post('/login', async (req, res) => {
  // TODO: Anmeldelogik
});

module.exports = router;