const userText = document.querySelector("#userText");

userText.addEventListener("click", function (event) {
  let userText = prompt("Чтобы изменить сождержимое ссылки, ведите текст. И загляните в консоль :)" );
  this.textContent = userText;
  event.preventDefault();
  console.log('Вы поменяли текст ссылки на: ' + userText);
})