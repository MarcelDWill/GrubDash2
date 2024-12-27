const router = require("express").Router();

// TODO: Implement the /dishes routes needed to make the tests pass
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed"); // Fixed the path to methodNotAllowed

router
    .route("/:dishId")
    .get(controller.read) // Read a specific dish by ID
    .put(controller.update) // Update a specific dish by ID
    .all(methodNotAllowed); // Handle unsupported methods

router
    .route("/") // Route for all dishes
    .get(controller.list) // List all dishes
    .post(controller.create) // Create a new dish
    .all(methodNotAllowed); // Handle unsupported methods

module.exports = router;