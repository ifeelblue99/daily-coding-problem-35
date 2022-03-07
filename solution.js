/*
This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

const sampleArray = ['G', 'B', 'R', 'R', 'B', 'R', 'G']


function segregateArray(arr){
  
  // get all the Rs
  const arrR = arr.filter(el=>el=="R")
  
  // Gs and Bs
  const arrGB = []
  arr.forEach(el=>{
    if (el=="G") {
      arrGB.unshift(el)
    }
    else if(el=="B"){
      arrGB.push(el)
    }
  })
  
  return [...arrR, ...arrGB]
}


// driver code 
console.log(segregateArray(sampleArray))
