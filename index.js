document.addEventListener("DOMContentLoaded", function () {
    const usdAmountInput = document.getElementById("id1");
    const resultDisplay = document.getElementById("pid1");

    usdAmountInput.addEventListener("input", function () {
        const usdAmount = parseFloat(usdAmountInput.value);
        if (!isNaN(usdAmount)) {
            const exchangeRate = 83; 
            const Amount = usdAmount * exchangeRate;
            resultDisplay.innerText = Amount.toFixed(2);
        } else {
            resultDisplay.innerText = "0.00";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const usdAmountInput = document.getElementById("id2");
    const resultDisplay = document.getElementById("pid2");

    usdAmountInput.addEventListener("input", function () {
        const usdAmount = parseFloat(usdAmountInput.value);
        if (!isNaN(usdAmount)) {
            const exchangeRate = 83; 
            const Amount = usdAmount / exchangeRate;
            resultDisplay.innerText = Amount.toFixed(2);
        } else {
            resultDisplay.innerText = "0.00";
        }
    });
});
