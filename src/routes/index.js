const { Router } = require("express");

const routes = Router();

/**
 * @swagger
 * /hello-world:
 *  get:
 *    tags: 
 *      - Hello World
 *    description: Say hello to who send a request.
 *    sumary: Say hello.
 *    parameters:
 *      - $ref: '#/components/parameters/NameParam'
 *    responses:
 *      200:
 *        description: Success.
 *        schema:
 *          $ref: '#/components/schemas/HelloWord'
 * 
 *      400: 
 *        $ref: '#/components/responses/BadRequest'
 * 
 *      500:
 *        $ref: '#/components/responses/ServerError'
 */
routes.get(
  "/hello-world",
  (req, res) => res.json({ message: `Hello ${req.query.name || 'World'}` })
);

module.exports = routes
