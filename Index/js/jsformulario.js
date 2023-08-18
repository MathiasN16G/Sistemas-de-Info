const showPasswordCheckbox = document.getElementById('showPassword');{
const passwordInput = document.getElementById('inputPassword4');

showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
    passwordInput.setAttribute('type', 'text');
    } else {
    passwordInput.setAttribute('type', 'password');
    }
});}

const numeroInput = document.getElementById('inputnumero');{

numeroInput.addEventListener('input', () => {
    const valor = numeroInput.value;
    const numerosRegex = /^[0-9]*$/;

    if (!numerosRegex.test(valor)) {
    numeroInput.setCustomValidity('Por favor, ingresa solo números.');
    } else {
    numeroInput.setCustomValidity('');
    }
});}

const edadInput = document.getElementById('inputedad');{

edadInput.addEventListener('input', () => {
    const valor = edadInput.value;
    const numerosRegex = /^[0-9]*$/;
    
    if (!numerosRegex.test(valor)) {
    edadInput.setCustomValidity('Por favor, ingresa solo números.');
    } else {
    edadInput.setCustomValidity('');
    }
});}
