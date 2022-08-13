// Write a function that accepts a starting and ending IPv4 address, 
// and returns the number of IP addresses from start to end, 
// excluding the end IP address. All input to the ipsBetween function 
// will be valid IPv4 addresses in the form of strings. The ending address will 
// be at least one address higher than the starting address.

// Examples:

// ipsBetween("10.0.0.0", "10.0.0.50") => returns 50
// ipsBetween("10.0.0.0", "10.0.1.0") => returns 256
// ipsBetween("20.0.0.10", "20.0.1.0") => returns 246



function ipsBetween(start, end){
    return ipToInt32(end) - ipToInt32(start);
  }
  
  ipToInt32 = (ip) =>{
    return parseInt(ip.split('.').map((v) => {
      var bin = parseInt(v).toString(2);
      return new Array(9 - bin.length).join('0') + bin;
    }).join(''), 2);
  }