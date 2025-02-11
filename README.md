# API del Sistema de Adopción

Esta API está diseñada para gestionar citas para adopciones de mascotas. Incluye funcionalidades para crear, actualizar y listar citas, así como gestionar la información del usuario.

## Variables de Entorno

Cree un archivo `.env` en el directorio raíz y agregue las siguientes variables:

```
MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>
```

# Documentacion: Johan Tojin -2020591


## Funcionalidades Adicionales

Las siguientes funcionalidades necesitan ser desarrolladas:

1. **Actualizar Foto del Usuario**
   - Descripción: Implementar funcionalidad para actualizar la foto de perfil del usuario.
  - **URL:** `/api/appointments/updateProfilePicture`
  - **Método:** `patch`
  - **Cuerpo:**
 
2. **Listar Citas**
   - Descripción: Implementar funcionalidad para listar todas las citas de un usuario.
- **Listar Cita**
  - **URL:** `/api/appointments/appointment/`
  - **Método:** `POST`
  - **Cuerpo:**
    
3. **Actualizar Cita**
   - Descripción: Implementar funcionalidad para actualizar una cita existente.
- **Crear Cita**
  - **URL:** `/api/appointments/appointment/actualizarAppoinment`
  - **Método:** `put`
  - **Cuerpo:**
    ```json
    {
      "date": "2023-10-15T14:48:00.000Z",
      "pet": "<pet_id>",
      "user": "<user_id>"
    }
    ```
4. **Cancelar Cita**
   - Descripción: Implementar funcionalidad para cancelar una cita existente.
 - **URL:** `/api/appointments/appointment/cancelarAppoinment`
  - **Método:** `patch`
  - **Cuerpo:**
    ```json
    {
      "status": "CREATED",
    }
    ```


