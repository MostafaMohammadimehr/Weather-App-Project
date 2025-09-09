let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityoutput");
let descOutput = document.getElementById("description");
let tempOutput = document.getElementById("temp");
let windOutput = document.getElementById("wind");
const persianRegex = /[\u0600-\u06FF]/;
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

cityInput.classList.remove("vijaya");
cityInput.setAttribute("dir", "rtl");

addInput.addEventListener("click", async () => {
  let weatherResult = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric&lang=fa`
    )
  ).json();
  setInfo(weatherResult);
});
//خلاقیت
//  خودم از اینجا

cityInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    let weatherResult = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric&lang=fa`
      )
    ).json();
    setInfo(weatherResult);
  }
});
cityInput.addEventListener("input", () => {
  if (cityInput.value.trim() === "") {
    cityInput.classList.remove("vijaya");
    cityInput.setAttribute("dir", "rtl");
  } else if (persianRegex.test(cityInput.value)) {
    cityInput.classList.remove("vijaya");
    cityInput.setAttribute("dir", "rtl");
  } else {
    cityInput.classList.add("vijaya");
    cityInput.setAttribute("dir", "ltr");
  }
});

//تا اینجا

const setInfo = (data) => {
  let cityName = data["name"];
  let description = data["weather"][0]["description"];
  let temp = data["main"]["temp"];
  let wind = data["wind"]["speed"];

  cityOutput.innerHTML = `City : ${cityName}`;
  descOutput.innerHTML = `Description : ${description}`;
  tempOutput.innerHTML = `Temperature : ${temp} °C`;
  windOutput.innerHTML = `Wind Speed : ${wind} km/h`;
};
