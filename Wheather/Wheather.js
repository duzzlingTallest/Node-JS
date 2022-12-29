const axios = require('axios')
const Wheather = (lat, lon, callback) => {
    // const lat = 21.1702
    // const lon = 72.8311
    const API = '913a2479ae4cc43d7d8c11bd8c802a87';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
    axios.get(url).then((result) => {
        const data = result.data.main
        //console.log(data)
        const cityname = result.data.name
        
        callback({
            temp: data.temp,
            city: cityname,
            pressure:data.pressure
        })

    }).catch((err) => {
        console.log(err);
    })

}

module.exports = Wheather
// Wheather(21.1702,72.8311,function(res){
//     console.log(res)
// })

