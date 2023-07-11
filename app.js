const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')
const colors = require('colors')

// const [, , , arg3 = 'base=5' ] = process.argv
// const [, base = 5] = arg3.split('=')
// console.log(base)

// const base=9;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreDelArchivo) => console.log(nombreDelArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
