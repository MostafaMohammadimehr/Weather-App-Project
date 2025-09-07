let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityoutput");
let descOutput = document.getElementById("description");
let tempOutput = document.getElementById("temp");
let windOutput = document.getElementById("wind");
const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

addInput.addEventListener("click", async () => {
  let weatherResult = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric&lang=fa`
    )
  ).json();
  console.log(weatherResult);
});

//خلاقیت خودم از اینجا
cityInput.setAttribute("dir", "rtl");
cityInput.addEventListener("input", () => {
  if (cityInput.value.trim() === "") {
    cityInput.classList.remove("vijaya");
    cityInput.setAttribute("dir", "rtl");
  } else {
    cityInput.classList.add("vijaya");
    cityInput.setAttribute("dir", "ltr");
  }
});
//تا اینجا
