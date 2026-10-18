# Exercise 1: Six Broken Snippets

## 1. Greeting
- **Error type:** ReferenceError(A ReferenceError happens when JavaScript tries to use a name it can’t find, such as a variable that was never declared.)
- **Meaning:** JavaScript is looking for `studentname`, but the declared variable is `studentName`. 
- JavaScript is case sensitive so `studentName` and `studentname` are treated as different variable names.
- Only `studentName` was declared.
- **Fix:** `console.log("Welcome, " + studentName)`

## 2. Shouting
- **Error type:** TypeError(A TypeError happens when JavaScript tries to use a value in a way that value doesn’t support. In this example, it tries to call a string method that doesn’t exist.)
- **Meaning:** `toUppercase()` is not the correct string method name.
- **Fix:** `console.log(city.toUpperCase())`

3. Page title
Error type: TypeError
Meaning: The selector doesn’t find an element, so title is null. JavaScript can’t change the text of something that wasn’t found.
Fix: const title = document.querySelector("#page-title")

Snippet 4: Score counter
- Error type: TypeError
- Simple meaning: The code tries to change score, but const means its value can’t be reassigned.
- Fix: Change const score = 0 to let score = 0.
  
