const axios = require('axios');

const getClima = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9a85995b9dff38bd4b350857f8c019b8`;
    // console.log(url);
    let res = await axios.get(url);

    return res.data.main.temp
}

module.exports = {
    getClima
}