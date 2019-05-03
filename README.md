# Tic Tac Toe (Tres en raya)

Juego sencillo desarrollado en PHP (OOP) para la lógica y manejo de datos, jQuery para llamadas asíncronas y MySQL para almacenamiento de datos.
El desarrollo fue hecho en Windows, usando Laragon como web server.

# Instrucciones para instalar

- Si se utiliza Laragon o cualquier otro web server WAMP (en Windows), copiar la carpeta "tictactoe" en el directorio
raíz. Si se utiliza un stack LAMP (en Linux), copiar el directorio en el directorio /var/www/.
- Correr el dump create_db.sql en el administrador de base de datos (PHPMyAdmin, HeidiSQL, etc) para crear la base de datos.
- Correr el dump create_user.sql para crear el usuario y sus permisos para conectar la aplicación.
- Configurar el web server para correr en localhost con la url deseada.


# Instrucciones de juego

- Si no hay partidas guardadas en base de datos, saldrá una alerta indicando que de debe crear la partida.
- Dos jugadores juegan en el mismo ordenador, alternando turnos.
- Al hacer click en una de las celdas, se asignara X u O, dependiendo del jugador en turno.
- Se notificará si el juego tiene ganador o si resulta en empate.
- Una vez terminada la partida, se puede crear una nueva.
- Se guarda el estado de la última partida jugada, así que se puede retomar luego.

