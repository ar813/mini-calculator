const num1 = document.querySelector(".num1") as HTMLInputElement;
const num2 = document.querySelector(".num2") as HTMLInputElement;
const addition = document.querySelector("#addition") as HTMLButtonElement;
const subtraction = document.querySelector("#subtraction") as HTMLButtonElement;
const multiplication = document.querySelector("#multiplication") as HTMLButtonElement;
const division = document.querySelector("#division") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLDivElement;

function outputFunc(result: any) {
    if (num1.value !== "" && num2.value !== "") {
        output.innerHTML = result;
        output.style.color = "green";
    }else{
        alert("Both input fields must be filled.");
    }
}

addition.addEventListener("click", function () {
    let add = parseInt(num1.value) + parseInt(num2.value);
    outputFunc(add)
})

subtraction.addEventListener("click", function () {
    let sub = parseInt(num1.value) - parseInt(num2.value);
    outputFunc(sub)
})

multiplication.addEventListener("click", function () {
    let mul = parseInt(num1.value) * parseInt(num2.value);
    outputFunc(mul)
})

division.addEventListener("click", function () {
    let div = parseInt(num1.value) / parseInt(num2.value);
    outputFunc(div)
})
