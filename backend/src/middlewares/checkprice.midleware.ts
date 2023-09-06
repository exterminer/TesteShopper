import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";
import { Product } from "../entities/products.entities";
import { productsRep } from "../repositories";

const checkPrice = async (req: Request, res: Response, next: NextFunction) => {



    const product = await productsRep.findOneBy({
        code: req.body.product_code
    })

    if (!product) {

        throw new AppError("Produto nâo encontrado", 400)
    }


    if (req.body.new_price < product!.cost_price) {
        console.log("entrei aqui")
        throw new AppError("O reajuste esta menor que o custo", 400)
    }

    const newPrice = req.body.new_price;
    const actual = Number(product!.sales_price)
    console.log(typeof (actual))

    const AllowedIncrease = (actual * 0.1).toFixed(2);

    const MaxValue = actual + parseFloat(AllowedIncrease)

    if (newPrice != MaxValue) {
        throw new AppError(`reajuste deve ser +10% do preço atual,ajuste sugerido ${MaxValue}`, 400);
    }



    next()
}


export default checkPrice