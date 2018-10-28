const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users"
router
  .route('/')
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
/*router
  .route('/:id')
  .get(usersController.findOne)
  .put(usersController.updateOne)
  .delete(usersController.remove);*/

router
	.route('/:key/:value')
	.get(usersController.findOne)

module.exports = router;
