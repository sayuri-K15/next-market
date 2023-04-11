import { NextApiRequest } from "next"
import { Types } from "mongoose"

// utils/schemaModels.ts
export interface ItemDataType {
    title: string
    image: string
    price: string
    description: string
    email: string
}

export interface UserDataType {
    name: string
    email: string
    password: string
}

// utils/auth.ts
export interface DecodedType {
    email: string
}

export interface ExtendedNextApiRequestAuth extends NextApiRequest {
    headers: {
        authorization: string
    }
    body: {
        email: string
    }
}

// Common
export interface ResMessageType {
    message: string
    token?: string
}

// user/register.ts, user/login.ts
export interface ExtendedNextApiRequestUser extends NextApiRequest {
    body: UserDataType
}

// user/login.ts
export interface SavedUserDataType extends UserDataType {
    _id: Types.ObjectId
}

// item/readall.ts, [id].ts, update/[id].ts, delete/[id].ts
export interface SavedItemDataType extends ItemDataType {
    _id: Types.ObjectId
}

// readAll.ts
export interface ResReadAllType {
    message: string
    allItems?: SavedItemDataType[]
}

// create.ts
export interface ExtendedNextApiRequestItem extends NextApiRequest {
    body: ItemDataType
}

// [id].ts
export interface ResReadSingleType {
    message: string
    singleItem?: SavedItemDataType
}
