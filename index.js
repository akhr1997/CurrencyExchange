const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const swapButton = document.getElementById("swap");
const rateDiv = document.getElementById("rate");

function calculate(){
    
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch("https://open.exchangerate-api.com/v6/latest")
    .then(response => response.json())
    .then(data => {
        // console.log(data)

        const rate = data.rates[currTwo]

        rateDiv.innerText = `1 ${currOne} is ${rate} ${currTwo}`

        amountTwo.value = (amountOne.value) * rate

    })
}

calculate();

currencyOne.addEventListener("change", calculate)
currencyTwo.addEventListener("change", calculate)
amountOne.addEventListener("input", calculate)
amountTwo.addEventListener("input", calculate)

swapButton.addEventListener('click', swap)

function swap(){
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate()
}