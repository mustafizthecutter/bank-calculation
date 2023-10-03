document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);

    withdrawField.value = '';

    if (isNaN(newWithdrawField)) {
        alert('Please Input A Valid Number');
        return;
    }
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawAmountValueString = withdrawTotalAmount.innerText;
    const previousWithdrawAmountValue = parseFloat(previousWithdrawAmountValueString);

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalValueString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalValueString);

    if (newWithdrawField > previousBalanceTotal) {
        alert('You do not have enough money! ');
        return;
    }

    const currentWithdrawAmount = previousWithdrawAmountValue + newWithdrawField;
    withdrawTotalAmount.innerText = currentWithdrawAmount;

    const newBalanceTotalValue = previousBalanceTotal - newWithdrawField;
    balanceTotal.innerText = newBalanceTotalValue;


})