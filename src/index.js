let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// Day and Time
let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[currentTime.getDay()];
let day = document.querySelector("#day");
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
day.innerHTML = `${today} ${hour}:${minutes}`;

// for display search input
function city(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let heading = document.querySelector("h1");
  heading.innerHTML = searchInput.value;
}
let inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", city);


// units


function celsius(event) {
  event.preventDefault();
  let tempNum = document.querySelector("#temp-num");
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  city = city.trim().toLowerCase().replace("san francisco", "sanfrancisco");
  let heading = document.querySelector("h1");
  
  if (city === "paris" && city.length > 0) {
      tempNum.innerHTML = `${Math.floor(weather.paris.temp)}`;
  } else if (city === "tokyo" && city.length > 0) {
    tempNum.innerHTML = `${Math.floor(weather.tokyo.temp)}`;
  } else if (city === "lisbon" && city.length > 0) {
   tempNum.innerHTML = `${Math.floor(weather.lisbon.temp)}`; 
  } else if (city === "sanfrancisco" && city.length > 0) {
    tempNum.innerHTML = `${Math.floor(weather["san francisco"].temp)}`;
  } else if (city === "oslo" && city.length > 0) {
    tempNum.innerHTML = `${Math.floor(weather.oslo.temp)}`;
  } 
}

let degreeCelsius = document.querySelector("#degree-celsius");
degreeCelsius.addEventListener("click", celsius);


function fahrenheit(event) {
  event.preventDefault();
  let tempNum = document.querySelector("#temp-num");
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  city = city.trim().toLowerCase().replace("san francisco", "sanfrancisco");
  if (city === "paris" && city.length > 0) {
  tempNum.innerHTML = ` ${Math.floor((Math.floor(weather.paris.temp) * 9) / 5 + 32)}`;   
  } else if (city === "tokyo" && city.length > 0 ) {
    tempNum.innerHTML = `${Math.floor((Math.floor(weather.tokyo.temp) * 9) / 5 + 32)}`;
  } else if (city === "lisbon" && city.length > 0 ) {
    tempNum.innerHTML = ` ${Math.floor((Math.floor(weather.lisbon.temp) * 9) / 5 + 32)}`;
  } else if (city === "sanfrancisco" && city.length > 0) {
    tempNum.innerHTML = `${Math.floor((Math.floor(weather["san francisco"].temp) * 9) / 5 + 32)}`;
  } else if (city === "oslo" && city.length > 0) {
    tempNum.innerHTML = `${Math.floor((Math.floor(weather.oslo.temp) * 9) / 5 + 32)}`;
  } 
}

let degreeFahrenheit = document.querySelector("#degree-fahrenheit");
degreeFahrenheit.addEventListener("click", fahrenheit);


/*

  } else if (city === "tokyo") {
    alert(
      `It is currently ${Math.floor(weather.tokyo.temp)}°C (${Math.floor(
        (Math.floor(weather.tokyo.temp) * 9) / 5 + 32
      )}°F) in Tokyo with a humidity of ${weather.tokyo.humidity} %`
    );
  } else if (city === "lisbon") {
    alert(
      `It is currently ${Math.floor(weather.lisbon.temp)}°C (${Math.floor(
        (Math.floor(weather.lisbon.temp) * 9) / 5 + 32
      )}°F) in Lisbon with a humidity of ${weather.lisbon.humidity} %`
    );
  } else if (city === "sanfrancisco") {
    alert(
      `It is currently
     ${Math.floor(weather["san francisco"].temp)}°C (${Math.floor(
        (Math.floor(weather["san francisco"].temp) * 9) / 5 + 32
      )}°F) in San Francisco with a humidity of ${
        weather["san francisco"].humidity
      } %`
    );
  } else if (city === "oslo") {
    alert(
      `It is currently ${Math.floor(weather.oslo.temp)}°C (${Math.floor(
        (Math.floor(weather.oslo.temp) * 9) / 5 + 32
      )}°F) in Oslo with a humidity of ${weather.oslo.humidity} %`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
} else {
  alert("You didnt input a city");
}
*/
