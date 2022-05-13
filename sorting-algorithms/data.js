const getNewArray = (length) => {
  const array = [];

  for (let i = 1; i <= length; i++) {
    array.push(i);
  }

  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;

}


function remap(input, input_start, input_end, output_start, output_end) {
  output = output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
  return output;
}

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}
