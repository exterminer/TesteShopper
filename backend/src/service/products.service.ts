import { AppError } from "../errors/app.error"
import { productsRep } from "../repositories"

const patch = async (payload: any) => {


    const product = await productsRep.findOneBy({
        code: payload.product_code
    })
 
    payload.sales_price = payload.new_price

    const patch = await productsRep.save({ ...product, ...payload })


    return patch
}


export default { patch }