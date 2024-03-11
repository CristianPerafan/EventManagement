# **Taller NodeJS**

- Juan David Bahamón
- Cristian Perafan
- Juan Sebastian Medina

## Descripción

Este repositorio contiene la solución al taller de NodeJS. En este taller, se desarrolla una aplicación backend  utilizando Node.js con TypeScript para un tipado fuerte y MongoDB para la persistencia de datos.

La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en usuarios y grupos, manejar la autenticación de usuarios y permitir la asociación entre usuarios y grupos, así como la consulta de dichas asociaciones. 

Para mantener una arquitectura RESTful, se siguen las convenciones de rutas utilizando los verbos HTTP adecuados para cada operación. Puedes encontrar más información sobre rutas RESTful en este artículo.

## Instalación

Para instalar la aplicación, es necesario tener instalado Node.js y npm. Luego, se deben seguir los siguientes pasos:

1. Clonar el repositorio

```bash
git clone https://github.com/CristianPerafan/Dilibit-engine.git
```

2. Instalar las dependencias

```bash
npm install
```

3. Crear un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```env
PORT = 3000
MONGO_URL= mongodb+srv://admin:admin@cluster0.zrlx5t6.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=askdhkjafuagfiuoasgfiuog
```

4. Ejecutar la aplicación

```bash
npm run dev
```

## Funcionalidades y rutas
Se desarrollaron las siguientes funcionalidades:
Las funcionalidades creadas en estas rutas son las siguientes:

1. **Creación de usuarios**: Permite crear un nuevo usuario enviando una solicitud  POST a la ruta '/users'.

El cuerpo de la solicitud debe contener la siguiente información:

```json
{
    "name" :" jhon doe",
    "email":"jhondoe@mail.com",
    "password":"12345678",
    "role":"organizer"
}
```

El campo 'role' puede ser 'organizer' o 'attendee'. Si no se especifica, el valor por defecto es 'attendee'.

2. **Actualización de usuarios por ID**: Permite actualizar la información de un usuario específico enviando una solicitud PUT a la ruta '/users/:id', donde ':id' es el identificador único del usuario.

El cuerpo de la solicitud debe contener la información a actualizar. Por ejemplo, para actualizar el nombre y el correo electrónico de un usuario, el cuerpo de la solicitud debe contener la siguiente información:

```json
{
    "name" :" jhon doe",
    "email":"
}
```

3. **Eliminación de usuarios por ID**: Permite eliminar un usuario específico enviando una solicitud HTTP DELETE a la ruta '/users/:id', donde ':id' es el identificador único del usuario a eliminar. 


4. **Obtención de eventos por usuario**: Permite obtener los eventos asociados a un usuario específico enviando una solicitud HTTP GET a la ruta '/users/:email/events', donde ':email' es el correo electrónico del usuario. 


5. **Inicio de sesión de usuario**: Permite que un usuario inicie sesión enviando una solicitud HTTP POST a la ruta '/login'. Si la autenticación es exitosa, se devuelve un token de autenticación que debe ser utilizado en las rutas protegidas.

El cuerpo de la solicitud debe contener la siguiente información:

```json
{
    "email":"jhondoe@mail.com"
    "password":"12345678"
}
```

6. **Creación de eventos**: Permite crear un nuevo evento enviando una solicitud  POST a la ruta '/event/create'. 

El cuerpo de la solicitud debe contener la siguiente información:

```json
{
    "title": "Taller de Inteligencia Artificial",
    "description": "Un taller práctico sobre el desarrollo de aplicaciones de inteligencia artificial.",
    "location": "Universidad Nacional",
    "date" : "2024-04-20",
    "type": "Tecnología"
}
```
7. **Listar eventos disponibles**: Permite listar los eventos disponibles por fecha, ubicación o tipo de evento, enviando una solicitud GET a las rutas '/events/filter/date', '/events/filter/location', '/events/filter/type'.

Pasando como parámetro la llave y el valor a filtrar.

8. **Actualización de eventos por ID**: Permite actualizar la información de un evento específico enviando una solicitud PUT a la ruta '/event/update/:id', donde ':id' es el identificador único del evento. 

El cuerpo de la solicitud debe contener la información a actualizar:

```json
{
    "title": "Taller de Inteligencia Artificial",
    "description": "Un taller práctico sobre el desarrollo de aplicaciones de inteligencia artificial."
}
```

9. **Eliminación de eventos por ID**: Permite eliminar un evento específico enviando una solicitud HTTP DELETE a la ruta '/event/delete/:id', donde ':id' es el identificador único del evento a eliminar.

10. **Suscripción a eventos**: Permite que un usuario se suscriba a un evento específico enviando una solicitud HTTP POST a la ruta '/event/:event_id/subscribe', donde ':event_id' es el identificador único del evento al que se desea suscribir. 

11. **Obtención de asistentes a un evento**: Permite obtener la lista de asistentes a un evento específico enviando una solicitud HTTP GET a la ruta '/event/:event_id/attendees', donde ':event_id' es el identificador único del evento del que se desea obtener la lista de asistentes. 


# Deploy
El deploy de la aplicación se realizó en Vervel, el cual se puede encontrar en el siguiente enlace:

[![Deploy with Vercel](https://vercel.com/button)](https://event-management-nine.vercel.app/)
