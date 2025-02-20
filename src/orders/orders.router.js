const router = require("express").Router();

// TODO: Implement the /orders routes needed to make the tests pass
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route('/:orderId')
    .get(controller.read) // Read a specific order by ID
    .put(controller.update) // Update a specific order by ID
    .delete(controller.delete) // Delete a specific order by ID
    .all(methodNotAllowed); // Handle unsupported methods

router
    .route("/").get(controller.list).post(controller.create).all(methodNotAllowed); // Handle unsupported methods

module.exports = router;
