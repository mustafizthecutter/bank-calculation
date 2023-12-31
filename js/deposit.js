document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositValueString = depositField.value;
    const newDepositValue = parseFloat(newDepositValueString);

    depositField.value = '';

    if (isNaN(newDepositValue)) {
        alert('Please Input A Valid Number');
        return;
    }
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositValueString = depositTotal.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);
    const currentDepositValue = previousDepositValue + newDepositValue;
    depositTotal.innerText = currentDepositValue;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotalValue = previousBalanceTotal + newDepositValue;
    balanceTotal.innerText = newBalanceTotalValue;


});