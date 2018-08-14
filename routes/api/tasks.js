const router = require('express').Router();
const tasksController = require('../../controllers/tasksController');

// Matches with "/api/saved"
router
  .route('/')
  .get(tasksController.findAll)
  .post(tasksController.create);

// Matches with "/api/tasks/:id"
router
  .route('/:id')
  .delete(tasksController.remove);

module.exports = router;
