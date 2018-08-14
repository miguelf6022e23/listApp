const router = require('express').Router();
const taskRoutes = require('./tasks');

// Article routes
router.use('/saved', taskRoutes);

module.exports = router;
