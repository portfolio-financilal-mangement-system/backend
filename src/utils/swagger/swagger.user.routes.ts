/**
 * @swagger
 *  /user:
 *      post:
 *          tags:
 *              - User
 *          summary: Create a new user
 *          description: Sign up for the user for the first time
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Register"
 *          responses:
 *              "201":
 *                  description: User created successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/User"
 *              "400":
 *                  description: Bad request - Please fill in all required fields
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: "Please fill in all required fields"
 *              "500":
 *                  description: Internal Server Error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      example: "Internal server error"
 */
/**
 * @swagger
 *  /user/login:
 *      post:
 *          tags:
 *              - User
 *          summary: Login for user
 *          description: Login for user to the website
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Login"
 *          responses:
 *              "200":
 *                  description: Login successful
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/User"
 *              "400":
 *                  description: Bad request - Please fill in all required fields
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: "Please fill in all required fields"
 *              "500":
 *                  description: Internal Server Error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: "An error occurred"
 */
/**
 * @swagger
 *  /user/me:
 *      get:
 *          tags:
 *              - User
 *          summary: Get user information
 *          description: Get user information from the database
 *          parameters:
 *                - in: header
 *                  name: Authorization
 *                  schema:
 *                   type: string
 *                  required: true
 *                  description: Bearer token for user authentication
 *                  example: "Bearer abcxyz123456"
 *          responses:
 *              "200":
 *                  description: User information retrieved successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/User"
 *              "400":
 *                  description: Bad request - Invalid user ID
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      example: "Invalid user ID"
 *              "500":
 *                  description: Internal Server Error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      example: "Internal server error"
 */
/**
 * @swagger
 *  /user/delete:
 *      delete:
 *          tags:
 *              - User
 *          summary: Delete the user account
 *          description: If the user wants to delete their account from this endpoint
 *          parameters:
 *                - in: header
 *                  name: Authorization
 *                  schema:
 *                   type: string
 *                  required: true
 *                  description: Bearer token for user authentication
 *                  example: "Bearer abcxyz123456"
 *          responses:
 *              "200":
 *                 description: Response of deleting user
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: Message indicating the user has been deleted
 *                          example:
 *                              { message: "user has been deleted" }
 *              "400":
 *                 description: Bad request or user not found
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              err:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { err: "user is not found" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              err:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { err: "internal server error" }
 */
/**
 * @swagger
 *  /user/update:
 *      patch:
 *          tags:
 *              - User
 *          summary: Update user information
 *          description: Update the user's username, firstname, and lastname
 *          security:
 *              - BearerAuth: []
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username:
 *                                  type: string
 *                                  description: The updated username
 *                              firstname:
 *                                  type: string
 *                                  description: The updated firstname
 *                              lastname:
 *                                  type: string
 *                                  description: The updated lastname
 *                          required:
 *                              - username
 *                              - firstname
 *                              - lastname
 *          responses:
 *              "200":
 *                 description: Updated user information
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              _id:
 *                                  type: string
 *                                  description: The unique id for the user
 *                              username:
 *                                  type: string
 *                                  description: The updated username
 *                              firstname:
 *                                  type: string
 *                                  description: The updated firstname
 *                              lastname:
 *                                  type: string
 *                                  description: The updated lastname
 *                          example:
 *                              {
 *                                  _id: "609a0cb5e4c5f61bbab3e80d",
 *                                  username: "john_doe",
 *                                  firstname: "John",
 *                                  lastname: "Doe"
 *                              }
 *              "400":
 *                 description: Bad request or missing information
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              err:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { err: "invalid updates!" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              err:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { err: "internal server error" }
 */
