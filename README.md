# API del Sistema de Adopción

Esta API está diseñada para gestionar citas para adopciones de mascotas. Permite crear, actualizar y listar citas, así como gestionar la información del usuario.

### Documentación: Johan Tojin - 2020591

---

## Funcionalidades Principales

### 1. **Actualizar Foto del Usuario**
   - **Descripción:** Permite actualizar la foto de perfil de un usuario.

   - **URL:** `/adoptionSystem/v1/auth/updateProfilePicture`
   - **Método:** `PATCH`
   - **Estado:** [ ] Pendiente | [x] Completado

---

### 2. **Listar Citas**
   - **Descripción:** Obtiene una lista de todas las citas de un usuario.

   - **URL:** `/adoptionSystem/v1/appointment/`
   - **Método:** `POST`
   - **Estado:** [ ] Pendiente | [x] Completado

---

### 3. **Actualizar Cita**
   - **Descripción:** Actualiza una cita existente.

   - **URL:** `/adoptionSystem/v1/appointment/actualizarAppoinment`
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
   
   - **URL:** `/adoptionSystem/v1/appointment/cancelarAppoinment`
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
### Uso de middlewares
### Uso de controladores
### Uso de archivo de rutas para cada entidad

---

## Derechos de Autor

© 2025 Johan Tojin. Todos los derechos reservados.  
Este proyecto fue dato en la mayor parte realizado por Braulio Echeverria, consistiendo como un proyecto que sus 
alumnos tubieron que realizar en su devido tiempo, usando dependencias externas para el funcionamiento de esa API
---

