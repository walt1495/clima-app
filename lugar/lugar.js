const axios = require('axios');

let getLugarLtLng = async(direccion) => {

    let direccionURL = encodeURI(direccion);
    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccionURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la cuidad ${direccion}`);
    }
    return {
        direccion: res.data.results[0].formatted_address,
        lt: res.data.results[0].geometry.location.lat,
        lng: res.data.results[0].geometry.location.lng
    };

    // .then((res) => {
    //     //LOS DATOS A CONVERTIR A JSON,
    //     //HACER REEMPLAZOS
    //     //EL ESPACIADO QUE LE VAMOS A ASIGNAR AL JSON
    //     // console.log(JSON.stringify(res.data, undefined, 2));

    //     console.log('Direccion: ', res.data.results[0].formatted_address);
    //     console.log('Latitud: ', res.data.results[0].geometry.location.lat);
    //     console.log('Longitud: ', res.data.results[0].geometry.location.lng);
    // })
    // .catch((error) => console.log('Error...', error));
}

module.exports = {
    getLugarLtLng
}