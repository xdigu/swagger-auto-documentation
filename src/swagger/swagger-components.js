
// SCHEMAS
/**
 * @swagger
 * components:
 *  schemas:
 *    MessageResponse:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
 *        message:
 *          type: string
 *
 *    HelloWord:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 */

// RESPONSES
/**
 * @swagger
 * components:
 *  responses:
 *    BadRequest:
 *      description: Something passed into request is wrong
 *      schema:
 *        $ref: '#/components/schemas/MessageResponse'
 *
 *    ServerError:
 *      description: A server error ocurred.
 *      schema:
 *        $ref: '#/components/schemas/MessageResponse'
 */

// PARAMETERS
/**
 * @swagger
 * components:
 *  parameters:
 *    NameParam:
 *      name: name
 *      in: query
 *      description: Name to say hello.
 *      required: false
 *      type: string
 */
