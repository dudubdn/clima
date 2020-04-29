const axios = require('axios');
const APIKey = '7d957bd8d59d68fbd86a415152659dd1';
const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}