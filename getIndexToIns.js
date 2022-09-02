function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
 for(let i =0; i<arr.length;i++){
   let elem = arr[i]
   if(elem > num ){
     return i
   }
 }
 return arr.length
 }
 
 console.log(getIndexToIns([5, 3, 20, 3], 5))