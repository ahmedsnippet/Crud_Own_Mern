import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Crud"
        })
        console.log(`SERVER IS LISTENING AT HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`SOME ERROR OCCUR WHILE CONNECTING TO DATABASE ${error}`)
    }
}
export default connectDB