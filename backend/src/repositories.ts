import { AppDataSource } from "./data-source";
import { Product } from "./entities/products.entities";

const productsRep = AppDataSource.getRepository(Product)



export { productsRep }