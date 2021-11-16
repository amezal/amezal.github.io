function remap(input, input_start, input_end, output_start, output_end) {
  output = output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
  return output;
}
const sleep = ms => new Promise(res => setTimeout(res, ms));

const nums = [10, 9, 37, 35, 40, 21, 28, 29, 33, 16, 12, 11, 3, 5, 19, 6, 36, 24, 31, 7, 1, 23, 39, 8, 25, 27, 4, 17, 34, 14, 22, 32, 18, 2, 13, 30, 26, 38, 20, 15];
//const nums = [10, 9, 37, 35, 40, 21]
const numsMin = Math.min(...nums);
const numsMax = Math.max(...nums);

class Bar {
  constructor(num) {
    this.color = 'rgb(255,255,255)'
    this.num = num;
    this.barWidth = 600 / (1.5 * nums.length + 1);
    this.barPos = remap(nums.indexOf(num), 0, nums.length, this.barWidth, 600);
    this.barHeight = remap(num, numsMin, numsMax, 600 - 20, 20);
  }

  show() {
    fill(this.color);
    rect(this.barPos, 600, this.barPos + this.barWidth, this.barHeight);
    fill(255);
    text(this.num, this.barPos + this.barWidth / 2, this.barHeight - 4)
  }
}

let bars = nums.map(num => new Bar(num));


function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent('myCanvas');
  rectMode(CORNERS);
  textAlign(CENTER);
  textSize(11);
  frameRate(120);
}

let i = 0;
let x = 0;
let j = i + 1;
let min = i;

function draw() {
  showBars();
  bars = nums.map(num => new Bar(num));

  if (j % nums.length == 0) {
    let tmp = nums[i];
    nums[i] = nums[min];
    nums[min] = tmp;
    i++;
    j = i + 1;
    min = i;
  }


  if (i < nums.length - 1) {
    console.log(i, j);
    x = i;
    // Finding the smallest number in the subarray
    bars[min].color = '#826AED';
    showBars();
    bars[j].color = '#D52941';

    if (nums[j] < nums[min]) {
      bars.forEach(bar => {
        bar.color = 'white';
      })
      min = j;
    }
    j++;

    if (min != i) {
      bars[min].color = '#826AED';
    }

    for (let x = 0; x <= bars.length; x++) {
      if (x < i) {
        bars[x].color = '#82E682';
      }
    }
    showBars();
  } else {
    bars.forEach(bar => bar.color = '#82E682')
  }
}

function showBars() {
  background(35, 39, 46);
  bars.forEach(bar => bar.show());
}
