import mongoose from "mongoose"

const connectDB = async() => {
    try {
        // await mongoose.connect("mongodb+srv://sayu1511:Nw2tRijkS861zY3d@cluster0.a41aej1.mongodb.net/appDataBase?retryWrites=true&w=majority")
        await mongoose.connect("mongodb://sayu1511:Nw2tRijkS861zY3d@ac-apvnplq-shard-00-00.a41aej1.mongodb.net:27017,ac-apvnplq-shard-00-01.a41aej1.mongodb.net:27017,ac-apvnplq-shard-00-02.a41aej1.mongodb.net:27017/appDataBase?ssl=true&replicaSet=atlas-tfgmtr-shard-0&authSource=admin&retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")
    } catch(err) {
        console.log("Failure: Unconnected to MongoDB", err)
        throw new Error()
    }
}

export default connectDB