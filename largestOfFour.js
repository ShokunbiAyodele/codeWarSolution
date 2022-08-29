function largestOfFour(arr) {
  
    let arrays = []
    let newArray = []
    for(let i = 0; i < arr.length; i++){
      let arrays = arr[i]
      let max = Math.max(...arrays)
      newArray.push(max)
      
       
    }
    return newArray
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);