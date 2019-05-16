//task 14
var longestCommonPrefix = function(strs) {
  if(!strs.length) return ""
  if(strs.length == 1) return strs[0]
  for(var i =0;i<strs[0].length;i++){
      var letter = strs[0][i];
      var j = 1;
      while(j<strs.length && strs[j][i]==letter){
          j++;
      }
      if(j!=strs.length) break; 
  }
  return strs[0].slice(0,i)
};