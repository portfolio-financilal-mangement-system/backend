/**
 * @swagger
 * paths:
  /api/users/createUser:
    post:
      summary: Create a new user
      description: Endpoint to create a new user with the provided information.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                username:
                  type: string
                  description: Username of the user to be created.
                firstname:
                  type: string
                  description: First name of the user to be created.
                lastname:
                  type: string
                  description: Last name of the user to be created.
                email:
                  type: string
                  format: email
                  description: Email address of the user to be created.
                password:
                  type: string
                  format: password
                  description: Password of the user to be created.
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    description: Message indicating successful user creation.
        '400':
          description: Bad request - Missing required fields
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    description: Error message indicating missing information.
        '500':
          description: Internal server error
          content:
            application/json:
              schema:
                type: object
                properties:
                  err:
                    type: string
                    description: Error message indicating internal server error.

 */
/**
 * @swagger
 *  /api/users/login:
 *    post:
 *      tags:
 *        - User
 *      summary: Login for user
 *      description: Endpoint for user login with email and password.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/LoginUserRequest"
 *      responses:
 *        "200":
 *          description: Successful login
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        "400":
 *          description: Bad request - Missing email or password
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequestError'
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/InternalServerError'
 */
/**
 * @swagger
 *  /api/users/me:
 *    get:
 *      tags:
 *        - User
 *      summary: Get current user details
 *      description: Endpoint to get details of the currently authenticated user.
 *      security:
 *        - BearerAuth: []
 *      responses:
 *        "200":
 *          description: Successful retrieval of user details
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        "401":
 *          description: Unauthorized - Authentication required
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/InternalServerError'
 */
/**
 * @swagger
 *  /api/users/delete:
 *    delete:
 *      tags:
 *        - User
 *      summary: Delete user
 *      description: Endpoint to delete the authenticated user.
 *      security:
 *        - BearerAuth: []
 *      responses:
 *        "200":
 *          description: User deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Message indicating successful deletion.
 *        "400":
 *          description: Bad request - User not found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequestError'
 *        "401":
 *          description: Unauthorized - Authentication required
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/InternalServerError'
 */
/**
 * @swagger
 *  /api/users/update:
 *    patch:
 *      tags:
 *        - User
 *      summary: Update user information
 *      description: Endpoint to update information of the authenticated user.
 *      security:
 *        - BearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                  description: New username for the user.
 *                firstname:
 *                  type: string
 *                  description: New first name for the user.
 *                lastname:
 *                  type: string
 *                  description: New last name for the user.
 *      responses:
 *        "200":
 *          description: User updated successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        "400":
 *          description: Bad request - Invalid updates or missing information
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BadRequestError'
 *        "401":
 *          description: Unauthorized - Authentication required
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/InternalServerError'
 */
