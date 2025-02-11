import { Router } from "express";
import { saveAppointment, getAppointment, actualizarAppoinment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

// Ruta para crear cita
router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/", getAppointment);
router.patch("/actualizarAppoinment/:uid", updateAppointmentValidator, actualizarAppoinment)
export default router;