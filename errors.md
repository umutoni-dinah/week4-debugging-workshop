# Exercise 1: Six Broken Snippets

## 1. Greeting
- **Error type:** Reference Error(A Reference Error happens when JavaScript tries to use a name it can’t find, such as a variable that was never declared.)
- **Meaning:** JavaScript is looking for `studentname`, but the declared variable is `studentName`. 
- JavaScript is case sensitive so `studentName` and `studentname` are treated as different variable names.
- Only `studentName` was declared.
- **Fix:** `console.log("Welcome, " + studentName)`

## 2. Shouting
- **Error type:** Type Error(A Type Error happens when JavaScript tries to use a value in a way that value doesn’t support. In this example, it tries to call a string method that doesn’t exist.)
- **Meaning:** `toUppercase()` is not the correct string method name.
- **Fix:** `console.log(city.toUpperCase())`

3. Page title
Error type: Type Error
Meaning: The selector doesn’t find an element, so title is null.
JavaScript can’t change the text of something that wasn’t found.
Fix: const title = document.querySelector("#page-title")

 4: Score counter
- Error type: Type Error
- Meaning: The code tries to change score, but const means its value can’t be reassigned.
- Fix: Change const score = 0 to let score = 0.
  
5: Shopping list
- Error type: Syntax Error
- Meaning: JavaScript can’t read the array because there’s no comma between "avocado" and "banana".
- each item in an array has to be separated by a comma that is the syntax
- Fix: const fruits = ["mango", "avocado", "banana"]

6: Countdown
- Error type: Range Error
- Meaning: The function keeps calling itself without stopping, until JavaScript runs out of space for function calls.
- Fix: function countdown(n) {
  if (n < 1) return
  console.log(n)
  countdown(n - 1)
}
