let speed = 30;
const controller = new Controller();
let choice = 'Selection Sort';

document.querySelector('#slider').addEventListener('input', e => {
  const input = e.target.value;
  const value = remap(input, 1, 10, Math.pow(2, input), Math.pow(2, input));
  controller.speed = value;
  console.log(value);
})

document.querySelector('#play').addEventListener('click', e => {
  e.target.innerText === 'stop' ? e.target.innerText = 'start' : e.target.innerText = 'stop';
  controller.isPlaying = !controller.isPlaying;
})

document.querySelector('#step').addEventListener('click', e => {
  controller.step();
})

document.querySelector('#reset').addEventListener('click', e => {
  controller.reset(100);
})

function setup() {
  let cnv = createCanvas(800, 550);
  cnv.parent('myCanvas');
  rectMode(CORNERS);
  textAlign(CENTER);
  textSize(11);
  controller.selectAlgorithm('Selection Sort');
}

function draw() {

  controller.play();

}
