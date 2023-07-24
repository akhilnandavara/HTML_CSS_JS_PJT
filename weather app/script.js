const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "029318a4e3msh426a223056f3d4dp19337bjsn906d19903356",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function fetchData(city) {
  try {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    cityName.innerHTML = city;
    const response1 = await fetch(url, options);
    // const respons2 = await response1.text();
    const response = await response1.json();
    console.log(response);
    temp.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    // humidity2.innerHTML=response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    sunset.innerHTML = response.sunset;
    sunrise.innerHTML = response.sunrise;
    wind_degrees.innerHTML = response.wind_degrees;
    cloud_pct.innerHTML = response.cloud_pct;
  } catch (error) {
    console.error(error);
  }
}
async function moreData(city2) {
  try {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city2;

    const response1 = await fetch(url, options);
    // const respons2 = await response1.text();
    const response = await response1.json();
    console.log(response);
    th_cloud_pct.innerHTML = response.cloud_pct;
    th_temp.innerHTML = response.temp;
    th_feels_like.innerHTML = response.feels_like;
    th_min_temp.innerHTML = response.min_temp;
    th_max_temp.innerHTML = response.max_temp;
    th_humidity.innerHTML = response.humidity;
    th_wind_speed.innerHTML = response.wind_speed;
    th_sunset.innerHTML = response.sunset;
    th_sunrise.innerHTML = response.sunrise;
    th_wind_degrees.innerHTML = response.wind_degrees;
  } catch (error) {
    console.error(error);
  }
}
async function moreData2(city2) {
  try {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city2;

    const response1 = await fetch(url, options);
    // const respons2 = await response1.text();
    const response = await response1.json();
    console.log(response);
    th_cloud_pct_1.innerHTML = response.cloud_pct;
    th_temp_1.innerHTML = response.temp;
    th_feels_like_1.innerHTML = response.feels_like;
    th_min_temp_1.innerHTML = response.min_temp;
    th_max_temp_1.innerHTML = response.max_temp;
    th_humidity_1.innerHTML = response.humidity;
    th_wind_speed_1.innerHTML = response.wind_speed;
    th_sunset_1.innerHTML = response.sunset;
    th_sunrise_1.innerHTML = response.sunrise;
    th_wind_degrees_1.innerHTML = response.wind_degrees;
  } catch (error) {
    console.error(error);
  }
}

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(city.value);
});
fetchData("delhi");

moreData("Shangai");
moreData2("chennai");

