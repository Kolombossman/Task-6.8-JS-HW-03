const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {alert(' consoleLog Метод для вывода сообщения в веб-консоль');
console.log('Пример использования команды console.log');
});

const Alert = document.querySelector('#Alert');
Alert.addEventListener('click', () => {alert(' Alert Метод для вывода сообщения в веб-консоль');
console.log('Пример использования команды Alert');
});

const Prompt = document.querySelector('#Prompt');
Prompt.addEventListener('click', () => {alert(' Prompt Метод для вывода сообщения в веб-консоль');
console.log('Пример использования команды Promt');
});