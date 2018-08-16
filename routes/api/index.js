const router = require('express').Router();
const taskRoutes = require('./tasks');

// Article routes
router.use('/tasks', taskRoutes);

module.exports = router;
