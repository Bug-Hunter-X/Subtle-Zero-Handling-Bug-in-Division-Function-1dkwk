# JavaScript Division Function Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to division by zero and zero inputs. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

**Bug Description:**
The original function attempts to divide two numbers.  However, it incorrectly returns 0 if either input is 0. This behavior is unexpected and may lead to incorrect calculations.

**Solution:**
The solution addresses this issue by explicitly handling the cases where either `a` or `b` is 0.  We've chosen to throw an error for division by zero and return 0 only when both a and b are zero.  Consider alternative return values like `Infinity` or `NaN` depending on your specific application requirements.

This example illustrates the importance of comprehensive error handling and edge-case testing in your code.