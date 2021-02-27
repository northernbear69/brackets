module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) return false;
  
  bracketsConfig = bracketsConfig.map(el => el.join(''));
  let isDelete = true;
  let checkStr;

  while(isDelete) {
    checkStr = str;
    bracketsConfig.forEach(element => {
      str = str.replace(element, '');
    });
    if(checkStr === str) isDelete = false;
  }
  
  return str.length === 0;
}
