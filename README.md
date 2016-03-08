# foiaviz
Visualización de las Solicitudes de Acceso a la Información del portal @datosgobar

El archivo foiaviz-remote.js toma el CSV del portal de datos abiertos:
http://datos.gob.ar/dataset/8bc053c8-efc2-485d-97d3-915c476d2741/resource/63952097-cdba-4fdd-be84-65fb400bdb1a/download/acceso-informacion-publica.csv

## Requerimientos
sudo apt-get install nodejs
npm install request csv-parse

## Ejecutarlo
`nodejs foiaviz-remote.js > ministerios.json`

Esto resulta en un JSON que resume los estados por ministerio. Pueden verlo acá:
https://github.com/ConocimientoAbierto/foiaviz/blob/master/ministerios.json

La idea es armar una visualización con eso, pero está incipiente en este html:
https://github.com/ConocimientoAbierto/foiaviz/blob/master/viz.html

Se acepan colaboraciones.
