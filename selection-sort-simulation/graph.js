function remap(input, input_start, input_end, output_start, output_end) {
  output = output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
  return output;
}

class Bar {
  constructor(num) {
    this.color = COLORS.WHITE
    this.num = num;
  }

  show() {
    noStroke();
    smooth();
    fill(this.color);
    rect(this.pos, 600, this.pos + this.width, this.height, 3);
    fill(COLORS.WHITE);
    text(this.num, this.pos + this.width / 2, this.height - 3)
  }
}

class Graph {
  constructor(arr) {
    this.arr = arr;
    this.bars = [];
    this.setBars();
  }

  update() {
    clear();
    this.bars.forEach(bar => bar.show());
    this.setBars();
  }

  setBars() {
    const numsMin = Math.min(...this.arr);
    const numsMax = Math.max(...this.arr);

    this.bars = this.arr.map(num => {
      const bar = new Bar(num);
      const width = 800 / (1.5 * this.arr.length + 1);
      const pos = remap(this.arr.indexOf(num), 0, this.arr.length, width, 800);
      const height = remap(num, numsMin, numsMax, 550 - 20, 20);

      bar.width = width;
      bar.pos = pos;
      bar.height = height;

      return bar;
    });
  }

}

let graph = new Graph(nums);