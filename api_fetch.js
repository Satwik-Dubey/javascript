const button = document.getElementById("searchbtn");
const input = document.getElementById("city_in");
const cityname = document.getElementById("city-name");
const citytime = document.getElementById("city-time");
const citytemp = document.getElementById("city-temp");
//http://api.weatherapi.com/v1/current.json?key=294bd8624e10463aa65130402242206&q=London&aqi=no

async function getdata(cityname) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=294bd8624e10463aa65130402242206&q=${cityname}&aqi=no`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getdata(value);
  cityname.innerText = `${result.location.name},${result.location.country}`;
  cityname.innerText = result.location.localtime;
  cityname.innerText = resultcurrent.temp_c;

  console.log(result);
});

console.log("testing");


<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <script src="script.js"></script>
    <div>
      <input id="city_in" type="text" placeholder="Enter city name" />
      <button id="searchbtn">Search</button>
    </div>
    <div>
      <h3 id="city-name">Canada</h3>
      <h3 id="city-time">localtime</h3>
      <h3 id="city-temp">34</h3>
    </div>
  </body>
</html>
