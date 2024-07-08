function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+|}{[]?><,./-';
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('password').value = password;
}

function clearPassword() {
    document.getElementById('password').value = '';
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');

    // Mensagem informando que a senha gerada foi copiada 
    alert('Senha copiada para a área de transferência!');
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordLengthInput = document.getElementById('passwordLength');
    const generateButton = document.getElementById('generateButton');
    const clearButton = document.getElementById('clearButton');

    generateButton.addEventListener('click', generatePassword);
    clearButton.addEventListener('click', clearPassword);

    passwordLengthInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            generatePassword();
        }
    });
});
