const { Router } = require('express');
const controller = require('./controller');
const router = Router();
router.get("/", controller.getIgrice);
router.get("/:review", controller.getIgriceByReview);

module.exports = router;