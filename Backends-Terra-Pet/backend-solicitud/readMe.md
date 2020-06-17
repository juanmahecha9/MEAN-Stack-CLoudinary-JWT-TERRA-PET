// Documento de configuracion de puertos, binding o ip para su restriccion
const config = require('./config/config.json');
/*Configuracion del puerto y del bind */
app.set('port', process.env.PORT ? process.env.PORT : config.app.port ? config.app.port : 3000);
app.set('bind', process.env.BIND ? process.env.BIND : config.app.bind ? config.app.bind : '127.0.0.1');


**************
Instalacion y ejecucion de dependecnias paraque el flujo del desarrollo sea fluido y facil:
npm i nodemon -D

-Nodemon perimite reinicar el servidor automaticamente al realizar cambios en elbackend.

nodemon se ejecuta en el programa como npm run dev

Para inicializar el programa, toca instalar los modulos de npm usando la instrucción:
npm i ó npm install
Con esta instrucción se instalan los modulos que se requieren para el programa:

-Express para generar el servidor
-Path para proveer varias utilidades para trabajar con ficheros y directorios, en este caso lo usamos paraejecutar la carpeta views donde se encuentran los aechivos HTML y SCSS (CSS)
-Morgan para ver las respuestas del proceso de ida y vuelta del servidor, calcula el tiempo necesario para cada proceso .
-Bcrypt algoritmo de cifrado, para no guardar las contraseñas tal cual, sino para mantener seguto los datos.
-Mongoose perimite manejar la base de datos mongo y provee un esquema.
-Nodemailer es la libreria que me genera los permisos y los metodos para envio de correo electronico

*******************
En el archivo app.js, se hace el llamado de un archivo llamado config.json, el cual posee todas las configuraciones necesarias para el funcinamiento del proyecto, en este caso por el momento esta con unos accesos a cookies y los puertos designados para su funcionamiento.

*******************
Backend, carpeta que contiene toda la logica del registro, encontramos dentro de ella:
Config: contiene el archivo de configuracion de los puertos, el bind y las cookies
Controller: contiene el programa de funciones que se requieren en el index
Database: contiene la configuracion de la base de datos
Helpers: Envio del correo por registro
Models: contiene el modelos de datos para el usuario
Private: contiene la configuracion y variables de la base de datos local, en la nube y las variables de autenticacion del correo
Public
Routes: contiene el archivo de rutas
Server: contiene el archivo del servidor
app.js es el archivo que principal que llama todo lo anteriorn

***************************

Frontend

-En el index principal se agregan las letras que acordamos a usar (ya solo es llamarla en el CSS de cada de nuestro componentes)
-En el css principal puse un normalizador de css: Esto es para resetear los estilos generales
-Se agrega la carpeta "img" dentro de la carpeta "assets", aquí dentro van los recursos estatico de la página (imagenes, iconos etc)
-Se borra todo el código que viene por defecto en el componente principal (app.component.html)