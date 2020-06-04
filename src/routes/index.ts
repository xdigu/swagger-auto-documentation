import { Router, Request, Response } from 'express';

const routes: Router = Router();
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
routes.get('/hello-world', (request: Request, response: Response) => {
  return response.json({ message: `Hello ${request.query.name || 'World'}` })
});

export default routes;
