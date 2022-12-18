const { Router } = require('express');
const controller = require('./controller');
const router = Router();
router.get("/", controller.getIgrice);
router.get("/:name", controller.getIgriceByName);


module.exports = router;