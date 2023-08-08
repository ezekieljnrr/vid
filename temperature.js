const CelciusEl = document.getElementById("Celcius");
const FahrenheitEl = document.getElementById("Fahrenheit");
const KelvinEl = document.getElementById("Kelvin");

function computeTemp () {

  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "Celcius":
      KelvinEl.value = currentValue + 273.15;
      FahrenheitEl.value = currentValue * 1.
      break;
      case "Fahrenheit":
      CelciusEl.value = (currentValue -32) / 1.8;
      KelvinEl.value = (currentValue - 32) / 1.8 + 273.15;
      break;
      case "Kelvin":
      CelciusEl.value = currentValue + 273.15;
      FahrenheitEl.value = currentValue * 1.
      break;
  
    default:
      break;
  }
  
}