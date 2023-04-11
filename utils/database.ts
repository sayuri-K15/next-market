import mongoose from "mongoose"

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://sayu1511:Nw2tRijkS861zY3d@cluster0.a41aej1.mongodb.net/appDataBase?retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")
    } catch(err) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB