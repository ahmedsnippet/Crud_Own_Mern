import { Crud } from "../Models/crudModel.js"
import { asyncHandler } from "../Utils/asyncHandler.js"
import { apiError } from "../Utils/errorMiddleware.js"


const createController = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, phone } = req.body
    if (!firstName || !lastName || !email || !phone) {
        return next(new apiError("All Fields Required", 400))
    }
    const createData = await Crud.create({
        firstName,
        lastName,
        email,
        phone
    })

    return res.status(201).json({
        success: true,
        message: "Data Created Successfully",
        createData
    })

})

const readController = asyncHandler(async (req, res, next) => {
    const readData = await Crud.find()
    res.status(200).json({
        success: true,
        readData
    })
})

const updateController = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const updateData = await Crud.findById(id)
    if (!updateData) {
        return next(new apiError("Oops! No Data Found", 404))
    }
    const updatedData = await Crud.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(200).json({
        success: true,
        message: "Data Updated Successfully",
        updatedData
    })
})
const deleteController = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const deleteData = await Crud.findById(id)
    if (!deleteData) {
        return next(new apiError("Oops! No Data Found", 404))
    }
    //const deletedData = await Crud.findByIdAndDelete(id)
    await deleteData.deleteOne()
    res.status(200).json({
        success: true,
        message: "Data Deleted Successfully"
    })
})
// To Update Task First We Get This Than We Update The Task
const readSingleController = asyncHandler(async (req, res, nex) => {
    const { id } = req.params
    const single = await Crud.findById(id)
    res.status(200).json({
        success: true,
        single
    })
})

export { createController, readController, updateController, deleteController, readSingleController }