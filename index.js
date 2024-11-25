function digitalRoot(n) {
  let sum = [...String(n)].reduce((buf, elem)=>buf+=Number(elem),0)
  if (sum<10) {
      return sum
  }
  return digitalRoot(sum)
}
// digitalRoot("12345");


function isIsogram(str){
  str = String(str).toLowerCase()
  for (const key of str) {
     
      console.log(String(str).split(key));
      
     if (String(str).split(key).length>=3) {

      
          return false
     }
  }
  return true
}
//   console.log(isIsogram("moOse"));

function duplicateCount(text){
  let str = String(text).toLowerCase()
  let obj  = {}
  for (const elem of str) {   
      if (obj[elem]!=undefined) {
          obj[elem]+=1;
          
      }else{
          obj[elem] = 0;
      }
  }
  let count = 0
  for (const key in obj) {
      if (obj[key]>0) {
          count++;
      }
      
  }
  return count
}

//  console.log(duplicateCount("Indivisibility"));

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length==0) {
        return s
    }
    return [s[s.length-1],...reverseString(s.splice(0, s.length-1))]

};
console.log(reverseString("hello".split("")));

