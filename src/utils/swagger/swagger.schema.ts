
/**
 * @swagger
 *  components:
 *   schemas:
 *      CreateUserRequest:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *                  description: Username of the user to be created.
 *              firstname:
 *                  type: string
 *                  description: First name of the user to be created.
 *              lastname:
 *                  type: string
 *                  description: Last name of the user to be created.
 *              email:
 *                  type: string
 *                  format: email
 *                  description: Email address of the user to be created.
 *              password:
 *                  type: string
 *                  format: password
 *                  description: Password of the user to be created.
 *
 *      LoginUserRequest:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: The email of the user for login.
 *              password:
 *                  type: string
 *                  format: password
 *                  description: The password of the user for login.
 *
 *      User:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *                  description: The unique id for the user.
 *              name:
 *                  type: string
 *                  description: The name of the user.
 *              email:
 *                  type: string
 *                  description: The email of the user.
 *              accessToken:
 *                  type: string
 *                  description: Tokens of the user.
 *              refreshToken:
 *                  type: string
 *                  description: Tokens of the user.
 *
 *      BadRequestError:
 *          type: object
 *          properties:
 *              error:
 *                  type: string
 *                  description: Error message indicating missing information.
 *
 *      UnauthorizedError:
 *          type: object
 *          properties:
 *              error:
 *                  type: string
 *                  description: Error message indicating unauthorized access.
 *
 *      InternalServerError:
 *          type: object
 *          properties:
 *              error:
 *                  type: string
 *                  description: Error message indicating internal server error.
 *
 *      MeUserResponse:
 *          type: object
 *          properties:
 *              user:
 *                  $ref: '#/components/schemas/User'
 *
 *      UserDeleteResponse:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: Message indicating successful deletion.
 *
 *      UpdateUserRequest:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *                  description: New username for the user.
 *              firstname:
 *                  type: string
 *                  description: New first name for the user.
 *              lastname:
 *                  type: string
 *                  description: New last name for the user.
 *
 *      UpdateUserResponse:
 *          type: object
 *          properties:
 *              user:
 *                  $ref: '#/components/schemas/User'
 */
