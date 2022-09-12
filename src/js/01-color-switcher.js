const refs = {
    btnStartEl: document.querySelector('button[data-start]'),
    btnStopEl: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body'),
}

// console.log(refs.btnStartEl);
// console.log(refs.btnStartEl);
// console.log(refs.bodyEl);

refs.btnStartEl.addEventListener('click', onStartChangeColorClick);
refs.btnStopEl.addEventListener('click', onStopChangeColorClick);

let timerId;
let isActive = false;

function onStartChangeColorClick() {
    if (isActive) { 
        return;
    }
    // console.log('Start');
    isActive = true;
    timerId = setInterval(() => {
    let randomColor = getRandomHexColor();  
    // console.log('randomColor', randomColor);        
    refs.bodyEl.style.backgroundColor = randomColor;
}, 1000);
}

function onStopChangeColorClick() {
    isActive = false;
    // console.log('Stop');
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

