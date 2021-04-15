 
  var apikey = "845b1af3a6b8cbed55f2fe8ef1e09d1e"
  
  
  // create funtion to call api and get weather data

  function getApi() {
    
    var requestUrl ="http://api.openweathermap.org/data/2.5/weather?q=ottawa&appid="+ apikey+"&units=metric";
    
    fetch(requestUrl)
      .then(function (response) {  
        return response.json().then(function (data) {
          console.log(data)
        console.log(data.name)
        const citys = `
  <div class="city">
<h2>${data.name}</h2>
<p>Temperature  = ${data.main.temp}</p>
<p>Humidity = ${data.main.humidity}%</p>
<p>Wind Speed = ${data.wind.speed} KPH</p>
  </div>
`;
const cityName = document.getElementById("weatherCurrent");
  
cityName.innerHTML = citys;
  })})};
    getApi()
    
  

    function getFiveDay() {
    
        var requestUrl ="http://api.openweathermap.org/data/2.5/forecast?q=ottawa&cnt=5&appid="+apikey+"&units=metric";
        
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data)}
          )};
        getFiveDay()


