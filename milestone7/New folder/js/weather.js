//don't do that
//95f085faa051921d452dd54d55359406

const API_KEY = `95f085faa051921d452dd54d55359406`;
const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const displayTemperature = data => {
    // const temperature = document.getElementById('temperature')
    // console.log(data.main.temp);
    // temperature.innerText = data.main.temp
    console.log(data.weather[0].main)
    setInnerText(data.weather[0].main)
    setInnerText(temperature,data.main.temp)
}
// const setInnerText=(id,text)=>{
//     const temperature = document.getElementById('temperature')
//     temperature.innerText =text;

// }
// document.getElementById('btn-search').addEventListener('click', function () {
//     const searchfield = document.getElementById('search-field')
//     const city = searchfield.value;
//     //city
//     document.getElementById('city').innerText=city;
//     loadTemperature(city);

// })
// loadTemperature('dhaka');