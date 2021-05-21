# Manual de instrucciones

## React

Antes de ejecutar la aplicación es necesario que todos los módulos de node estén instalados. Por ello debemos ejecutar:

```
npm install
```

Una vez hecho esto podemos ejecutar la aplicación de React con el siguiente comando:

```
npm start
```

Podemos acceder al cliente a través de la URL http://localhost:3000/.

## JSON-Server

Es necesario lanzar también el servidor de JSON que actúa como backend de la aplicación. De esta forma el cliente React puede recuperar el listado con los concesionarios. El fichero db.json que actúa como base de datos se encuentra en la raíz del proyecto.

```
json-server --watch db.json --port 3001
```

Este servicio se encuentra accesible en la URL http://localhost:3001/data.

## Uso de la aplicación

El listado con los concesionarios se encuentra en http://localhost:3000/. Puede filtrarse este listado si se especifica un nombre de concesionario o una provincia en el panel de arriba.

Para ver los detalles de un concesionario debemos hacer click sobre la fila sobre la que queremos obtener información más detallada.
