const btn = document.getElementById("loc");

async function getdata(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=294bd8624e10463aa65130402242206&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}

async function gotLocation(position) {
  console.log(position);
  const result = await gotLocation(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}
function failedtoGet() {
  console.log("there was issue");
}

btn.addEventListener("click", async () => {
  const result = await navigator.geolocation.getCurrentPosition(
    gotLocation,
    failedtoGet
  );
});
