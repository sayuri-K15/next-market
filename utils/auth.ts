import type { NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import { ExtendedNextApiRequestAuth, DecodedType, ResMessageType } from "./types"

const secret_key = "nextmarket"

const auth = (handler: Function) => {
    return async(req: ExtendedNextApiRequestAuth, res: NextApiResponse<ResMessageType>) => {
        if(req.method === "GET") {
            return handler(req,res)
        }
        // const token = await req.headers.authorization.split(" ")[1]
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQG1vbm90ZWluLmNvbSIsImlhdCI6MTY4MTUzNDU4NiwiZXhwIjoxNjgxNjE3Mzg2fQ._roK0zbPdj6GWZ1J6x7Mnfidrx_vGDNDmrdMCCY0Sew"
        if (!token) {
            return res.status(401).json({message: "トークンがありません"})
        }

        try {
            const decoded = jwt.verify(token, secret_key)
            req.body.email = (decoded as DecodedType).email
            return handler(req, res)
        } catch (err) {
            console.log(err)
            return res.status(401).json({message: "トークンは正しくないのでログインしてください"})

        }
    }
}

export default auth