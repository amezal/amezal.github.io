class BubbleSort {
  constructor(graph) {
    this.reset(graph);
  }

  reset(graph) {
    this.graph = graph;
    this.i = 0;
    this.j = 0;
    this.swap = false;
    this.isPlaying = false;
  }

  step() {
    let i = this.i;
    let j = this.j;
    let n = this.graph.arr.length;

    this.graph.bars.forEach(bar => bar.color = COLORS.WHITE)

    //if swap was called in the last step call
    if (this.swap) {
      this.graph.swap(j - 1, j);
      this.swap = false;
    }

    this.graph.bars[j].changeColor(COLORS.RED);

    if (i < n - 1) {
      if (j < n - i - 1) {
        this.graph.bars[j + 1].changeColor(COLORS.RED);
        if (this.graph.arr[j] > this.graph.arr[j + 1]) {
          this.swap = true;
        }
      }
      j++;

      if (j % (n - i) === 0) {
        i++;
        j = 0;
      }

      for (let x = 0; x < i; x++) {
        this.graph.bars[n - x - 1].color = COLORS.GREEN;
      }

      this.i = i;
      this.j = j;
      this.isPlaying = true;

    } else {
      this.graph.bars.forEach(bar => bar.color = COLORS.GREEN);
      this.isPlaying = false;
    }
  }
}
