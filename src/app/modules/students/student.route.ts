import express from "express"
import { StudentControllers } from "./student.controller";

const router = express.Router();


// will call controller func
router.post("/student-create", StudentControllers.crearteStudent)