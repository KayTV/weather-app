var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var shuffledArray = shuffle(inputArray);

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

function chunck(arr, size) {
	var copy = arr;
  var result = [];
  while (copy.length > 0){
    if (copy.length < size) {
      for(var i = 0; i < copy.length; i++) {
    		result[i].push(copy[i]);
    	}
      return result;
    } else {
      result.push(copy.splice(0, size));
    }
  }
	return result;
}

console.log(chunck(shuffledArray, 3));
