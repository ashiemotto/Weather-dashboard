





  var apikey = "845b1af3a6b8cbed55f2fe8ef1e09d1e"
  
  const time = moment().format("dddd, MMMM Do YYYY");
  //const icon = 
  // create funtion to call api and get weather data

  function getApi() {
     // sets id of cityId to get weather for input 
    const cityId= localStorage.getItem("currentCity") 
    var requestUrl ="https://api.openweathermap.org/data/2.5/weather?q="+cityId+"&appid="+ apikey+"&units=metric";
    fetch(requestUrl)
      .then(function (response) {  
        return response.json().then(function (data) {
          console.log(data)
        console.log(data.name)
        
        const citys = `
  <div class="city">
<h2>${data.name} ${time} </h2>
<img src= "https//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
<p>Temperature  = ${data.main.temp}</p>
<p>Humidity = ${data.main.humidity}%</p>
<p>Wind Speed = ${data.wind.speed} KPH</p>
  </div>
`;
console.log(data.weather[0].icon)
const cityName = document.getElementById("weatherCurrent");
cityName.innerHTML = citys;


// create const for log and lat to get 5 day forcast
const lon = data.coord.lon;
const lat = data.coord.lat ;
// create function to get 5 day forcast
function getFiveDay() {
    
  var requestUrl ="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,hourly&appid="+apikey+"&units=metric";
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json().then(function (fiveData) {
      console.log(fiveData)
      // day 1 box header
      const firstDay = `
      <div>
      <h2>${moment.unix(fiveData.daily[0].dt).format("MMM D, YYYY")}</h2>
      </div>`;
      const dayOne = document.querySelector("#cityBox1");
      dayOne.innerHTML = firstDay;
      // day 1 content
      const day1 = `
      <div>
      <p>Temperature  = ${fiveData.daily[0].temp.day}</p>
      <p>Humidity = ${fiveData.daily[0].humidity}%</p>
      <img src= "https://openweathermap.org/img/wn/${fiveData.daily[0].weather[0].icon}@2x.png">
       </div>
      `;
      const weather1 = document.getElementById("day1");
      weather1.innerHTML = day1;
//day 2 bax header text
      const secondDay = `
      <div>
      <h2>${moment.unix(fiveData.daily[1].dt).format("MMM D, YYYY")}</h2>
      </div>`;
      const dayTwo = document.querySelector("#cityBox2");
      dayTwo.innerHTML = secondDay;
      // day 2 content
      const day2 = `
      <div>
      <p>Temperature  = ${fiveData.daily[1].temp.day}</p>
      <p>Humidity = ${fiveData.daily[1].humidity}%</p>
      <img src= "https://openweathermap.org/img/wn/${fiveData.daily[1].weather[0].icon}@2x.png">
       </div>
      `;
      const weather2 = document.getElementById("day2");
      weather2.innerHTML = day2;
// day 3 header
      const thirdDay = `
      <div>
      <h2>${moment.unix(fiveData.daily[2].dt).format("MMM D, YYYY")}</h2>
      </div>`;
      const dayThree = document.querySelector("#cityBox3");
      dayThree.innerHTML = thirdDay;
      // day 3 content
      const day3 = `
      <div>
      <p>Temperature  = ${fiveData.daily[2].temp.day}</p>
      <p>Humidity = ${fiveData.daily[2].humidity}%</p>
      <img src= "https://openweathermap.org/img/wn/${fiveData.daily[2].weather[0].icon}@2x.png">
       </div>
      `;
      const weather3 = document.getElementById("day3");
      weather3.innerHTML = day3;
//day 4 bax header 
      const forthDay = `
     <div>
      <h2>${moment.unix(fiveData.daily[3].dt).format("MMM D, YYYY")}</h2>
      </div>`;
     const dayFour = document.querySelector("#cityBox4");
      dayFour.innerHTML = forthDay;
      // day 4 content
      const day4 = `
      <div>
      <p>Temperature  = ${fiveData.daily[3].temp.day}</p>
      <p>Humidity = ${fiveData.daily[3].humidity}%</p>
      <img src= "https://openweathermap.org/img/wn/${fiveData.daily[3].weather[0].icon}@2x.png">
       </div>
      `;
      const weather4 = document.getElementById("day4");
      weather4.innerHTML = day4;
// day 5 box header
      const fifthDay = `
      <div>
      <h2>${moment.unix(fiveData.daily[4].dt).format("MMM D, YYYY")}</h2>
      </div>`;
      const dayFive = document.querySelector("#cityBox5");
      dayFive.innerHTML = fifthDay;
      // day 5 content
      const day5 = `
      <div>
      <p>Temperature  = ${fiveData.daily[4].temp.day}</p>
      <p>Humidity = ${fiveData.daily[4].humidity}%</p>
      <img src= "https://openweathermap.org/img/wn/${fiveData.daily[4].weather[0].icon}@2x.png">
       </div>
      `;
      const weather5 = document.getElementById("day5");
      weather5.innerHTML = day5;
// uv index
        
        function displayColour(){
        if (fiveData.current.uvi <=2){
          const UVI=
          `<div >
        <span class ="display favorable">
        </span>
        <p>UV = ${fiveData.current.uvi}</p>
        
        </div>
        `
        const index = document.getElementById("uv");
        index.innerHTML = UVI;
           
        }
      //   else if(index.value >2 && index.value<=8){
      //     display.classList = "moderate "
      //   }
      //   else if(index.value >8){
      //     display.classList = "severe"
      // } 
      ;}
        displayColour()
      })})};
      getFiveDay()
  })})};
  const cityArr =[]

$(".btn").on("click",function(){
  
    var newCity = $(".form-control").val().trim(); //grabbing input from text box
    
    cityArr.push(newCity);
    
    localStorage.setItem('cities', JSON.stringify(cityArr)); 
    localStorage.setItem("currentCity",newCity)
  
    $(".form-control").val("");
    
    getApi()
    newlist()
});

   

function newlist(){
  var city = localStorage.getItem("currentCity");
  var cityName = $(".list-group").addClass("list-group-item");

  cityName.append("<li>" + city + "</li>")}


