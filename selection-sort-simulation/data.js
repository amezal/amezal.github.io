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



let nums = getNewArray(100);
// let nums = [5, 2, 3, 4, 1, 7, 9, 10, 8, 6]
const numsMin = Math.min(...nums);
const numsMax = Math.max(...nums);