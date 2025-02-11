# API del Sistema de Adopción

Esta API está diseñada para gestionar citas para adopciones de mascotas. Permite crear, actualizar y listar citas, así como gestionar la información del usuario.

### Documentación: Johan Tojin - 2020591

---

## Funcionalidades Principales

### 1. **Actualizar Foto del Usuario**
   - **Descripción:** Permite actualizar la foto de perfil de un usuario.
   - **URL:** `/api/appointments/updateProfilePicture`
   - **Método:** `PATCH`
   - **Estado:** [ ] Pendiente | [x] Completado

---

### 2. **Listar Citas**
   - **Descripción:** Obtiene una lista de todas las citas de un usuario.
   - **URL:** `/api/appointments/appointment/`
   - **Método:** `POST`
   - **Estado:** [ ] Pendiente | [x] Completado

---

### 3. **Actualizar Cita**
   - **Descripción:** Actualiza una cita existente.
   - **URL:** `/api/appointments/appointment/actualizarAppoinment`
   - **Método:** `PUT`
   - **Cuerpo de la solicitud:**
     ```json
     {
       "date": "2023-10-15",
       "pet": "<pet_id>",
       "user": "<user_id>"
     }
     ```
   - **Estado:** [x] Completado | [ ] Pendiente

---

### 4. **Cancelar Cita**
   - **Descripción:** Cancela una cita existente.
   - **URL:** `/api/appointments/appointment/cancelarAppoinment`
   - **Método:** `PATCH`
   - **Cuerpo de la solicitud:**
     ```json
     {
       "status": "CREATED"
     }
     ```
   - **Estado:** [ ] Pendiente | [x] Completado

---

## Funcionalidades Adicionales


---
