class SelectionSort {
  constructor(graph) {
    this.graph = graph;
    this.i = 0;
    this.x = 0;
    this.j = 1;
    this.min = 0;
  }

  reset(graph) {
    this.i = 0;
    this.x = 0;
    this.j = 1;
    this.min = 0;
    this.graph = graph;
  }

  step() {
    let i = this.i;
    let j = this.j;
    let min = this.min;
    let x = this.x;


    this.graph.update();


    if (i < this.graph.arr.length - 1) {
      x = i;
      // Finding the smallest number in the subarray
      this.graph.bars[min].color = COLORS.BLUE;
      this.graph.bars[j].color = COLORS.RED;

      if (this.graph.arr[j] < this.graph.arr[min]) {
        this.graph.bars.forEach(bar => {
          bar.color = COLORS.WHITE;
        })
        min = j;
      }
      j++;

      if (min != i) {
        this.graph.bars[min].color = COLORS.BLUE;
      }

      for (let x = 0; x <= this.graph.bars.length; x++) {
        if (x < i) {
          this.graph.bars[x].color = COLORS.GREEN;
        }
      }
    } else {
      this.graph.bars.forEach(bar => bar.color = COLORS.GREEN)
    }


    if (j % this.graph.arr.length == 0) {
      let tmp = this.graph.arr[i];
      this.graph.arr[i] = this.graph.arr[min];
      this.graph.arr[min] = tmp;
      i++;
      j = i + 1;
      min = i;

    }

    this.i = i;
    this.j = j;
    this.min = min;
    this.x = x;



  }
}
