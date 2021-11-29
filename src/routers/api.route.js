import { Router } from "express";
import productsRouter from "./products.router.js";

const ApiRouter = Router();

ApiRouter
  .use("/products", productsRouter)

export default ApiRouter;

