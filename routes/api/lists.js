const router = require('express').Router();
const listsController = require('../../controllers/listsController');

// Matches with "/api/saved"
router
  .route('/')
  .get(listsController.findAll)
  .post(listsController.create);

// Matches with "/api/lists/:id"
router
  .route('/:id')
  .get(listsController.findOne)
  .put(listsController.updateOne)
  .delete(listsController.remove);

module.exports = router;
