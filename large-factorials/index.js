const factorial = (number) => {
  if ( number < 1 ) return ('Please provide postive integer');
  let returnInteger = 1;
  for(let i = number; i > 0; i--) {
    returnInteger *= i;
  }
  return returnInteger;
};

console.log(factorial(0));

module.exports = {
  factorial
}