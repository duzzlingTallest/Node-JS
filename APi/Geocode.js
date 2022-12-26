const axios = require('axios');
// const weather = require('./Wheather')
const Geocode = () => {
  const city = 'Surat,Gujarat';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=725b1290c1344ab4b72341d421e6c994`;

  axios.get(url).then((result) => {
    const data = result.data
    // const lat = data.lat
    // const lon = data.lon
    console.log(data)
  }).catch((err) => {
    console.log(err);
  })
};

Geocode()

