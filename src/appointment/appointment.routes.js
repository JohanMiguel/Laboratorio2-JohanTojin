import { Router } from "express";
import { saveAppointment, getAppointment, updateAppointment, cancelAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

// Ruta para crear cita
router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/", getAppointment);
router.patch("/updateAppointment/:uid", updateAppointment);
router.patch("/cancelAppointment/:uid", cancelAppointment); 
export default router;