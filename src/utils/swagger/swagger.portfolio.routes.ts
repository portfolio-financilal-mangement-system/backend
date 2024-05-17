/**
 * @swagger
 *  /wallets/create-wallet:
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
