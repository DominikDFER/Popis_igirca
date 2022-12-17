const { Router } = require('express');
const controller = require('./controller');
const router = Router();
router.get("/", controller.getIgrice);
router.get("/:id", controller.getIgriceById);
router.get("/:publisher", controller.getIgriceByPublisher);
router.get("/:name", controller.getIgriceByName);
router.get("/:review", controller.getIgriceByReview);
router.post("/", controller.addIgrica);
router.delete("/:id", controller.deleteIgrica);
router.put("/:id", controller.upadteIgrica);



module.exports = router;