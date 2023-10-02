document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    depositValue = depositField.value;
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositValue;
});