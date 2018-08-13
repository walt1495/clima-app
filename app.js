const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;

let obtenerinfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLtLng(direccion);
        let temp = await clima.getClima(coors.lt, coors.lng);

        return `El clima para ${coors.direccion} es de ${temp} grados celcius.`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

obtenerinfo(argv.direccion).then((res) => console.log(res))
    .catch(e => console.log(e));