import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "financial system API Docs",
      description: "this is api for the financial management system",
      version: "1.0.0",
    },
    servers: [{ url: `http://locahost:5000/` }],
  },
  apis: ["./src/utils/*.ts", "./src/modules/*.ts"],
};

const spacs = swaggerJSDoc(options);

function docs(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(spacs));
}

export { docs };
