function chunkArrayInGroups(arr, size) {
 
    let subarr = []
    let mainarr = []
    for(let i = 0 ; i < arr.length; i++){
        if(i % size !== size -1) subarr.push(arr[i]);
        else{
            subarr.push( arr[i])
            mainarr.push(subarr)
            subarr = []
        }
        
    }
    if(subarr.length !== 0) mainarr.push(subarr)
    return mainarr
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))