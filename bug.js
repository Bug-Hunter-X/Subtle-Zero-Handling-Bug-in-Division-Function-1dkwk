function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect return statement
  }
  return a / b; 
}