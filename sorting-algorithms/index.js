document.querySelector('#slider').addEventListener('input', e => {
  const input = e.target.value;
  controller.speed = input;
})

document.querySelector('#play').addEventListener('click', e => {
  // e.target.innerText === 'stop' ? e.target.innerText = 'start' : e.target.innerText = 'stop';
  // controller.isPlaying ? e.target.src = './icons/play_arrow_black_24dp.svg' : e.target.src = './icons/pause_black_24dp.svg'
  controller.isPlaying = !controller.isPlaying;
})

document.querySelector('#step').addEventListener('click', e => {
  controller.step();
})

document.querySelector('#reset').addEventListener('click', e => {
  const arrSize = document.querySelector('#arr-size').value;
  controller.reset(arrSize);
})


function setup() {
  let cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  cnv.parent('myCanvas');
  rectMode(CORNERS);
  textAlign(CENTER);
  textSize(11);
  controller.selectAlgorithm(1);
}

function draw() {
  controller.play();
  const play = document.querySelector('#play img');
  controller.isPlaying ? play.src = './icons/pause_black_24dp.svg' : play.src = './icons/play_arrow_black_24dp.svg'
}

function windowResized() {
  resize();
  resizeCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  controller.graph.setBars();
}

