/**
 * @swagger
 *  /stocks/all:
 *      get:
 *          tags:
 *              - Stocks
 *          summary: Get stock information
 *          description: Retrieve stock information for multiple companies
 *          responses:
 *              "200":
 *                 description: Successful response with stock information
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              companies:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          symbol:
 *                                              type: string
 *                                              description: The symbol of the company
 *                                          name:
 *                                              type: string
 *                                              description: The name of the company
 *                                          price:
 *                                              type: number
 *                                              description: The current price of the stock
 *                                          change:
 *                                              type: number
 *                                              description: The change in price of the stock
 *                          example:
 *                              {
 *                                  companies: [
 *                                      {
 *                                          symbol: "AAPL",
 *                                          name: "Apple Inc.",
 *                                          price: 149.35,
 *                                          change: -0.55
 *                                      },
 *                                      {
 *                                          symbol: "MSFT",
 *                                          name: "Microsoft Corporation",
 *                                          price: 330.21,
 *                                          change: 1.24
 *                                      },
 *                                      ...
 *                                  ]
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
 *                              { err: "Error fetching stock information" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { error: "internal server error" }
 */
/**
 * @swagger
 *  /stocks?search={companyName}:
 *      get:
 *          tags:
 *              - Stocks
 *          summary: Get stock information by company name
 *          description: Retrieve stock information for a specific company by its name
 *          parameters:
 *            - in: path
 *              name: companyName
 *              schema:
 *                type: string
 *              required: true
 *              description: The name of the company to search for
 *          responses:
 *              "200":
 *                 description: Successful response with stock information
 *                 content:
 *                      application/json:
 *                         schema:
 *                          $ref: "#/components/schemas/StockData"
 *                          example:
 *                              {
 *                                  name: "Apple Inc.",
 *                                  symbol: "AAPL",
 *                                  price: 149.35,
 *                                  change: -0.55,
 *                                  percentChange: -0.37,
 *                                  volume: 7852298,
 *                                  avgVolume: 8762322,
 *                                  marketCap: 2516250000000,
 *                                  peRatio: 28.79,
 *                                  range52Week: "124.76 - 180.53"
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
 *                              { err: "Error fetching stock information" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { error: "internal server error" }
 */
/**
 * @swagger
 *  /stocks/item?seach={productName}:
 *      get:
 *          tags:
 *              - Stocks
 *          summary: Get stock information by product name
 *          description: Retrieve stock information for a specific product by its name
 *          parameters:
 *            - in: query
 *              name: search
 *              schema:
 *                type: string
 *              required: true
 *              description: The name of the product to search for
 *          responses:
 *              "200":
 *                 description: Successful response with search results
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              result:
 *                                  type: array
 *                                  description: Array of search results
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          name:
 *                                              type: string
 *                                              description: The name of the product
 *                                          symbol:
 *                                              type: string
 *                                              description: The symbol of the product
 *                                          exchange:
 *                                              type: string
 *                                              description: The exchange where the product is listed
 *                                          type:
 *                                              type: string
 *                                              description: The type of the product
 *                          example:
 *                              {
 *                                  result: [
 *                                      { name: "Apple Inc.", symbol: "AAPL", exchange: "NASDAQ", type: "Equity" },
 *                                      { name: "Microsoft Corporation", symbol: "MSFT", exchange: "NASDAQ", type: "Equity" }
 *                                  ]
 *                              }
 *              "400":
 *                 description: Bad request or missing information
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { error: "you must provide a query" }
 *              "500":
 *                 description: Internal server error
 *                 content:
 *                      application/json:
 *                         schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Error message
 *                          example:
 *                              { error: "internal server error" }
 */
/**
 * @swagger
 *  /stocks/create-stock/{id}:
 *      post:
 *          tags:
 *              - Stocks
 *          summary: Add stock to portfolio
 *          description: Add a specified number of shares of a company’s stock to a portfolio.
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                description: The ID of the portfolio
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AddStockRequest'
 *          responses:
 *              "200":
 *                 description: Successfully added stock to portfolio
 *                 content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/AddStockResponse'
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
 *                                  { err: "please provide information" }
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
 *                                  { err: "internal server error" }
 */
