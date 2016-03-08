//npm install fs csv

var fs = require('fs');
var csv = require('csv');
var parser = csv.parse();

var file = 'http://datos.gob.ar/dataset/8bc053c8-efc2-485d-97d3-915c476d2741/resource/63952097-cdba-4fdd-be84-65fb400bdb1a/download/acceso-informacion-publica.csv';
fs.createReadStream(file).pipe(parser)

var ministerios = [];


parser.on('readable', function(){
  while(data = parser.read()){

    var organismo_informante = data[4]
    var estado = data[3]

    if (!ministerios[organismo_informante]) {
      ministerios[organismo_informante] = {};
    }
    if (!ministerios[organismo_informante][estado]) {
      ministerios[organismo_informante][estado] = 0;
    }
    ministerios[organismo_informante][estado] ++;
      
  }
});


parser.on('finish', function() {
    console.log(ministerios);
}) 