class Controller {
  constructor() {
    this.firstTime = true;
    this.isPlaying = false;
    this.speed = 32;
    this.data = getNewArray(100);
    this.graph = new Graph(this.data);

    this.selectionSort = new SelectionSort(this.graph);

  }

  play() {
    frameRate(controller.speed);
    if (this.isPlaying || this.firstTime) {
      for (let step = 0; step < this.speed / 60; step += 1) {
        this.current.step();
      }
    }
    this.firstTime = false;
  }

  selectAlgorithm(choice) {
    switch (choice) {
      case 'Selection Sort':
        this.current = this.selectionSort;
      default:
        this.current = this.selectionSort;
    }
  }

  step() {
    this.isPlaying = true;
    this.current.step();
    this.isPlaying = false;
  }

  reset(arraySize) {
    this.data = getNewArray(arraySize);
    this.graph = new Graph(this.data);
    this.current.reset(this.graph);
    this.firstTime = true;
  }

}