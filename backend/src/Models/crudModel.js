import mongoose from "mongoose"


const crudSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)
export const Crud = mongoose.model("Crud", crudSchema)