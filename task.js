// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
    for (let i = 0; i < arr.length ; i++){
        
        sum += arr[i];
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
    }
    let avg = sum / arr.length;
    avg = avg.toFixed(2);
    avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity; 
  let arrResult = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
      arrResult = func(arrOfArr[i]);
      if (arrResult > max) max = arrResult;
  }

  return max;
}

// Задание 3
function worker2(arr) {
   let min = arr[0];
   let max = arr[0];
   let arrLength = arr.length;
    for (i = 0; i < arrLength; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }

    let difference = Infinity;
    difference = Math.abs(max - min);
    
    return difference;
    
}
