const path = require('path');
const router = require('express').Router();
const productRoutes = require('./product');
// const authRoutes = require('./auth');

// API Routes
router.use('/api', productRoutes);
// router.use('/auth', authRoutes);

// If no API routes are hit, send the React app
router.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;




