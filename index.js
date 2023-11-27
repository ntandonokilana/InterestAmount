function calculateInterest(){
    let principal = parseInt(document.getElementById('principal').value);

    let interestRate = parseInt(document.getElementById('interestRate').value);

    if (isNaN(principal) || isNaN(interestRate)) {
        alert("Please enter valid numeric values for principal and interest rate.");
        return;
    }
    const interestAmount = (principal * interestRate) / 100;
    document.getElementById('result').innerText = `Interest Amount: $${interestAmount.toFixed(2)}`;
}