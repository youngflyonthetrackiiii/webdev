function tellFortune() {
numOfChildren = document.getElementById("children").value;
parterName = document.getElementById("name").value;
// location = document.getElementById("location").value;
jobTitle = document.getElementById("job").value;

document.getElementById("fortune").innerHTML = (`you will be an ${jobTitle} and married to ${parterName} with ${numOfChildren} kids`)
}

// function dog(humanYears) {
//     humanYears = document.getElementById("age").value;
//     dogAge = humanYears * 7
//     document.getElementById().getElementById("age").innerHTML= `your dog is ${dogAge} in dog years`
// }

// function calculateSupply(age, amountPerDay) {
//    age = document.getElementById("current-age").value;
//    amountPerDay = amountPerDay * 365
//    totalAmount = (maxAge - age) * amountPerDay
//    document.getElementById("supply").innerHTML = `you will need ${totalAmount} to last you until your ${maxAge}`
// }

// function calcCircumfrence() {
//     radius = document.getElementById("radius").value;
//     Circumfrence = 2 * Math.PI * radius;
//     document.getElementById(
//         "circumference"
//     ).innerHTML = `The circumference is ${Circumfrence}`;}

//     function celsiusToFahrenheit() {
//         celsius = document.getElementById("celsius").value;
//         fahrenheit = (celsius * 9) / 5 + 32;
//         document.getElementById('fahrenheit').innerHTML = `${celsius}C is ${fahrenheit}F`;
//     }