var num1 = document.querySelector(".num1");
var num2 = document.querySelector(".num2");
var addition = document.querySelector("#addition");
var subtraction = document.querySelector("#subtraction");
var multiplication = document.querySelector("#multiplication");
var division = document.querySelector("#division");
var output = document.querySelector("#output");
function outputFunc(result) {
    if (num1.value !== "" && num2.value !== "") {
        output.innerHTML = result;
        output.style.color = "green";
    }
    else {
        alert("Error: Both input fields must be filled.");
    }
}
addition.addEventListener("click", function () {
    var add = parseInt(num1.value) + parseInt(num2.value);
    outputFunc(add);
});
subtraction.addEventListener("click", function () {
    var sub = parseInt(num1.value) - parseInt(num2.value);
    outputFunc(sub);
});
multiplication.addEventListener("click", function () {
    var mul = parseInt(num1.value) * parseInt(num2.value);
    outputFunc(mul);
});
division.addEventListener("click", function () {
    var div = parseInt(num1.value) / parseInt(num2.value);
    outputFunc(div);
});
