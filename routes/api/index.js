const router = require('express').Router();
const taskRoutes = require('./tasks');
const folderRoutes = require('./folders');
const listRoutes = require('./lists');
const userRoutes = require('./users');

// Article routes
router.use('/tasks', taskRoutes);
router.use('/folders', folderRoutes);
router.use('/users', userRoutes);
router.use('/lists', listRoutes);

module.exports = router;
