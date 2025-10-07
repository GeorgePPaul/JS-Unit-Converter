

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convertTemp(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp -32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }

}

function convertLenght(){

    if(toMeters.checked){
        temp = Number(textBox.value);
        temp = temp * 0.3048;
        result.textContent = temp.toFixed(2) + " meters";
    }
    else if(toFeet.checked){
        temp = Number(textBox.value);
        temp = temp * 3.28;
        result.textContent = temp.toFixed(2) + " feet";
    }
    else{
        result.textContent = "Select a unit";
    }

}

function convertWeight(){

    if(toKilos.checked){
        temp = Number(textBox.value);
        temp = temp / 2.2;
        result.textContent = temp.toFixed(1) + " kilos";
    }
    else if(toPounds.checked){
        temp = Number(textBox.value);
        temp = temp * 2.2;
        result.textContent = temp.toFixed(1) + " pounds";
    }
    else{
        result.textContent = "Select a unit";
    }
}