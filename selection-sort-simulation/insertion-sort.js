class InsertionSort {
  constructor(graph) {
    this.reset(graph);
  }

  reset(graph) {
    this.graph = graph;
    this.i = 1;
    this.j = 0;
    this.n = this.graph.arr.length;
    this.key = this.graph.arr[this.i];
    this.swap = false;
    this.isPlaying = false;
  }

  step() {
    let i = this.i;
    let j = this.j;
    let n = this.n;
    let key = this.key;
    const arr = this.graph.arr;
    const bars = this.graph.bars;


    for (let x = 0; x < n; x++) {
      x < i ? bars[x].color = COLORS.GREEN : bars[x].color = COLORS.WHITE;
    }
    if (i < n) {
      if (this.swap) {
        this.graph.swap(j + 1, j + 2);
        this.swap = false;
      }
      bars[j + 1].color = COLORS.BLUE;
      if (j >= 0) {
        bars[j].color = COLORS.RED;
      }

      if (j >= 0 && key < arr[j]) {
        // this.graph.swap(j + 1, j);
        this.swap = true;
        j--;
      }
      else {
        arr[j + 1] = key;
        i++;
        key = arr[i];
        j = i - 1;
      }
      this.i = i;
      this.j = j;
      this.key = key;
      this.isPlaying = true;
    } else {
      this.isPlaying = false;
    }


  }

}