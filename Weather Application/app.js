const APIkey = `65bd68f7b7ed5b9607fbb6c1722c4e2e`;
const city = "pune";

async function weather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`);

    const data = await response.json();

    console.log(data);
    // console.log(data.name)
    // console.log(data.main.temp);
    // console.log(data)
    // console.log(data.main.humidity);
    // console.log(data.wind.speed);
    // console.log(data.visibility);
    updateUI(data);
}

const cityElement = document.querySelector(".city");
const temPerature = document.querySelector(".temperature");
const humidityElement = document.querySelector(".humid-perc");
const windElement = document.querySelector(".wind-speed");
const visibleElemnt = document.querySelector(".visibl");
const date = document.querySelector(".date");
weather();

function updateUI(data) {
    cityElement.textContent = data.name;
    temPerature.textContent = `${Math.round(data.main.temp)}°C`;
    humidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${data.wind.speed}`;
    visibleElemnt.textContent = `${data.visibility}`/1000;


    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
};


const formElement = document.querySelector(".search");
const inputElement = document.querySelector("city.inpute");


