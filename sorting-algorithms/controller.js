class Controller {
  constructor() {
    this.firstTime = true;
    this.isPlaying = false;
    this.speed = 5;
    this.data = getNewArray(10)
    this.graph = new Graph(this.data);

    this.algos = [
      new BubbleSort(this.graph),
      new SelectionSort(this.graph),
      new InsertionSort(this.graph),
    ]
    this.current = null;
  }

  play() {
    this.graph.update();
    if (this.isPlaying) {
      for (let step = 0; step < this.speed; step++) {
        if (!this.graph.update()) {
          this.current.step();
        }
      }
      this.isPlaying = this.current.isPlaying;
    }
  }

  selectAlgorithm(choice) {
    this.current = this.algos[choice];
  }

  step() {
    if (!this.graph.update()) {
      this.current.step();
    }
  }

  reset(arraySize) {
    this.data = getNewArray(arraySize);
    this.graph = new Graph(this.data);
    this.current.reset(this.graph);
    this.isPlaying = false;
  }

}

const controller = new Controller();