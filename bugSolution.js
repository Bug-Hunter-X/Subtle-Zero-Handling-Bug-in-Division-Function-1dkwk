function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle both zero case
  } else if (b === 0) {
    throw new Error("Division by zero"); //Explicitly throw error for division by zero
  }
  return a / b; 
}