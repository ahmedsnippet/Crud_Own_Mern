import connectDB from "./src/Database/dbConnection.js";
import dotenv from "dotenv";
import app from "./app.js"

dotenv.config({
    path: "./.env"
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 800, () => {
            console.log("SERVER IS LISTENING AT PORT : ", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })