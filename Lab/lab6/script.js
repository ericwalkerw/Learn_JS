function printForecast(array) {
    let forecastString = "";

    for (let i = 0; i < array.length; i++) {
        forecastString += ` ... ${array[i]}ºC in ${i + 1} day`;
    }

    console.log(forecastString);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
