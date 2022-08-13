// Complete the timeConversion function in the editor below. It should return a new string 
// representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// s: a string representing time in  hour format
// Input Format
// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .
// Constraints
// All input times are valid
// Output Format
// Convert and print the given time in -hour format, where .


// code analysis
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour 
// clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

function time_conversion(str){
    let originalTime = " "
  let amPm =  str.substring(-2,1);
    if(amPm === "A"){
        if(str.substring(0,1) == '12'){
            originalTime = "00"
        }
        else{
            originalTime = str.substring(0,1)
        }
    }
    else{
        if(str.substring(0,1) =='12'){
            originalTime = str.substring(0,1)
        }
        else{
            originalTime = (Number(str.substring(0,1)) + 12).toString()
        }
    }
    return originalTime + str.substring(2,6)
}
