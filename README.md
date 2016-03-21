# foiaviz
Visualización de las Solicitudes de Acceso a la Información del portal @datosgobar

El archivo viz.js toma el CSV del portal de datos abiertos:
http://datos.gob.ar/dataset/8bc053c8-efc2-485d-97d3-915c476d2741/resource/63952097-cdba-4fdd-be84-65fb400bdb1a/download/acceso-informacion-publica.csv

## Requerimientos
Usa la libreria d3.js del sitio oficial (d3js.org/d3.v3.min.js)

La visualización intenta exponer la cantidad de pedidos de información por ministerio y los estados de las respuestas a estos pedidos.
Al pasar el mouse sobre cada circulo se muestra el organizmo informante correspondiente.