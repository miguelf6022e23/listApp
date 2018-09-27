const router = require('express').Router();
const foldersController = require('../../controllers/foldersController');

// Matches with "/api/saved"
router
  .route('/')
  .get(foldersController.findAll)
  .post(foldersController.create);

// Matches with "/api/folders/:id"
router
  .route('/:id')
  .get(foldersController.findOne)
  .put(foldersController.updateOne)
  .delete(foldersController.remove);

module.exports = router;
