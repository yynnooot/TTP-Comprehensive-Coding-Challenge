/*
sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

function sortByString(s,t){
  let finalStr = '';
  
  //for s: create obj with key as letter and value as count
  
  const obj = {};
  
  for(let i=0; i<s.length; i++){
    obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1
  }
  
  //loop through t, and if letter exists in obj, add to finalStr times the count value
  
  for(let i=0; i<t.length; i++){
    if(obj[t[i]]){
      let letterCount = obj[t[i]]
      while(letterCount > 0){
        finalStr += t[i];
        letterCount--;
      }
    }
  }
  return finalStr;
}

// sortByString('weather','therapyw') // => 'theeraw'
sortByString('good','odg') // => 'oodg'
