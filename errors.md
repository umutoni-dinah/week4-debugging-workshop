# Exercise 1: Six Broken Snippets

## 1. Greeting
- **Error type:** ReferenceError
- **Meaning:** JavaScript is looking for `studentname`, but the declared variable is `studentName`. 
- JavaScript is case sensitive so `studentName` and `studentname` are treated as different variable names.
- Only `studentName` was declared.
- **Fix:** `console.log("Welcome, " + studentName)`
