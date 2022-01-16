class QuickSort {
  constructor(graph) {
    this.reset(graph);
  }

  reset(graph) {
    this.graph = graph;
  }

  step() {

    console.log(this.graph.arr);
    quickSort(this.graph.arr, 0, this.graph.arr.length - 1);
    console.log(this.graph.arr);

  }


}

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return arr;
}

function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);
  return pivotIndex;
}

// function swap(arr, xp, yp) {
//   const temp = arr[xp];
//   arr[xp] = arr[yp];
//   arr[yp] = temp;
// }