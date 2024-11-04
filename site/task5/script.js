const userText = document.querySelector('#userText');
const duplicateField = document.querySelector('#duplicateField');
const myButton = document.querySelector('#myButton');

userText.addEventListener('input', function (e) {
	duplicateField.value = userText.value;
    duplicateField.textContent = userText.value;
    
});

myButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Вы ввели текст: ' + userText.value);
    duplicateField.textContent = '';
    userText.value = '';
})