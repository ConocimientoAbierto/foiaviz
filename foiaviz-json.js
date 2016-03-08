//npm install jsonfile, iconv-lite

var jf = require('jsonfile');
var iconv = require('iconv-lite');
var file = './acceso-informacion-publica-json.json';
var json = jf.readFileSync(file);

var ministerios = [];

for (item in json) {
	var organismo_informante = iconv.decode(new Buffer(json[item].organismo_informante), 'ISO-8859-1');
	var estado = iconv.decode(new Buffer(json[item].estado), 'ISO-8859-1');

	if (!ministerios[organismo_informante]) {
		ministerios[organismo_informante] = {};
	}
	if (!ministerios[organismo_informante][estado]) {
		ministerios[organismo_informante][estado] = 0;
	}
	ministerios[organismo_informante][estado] ++;
}

console.log(ministerios)

