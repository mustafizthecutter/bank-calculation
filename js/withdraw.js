document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawAmountValueString = withdrawTotalAmount.innerText;
    const previousWithdrawAmountValue = parseFloat(previousWithdrawAmountValueString);
    const currentWithdrawAmount = previousWithdrawAmountValue + newWithdrawField;
    withdrawTotalAmount.innerText = currentWithdrawAmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalValueString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalValueString);
    const newBalanceTotalValue = previousBalanceTotal - newWithdrawField;
    balanceTotal.innerText = newBalanceTotalValue;
    withdrawField.value = '';

})