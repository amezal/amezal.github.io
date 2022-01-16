const COLORS = {
  // GREEN: '#82E682',
  // BLUE: '#826AED',
  // RED: '#D52941',
  GREEN: 'rgba(79,212,195,1)',
  BLUE: 'rgb(146, 154, 245)',
  RED: 'rgb(255,123,172)',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
}

let WINDOW_WIDTH, WINDOW_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT;

function resize() {

  WINDOW_WIDTH = window.innerWidth;
  WINDOW_HEIGHT = window.innerHeight;
  CANVAS_WIDTH = WINDOW_WIDTH * 0.6;
  CANVAS_HEIGHT = WINDOW_HEIGHT * 0.7;

  if (WINDOW_WIDTH < 768) {
    CANVAS_WIDTH = WINDOW_WIDTH * 0.90;
    CANVAS_HEIGHT = WINDOW_HEIGHT * 0.65;
  }
  else if (WINDOW_WIDTH < 1024) {
    CANVAS_WIDTH = WINDOW_WIDTH * 0.75;
  }
  if (CANVAS_WIDTH > 1000) {
    CANVAS_WIDTH = 1000;
  }
}
resize();