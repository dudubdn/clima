const axios = require('axios');
const getLugarLatLng = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'f40da45b15msh541b42c2b1c7b11p1795c8jsn305bf4ce0b30' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = respuesta.data.Results[0]
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        dir,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}