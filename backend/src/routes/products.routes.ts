import { Router } from "express";
import productsControllers from "../controllers/products.controllers";
import checkPrice from "../middlewares/checkprice.midleware";

const productsRoutes: Router = Router()

productsRoutes.patch("", checkPrice, productsControllers.patch)




export default productsRoutes