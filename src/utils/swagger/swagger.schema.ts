/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *            description: The unique ID for the user
 *          username:
 *            type: string
 *            description: The username of the user
 *          firstname:
 *            type: string
 *            description: The first name of the user
 *          lastname:
 *            type: string
 *            description: The last name of the user
 *          email:
 *            type: string
 *            format: email
 *            description: The email of the user
 *          password:
 *            type: string
 *            description: The password of the user
 *          accessToken:
 *                  type: string
 *                  description: Tokens of the user
 *          refreshToken:
 *                  type: string
 *                  description: Tokens of the user
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Register:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *            description: The username of the user
 *          firstname:
 *            type: string
 *            description: The first name of the user
 *          lastname:
 *            type: string
 *            description: The last name of the user
 *          email:
 *            type: string
 *            format: email
 *            description: The email of the user
 *          password:
 *            type: string
 *            description: The password of the user (min. 6 characters)
 */
/**
 * @swagger
 *  components:
 *   schemas:
 *      Login:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: The email of the user that he registered
 *              password:
 *                  type: string
 *                  description: The password of the user
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      StockData:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: The short name of the company
 *          symbol:
 *            type: string
 *            description: The symbol of the company
 *          price:
 *            type: number
 *            description: The current price of the stock
 *          change:
 *            type: number
 *            description: The change in price of the stock
 *          percentChange:
 *            type: number
 *            description: The percentage change in price of the stock
 *          volume:
 *            type: number
 *            description: The regular market volume of the stock
 *          avgVolume:
 *            type: number
 *            description: The average volume of the stock
 *          marketCap:
 *            type: number
 *            description: The market capitalization of the stock
 *          peRatio:
 *            type: number
 *            description: The price-to-earnings ratio of the stock
 *          range52Week:
 *            type: string
 *            description: The 52-week range of the stock
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      SearchResults:
 *        type: object
 *        properties:
 *          result:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: The name of the product
 *                symbol:
 *                  type: string
 *                  description: The symbol of the product
 *                exchange:
 *                  type: string
 *                  description: The exchange where the product is listed
 *                type:
 *                  type: string
 *                  description: The type of the product
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      AddStockRequest:
 *        type: object
 *        properties:
 *          company_name:
 *            type: string
 *            description: The name of the company
 *          shares:
 *            type: integer
 *            description: The number of shares to add
 *        required:
 *          - company_name
 *          - shares
 *      AddStockResponse:
 *        type: object
 *        properties:
 *          stock:
 *            type: object
 *            properties:
 *              portfolio_id:
 *                type: integer
 *                description: The ID of the portfolio
 *              company_name:
 *                type: string
 *                description: The name of the company
 *              stock_price:
 *                type: number
 *                description: The price of the stock
 *              total_cost:
 *                type: number
 *                description: The total cost of the stock
 *              shares:
 *                type: integer
 *                description: The number of shares
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      CreateWalletRequest:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: The name of the wallet
 *        required:
 *          - name
 *      CreateWalletResponse:
 *        type: object
 *        properties:
 *          wallet:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *                description: The ID of the wallet
 *              name:
 *                type: string
 *                description: The name of the wallet
 *              userId:
 *                type: integer
 *                description: The ID of the user who owns the wallet
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      ReadAllWalletsResponse:
 *        type: object
 *        properties:
 *          portfolios:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/WalletItem'
 *      WalletItem:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: The ID of the wallet
 *          name:
 *            type: string
 *            description: The name of the wallet
 *          userId:
 *            type: integer
 *            description: The ID of the user who owns the wallet
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      ReadWalletResponse:
 *        type: object
 *        properties:
 *          portfolio:
 *            $ref: '#/components/schemas/WalletItem'
 *      WalletItem:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: The ID of the wallet
 *          name:
 *            type: string
 *            description: The name of the wallet
 *          userId:
 *            type: integer
 *            description: The ID of the user who owns the wallet
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Earnings:
 *        type: object
 *        properties:
 *          currentPrice:
 *            type: number
 *          old_price:
 *            type: number
 *          earnings:
 *            type: number
 *          total_earnings:
 *            type: number
 */
