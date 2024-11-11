import express from "express"
import { createController, deleteController, readController, readSingleController, updateController } from "../Controllers/crudController.js";

const router = express.Router()

router.post("/create", createController)
router.get("/read", readController)
router.put("/update/:id", updateController)
router.delete("/delete/:id", deleteController)
router.get("/single/:id", readSingleController)

export default router