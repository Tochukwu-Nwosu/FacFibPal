// Factorial Function
function factorial (n) {
    if (n === 0 || n === 1) {
        return 1
    }
    else {
        return n * factorial (n-1)
    }
}


// Testing Factorial Function
console.log(factorial(3))
console.log(factorial(10))


// Fibonacci Function
function fibonacci (n) {
    if (n === 0) {
        return 0
    }
    else {
        return n + fibonacci (n-1)
    }
}


// Testing Fibonacci Function
console.log(fibonacci(3))
console.log(fibonacci(10))


// Palindrome Function
// Create a function strReverse() that reverse a string and call it in the palindrome function

function strReverse (str) {
    reversedString = ""

    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }
    return reversedString
}

function palindrome (str) {
    if (str == strReverse(str)) {
        return "A palindrome"
    }
    else {
        return "Not a palindrome"
    }
}


// Testing Palindrome Function
console.log(palindrome("Hello"))
console.log(palindrome("Mum"))     // Fix this
console.log(palindrome("mum"))
console.log(palindrome("110011"))