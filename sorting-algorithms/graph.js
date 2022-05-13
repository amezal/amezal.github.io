class Graph {
  constructor(arr) {
    this.arr = arr;
    this.bars = [];
    this.setBars();
  }

  update() {
    let isMoving = false;
    clear();
    this.bars.forEach(bar => {
      if (!bar.move()) {
        bar.show();
      } else {
        isMoving = true;
      }
    });
    return isMoving;
  }

  swap(xp, yp) {
    const tempPos = this.bars[xp].pos;
    this.bars[xp].setTargetPos(this.bars[yp].pos);
    this.bars[yp].setTargetPos(tempPos);
    swap(this.bars, xp, yp);
    swap(this.arr, xp, yp);

  }

  setBars() {

    const numsMin = Math.min(...this.arr);
    const numsMax = Math.max(...this.arr);

    for (let i = 0; i < this.arr.length; i++) {
      const num = this.arr[i];
      const bar = new Bar(num);
      const width = CANVAS_WIDTH / (1.5 * this.arr.length + 1);
      const pos = remap(i, 0, this.arr.length, width, CANVAS_WIDTH);
      const height = remap(num, numsMin, numsMax, CANVAS_HEIGHT - 100, 50);

      if (this.bars[i]) {
        this.bars[i].width = width;
        this.bars[i].height = height;
        this.bars[i].pos = pos;
        this.bars[i].num = num;
      } else {
        bar.width = width;
        bar.height = height;
        bar.pos = pos;
        this.bars.push(bar);
      }

    }

    // this.bars = this.arr.map(num => {
    //   const bar = new Bar(num);
    //   const width = CANVAS_WIDTH / (1.5 * this.arr.length + 1);
    //   const pos = remap(this.arr.indexOf(num), 0, this.arr.length, width, CANVAS_WIDTH);
    //   const height = remap(num, numsMin, numsMax, CANVAS_HEIGHT - 50, 40);

    //   bar.width = width;
    //   bar.height = height;
    //   bar.pos = pos;

    //   return bar;
    // });
  }

}
