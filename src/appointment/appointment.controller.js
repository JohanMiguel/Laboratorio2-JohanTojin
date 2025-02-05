import Pet from "../pet/pet.model.js";
//import User from "../user/usser.model.js"
import Appointment from "../appointment/appointment.model.js";
import { parse } from "date-fns";


/*GUARDAR CITA*/
export const saveAppointment = async (req, res) => {
  try {
    const data = req.body;

    const isoDate = new Date(data.date);

    if (isNaN(isoDate.getTime())) {
      return res.status(400).json({
        success: false,
        msg: "Fecha inválida",
      });
    }

    const pet = await Pet.findOne({ _id: data.pet });
    if (!pet) {
      return res.status(404).json({ 
        success: false, 
        msg: "No se encontró la mascota" 
      });
    }

    const existAppointment = await Appointment.findOne({
      pet: data.pet,
      user: data.user,
      date: {
        $gte: new Date(isoDate).setHours(0, 0, 0, 0),
        $lt: new Date(isoDate).setHours(23, 59, 59, 999),
      },
    });

    if (existAppointment) {
      return res.status(400).json({
        success: false,
        msg: "El usuario y la mascota ya tienen una cita para este día",
      });
    }

    const appointment = new Appointment({ ...data, date: isoDate });
    await appointment.save();

    return res.status(200).json({
      success: true,
      msg: `Cita creada exitosamente en fecha ${data.date}`,
    });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
      success: false, 
      msg: "Error al crear la cita", 
      error 
    });
  }
}

/* LISTAR CITAS */
export const getAppointment = async (req, res) => {
  const { limite = 10, desde = 0 } = req.query;
  const query = { status: true };

  try {
    const appointments = await Appointment.find(query)
      .skip(Number(desde))
      .limit(Number(limite));

    const appointmentsWithOwnerNames = await Promise.all(appointments.map(async (appointment) => {
      const owner = await User.findById(appointment.keeper); 
      return {
        ...appointment.toObject(),
        keeper: owner ? owner.nombre : "Propietario no encontrado",
      };
    }));

    const total = await Appointment.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      appointments: appointmentsWithOwnerNames,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las citas',
      error,
    });
  }
}

/* ACTUALIZAR CITA */
export const updateAppointment = async (req, res) => {
  try {
    const { uid } = req.params;
    const { date, status, pet, user } = req.body; 

    // Valida la nueva fecha
    const isoDate = new Date(date);
    if (isNaN(isoDate.getTime())) {
      return res.status(400).json({
        success: false,
        msg: "Fecha inválida",
      });
    }

    // Verifica si la cita existe
    const appointment = await Appointment.findById(uid);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        msg: "Cita no encontrada",
      });
    }

    // Verificar si la mascota existe
    const petExists = await Pet.findById(pet);
    if (!petExists) {
      return res.status(404).json({
        success: false,
        msg: "No se encontró la mascota",
      });
    }

   

    // Actualizar la cita
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      { date: isoDate, status, pet, user }, 
      { new: true }
    );
    res.status(200).json({
      success: true,
      msg: "Cita actualizada con éxito",
      updatedAppointment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      msg: "Error al actualizar la cita",
      error: error.message,
    });
  }
};
/* CANCELAR CITA */
export const cancelAppointment = async (req, res) => {
  try {
    const { uid } = req.params; 

    const appointment = await Appointment.findById(uid);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        msg: "Cita no encontrada",
      });
    }

    if (appointment.status === 'CANCELLED') {
      return res.status(400).json({
        success: false,
        msg: "La cita ya está cancelada",
      });
    }

    if (appointment.status === 'COMPLETED') {
      return res.status(400).json({
        success: false,
        msg: "La cita ya está completada y no puede cancelarse",
      });
    }

    appointment.status = 'CANCELLED';
    await appointment.save(); 

    // Respuesta exitosa
    res.status(200).json({
      success: true,
      msg: "Cita cancelada con éxito",
      appointment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      msg: "Error al cancelar la cita",
      error: error.message,
    });
  }
};
