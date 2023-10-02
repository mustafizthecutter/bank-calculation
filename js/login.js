document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    if (email === "mustafizur232@gmail.com" && password === 'chuppu') {
        console.log('valid user');
        window.location.href = 'bank.html';
    }
    else {
        alert('be careful please!!!!!!!');
    }
})