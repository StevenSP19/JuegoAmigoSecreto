# Amigo Secreto

Este proyecto es una aplicación web sencilla para organizar el juego del "Amigo Secreto". Permite agregar nombres de amigos, mostrarlos en una lista y realizar un sorteo aleatorio para elegir al amigo secreto.

## Características

- Agregar nombres de amigos a una lista.
- Visualizar la lista de amigos agregados.
- Sortear un amigo secreto de forma aleatoria.
- Limpiar la lista automáticamente después de cada sorteo para empezar de nuevo.

## Uso

1. Escribe el nombre de un amigo en el campo de texto y haz clic en "Añadir".
2. Repite el proceso para todos los participantes.
3. Haz clic en "Sortear amigo" para elegir un amigo secreto al azar.
4. La lista se limpiará automáticamente después del sorteo.

## Estructura de archivos

- `index.html`: Estructura principal de la página.
- `style.css`: Estilos visuales de la aplicación.
- `app.js`: Lógica de la aplicación.

## Funciones principales (`app.js`)

- **agregarAmigo**: Agrega un nombre al arreglo de amigos si el campo no está vacío, actualiza la lista en pantalla y limpia el campo de texto.
- **mostrarListaAmigos**: Muestra todos los nombres agregados en el listado de la página.
- **limpiarCampos**: Limpia el campo de texto después de agregar un nombre.
- **limpiarlista**: Borra la lista visual y vacía el arreglo de amigos.
- **sortearAmigo**: Elige un amigo aleatorio, muestra el resultado y limpia la lista para empezar de nuevo.
