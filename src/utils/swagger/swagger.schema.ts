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
