const { Router } = require('express');
const controller = require('./controller');
const router = Router();
router.get("/", controller.getIgrice);
router.get("/:publisher", controller.getIgriceByPublisher);

module.exports = router;