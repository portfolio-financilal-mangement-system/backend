/**
 * @swagger
 *  /portfolio:
 *      post:
 *          tags:
 *              - Portfolio
 *          summary: Create a new wallet
 *          description: Create a new wallet for the authenticated user.
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/CreateWalletRequest'
 *          responses:
 *              "200":
 *                 description: Successfully created the wallet
 *                 content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/CreateWalletResponse'
 *              "400":
 *                 description: Bad request or missing information
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Please provide the name of your portfolio" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Internal server error" }
 */
/**
 * @swagger
 *  /portfolio/all-portfolios:
 *      get:
 *          tags:
 *              - Portfolio
 *          summary: Read all wallets
 *          description: Get all wallets associated with the authenticated user.
 *          responses:
 *              "200":
 *                 description: Successfully retrieved all wallets
 *                 content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ReadAllWalletsResponse'
 *              "400":
 *                 description: Bad request or missing information
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Example error message" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Internal server error" }
 */
/**
 * @swagger
 *  /portfolio/{id}:
 *      get:
 *          tags:
 *              - Portfolio
 *          summary: Read a wallet
 *          description: Get details of a specific wallet.
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                description: The ID of the wallet to retrieve
 *          responses:
 *              "200":
 *                 description: Successfully retrieved the wallet
 *                 content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ReadWalletResponse'
 *              "400":
 *                 description: Bad request or missing information
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Example error message" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Internal server error" }
 */
/**
 * @swagger
 *  /portfolio/{id}:
 *      delete:
 *          tags:
 *              - Portfolio
 *          summary: Delete a wallet
 *          description: Delete a specific wallet.
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                description: The ID of the wallet to delete
 *          responses:
 *              "200":
 *                 description: Successfully deleted the wallet
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                      description: Success message
 *                              example:
 *                                  { message: "portfolio has been deleted" }
 *              "400":
 *                 description: Bad request or missing information
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Example error message" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  err:
 *                                      type: string
 *                                      description: Error message
 *                              example:
 *                                  { err: "Internal server error" }
 */
