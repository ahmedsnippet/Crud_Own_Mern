import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import { errorHandler } from "./src/Utils/errorMiddleware.js"
import router from "./src/Routers/crudRouter.js"


const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/crud", router)

app.use(errorHandler)
export default app