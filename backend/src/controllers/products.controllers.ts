import { Request, Response } from "express";
import productsService from "../service/products.service";

const patch = async (req: Request, res: Response) => {

    const user = await productsService.patch(req.body)

    res.status(200).json(user)
}


export default {patch}