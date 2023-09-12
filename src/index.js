module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  let bracketsPairs = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    let [openBracket, closeBracket] = bracketsConfig[i];
    openBrackets.push(openBracket);
    closeBrackets.push(closeBracket);
    bracketsPairs[closeBracket] = openBracket;
  }
  
  let stackBrackets = []

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      if (stackBrackets.length && closeBrackets.includes(currentSymbol) > 0 && stackBrackets[stackBrackets.length - 1] === currentSymbol) {
        stackBrackets.pop();
      } else {
        stackBrackets.push(currentSymbol);
      }
    } else if (closeBrackets.includes(currentSymbol)) {
      if (stackBrackets.length > 0 && stackBrackets[stackBrackets.length - 1] === bracketsPairs[currentSymbol]) {
        stackBrackets.pop();
      } else {
        return false;
      }
    }
  }
  return stackBrackets.length === 0;
}