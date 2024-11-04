/*const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    console.log('Цвет поменялся на зелёный');
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    console.log('Цвет поменялся на желтый');
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    console.log('Цвет поменялся на красный');
}

trafficLightEl.addEventListener('click', makeGreen);*/


const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const trafficLight = document.querySelector('#trafficLight0');

const zebra = document.querySelector('.zebra');
const zebra1 = document.querySelector('.zebra1');
const zebra2 = document.querySelector('.zebra2');
const zebra3 = document.querySelector('.zebra3');
const zebraText1 = document.querySelector('.zebra-text-1');
const zebraText2 = document.querySelector('.zebra-text-2');
const zebraText3 = document.querySelector('.zebra-text-3');



function makeGreen() {

    trafficLightE1.style.background = ('green');
    trafficLightE3.style.background = ('black');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeYellow);
    console.log('Цвет поменялся на зелёный');
    
    zebra1.style.background = ('green');
    zebraText1.textContent = ('GO!');
    zebra3.style.background = ('');
    zebraText3.textContent = ('');
    zebra.removeEventListener('click', makeRed);
    zebra.addEventListener('click', makeYellow);
}

function makeYellow() {

    trafficLightE2.style.background = ('yellow');
    trafficLightE1.style.background = ('black');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeRed);
    console.log('Цвет поменялся на желтый');

    zebra2.style.background = ('yellow');
    zebraText2.textContent = ('READY!');
    zebra1.style.background = ('');
    zebraText1.textContent = ('');
    zebra.removeEventListener('click', makeGreen);
    zebra.addEventListener('click', makeRed);
}

function makeRed() {

    trafficLightE3.style.background = ('red');
    trafficLightE2.style.background = ('black');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeGreen);
    console.log('Цвет поменялся на красный');

    zebra3.style.background = ('red');
    zebraText3.textContent = ('STOP!');
    zebra2.style.background = ('');
    zebraText2.textContent = ('');
    zebra.removeEventListener('click', makeYellow);
    zebra.addEventListener('click', makeGreen);

}

trafficLight.addEventListener('click', makeGreen);
zebra.addEventListener('click', makeGreen);
trafficLight.addEventListener('click', function() {alert('Загляни в консоль')} , {once : true});




