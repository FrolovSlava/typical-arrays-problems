function check (array){
  if (array.length < 4)
    return 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] === null)
      return 0;
  }
  return 1;
}

exports.min = function min (array) {
  if(array === undefined || check (array) === 0 )
    return 0;
  let min = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] < min)
      min = array[i];
  }
  return min;
}

exports.max = function max (array) {
  
  if(array === undefined || check (array) === 0)
    return 0;
  let max = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] > max)
      max = array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if(array === undefined || check (array) === 0)
    return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum / array.length;
}
