import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"
import { NextApiResponse } from "next"
import { ExtendedNextApiRequestItem, ResMessageType } from "@/utils/types"

const createItem = async(req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
    try {
        await connectDB()
        console.log(req.body)
        await ItemModel.create(req.body)
        return res.status(200).json({message: "アイテム作成"})

    } catch (err) {
        return res.status(400).json({message: "アイテム作成失敗"})
    }
}

export default auth(createItem)


// mongodb+srv://sayu1511:<password>@cluster0.a41aej1.mongodb.net/?retryWrites=true&w=majority