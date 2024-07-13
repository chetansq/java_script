// 1. Write a program to convert temperatures between Celsius and Fahrenheit.

{
    //     function convert(c) {
    //         let Fahrenheit = (c * 9 / 5) + 32
    //         return Fahrenheit;

    //     }
    //     let a = (convert(32))

    //     console.log(a);
}




// 2. Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division.
{
    // (
    //     function (a, b) {
    //         console.log(a + b);
    //     }
    // )(10, 20);

    // (
    //     function (a, b) {
    //         console.log(a - b);
    //     }
    // )(10, 20);
    // (
    //     function (a, b) {
    //         console.log(a * b);
    //     }
    // )(10, 20);
    // (
    //     function (a, b) {
    //         console.log(a / b);
    //     }
    // )(10, 20);

}

// 3. Write a program to find the largest of three numbers.

{
    // function largest(a, b, c) {
    //     if (a > b || a > c) {
    //         return a;
    //     }
    //     else if (b > c) {
    //         return b;
    //     }
    //     else {
    //         return c;
    //     }
    // }

    // let a = largest(10, 400, 50);
    // console.log(a);
}

// 4. Write a program to find the factorial of a given number.

{
    // function factorial(a) {
    //     let b = 1;
    //     for (let i = 1; i <= a; i++) {

    //         b *= i;

    //     }
    //     console.log(b);

    // }

    // let a = prompt("enter ther number..");
    // factorial(a);
}

// 5. Write a program to print the first n terms of the Fibonacci sequence.

{
    // function fibomnacci(a, b) {

    //     let c;

    //     let d = prompt("Enter Number .. ");

    //     for (let i = 0; i <= d; i++) {

    //         console.log(a);
    //         c = a;
    //         a += b;
    //         b = c;
    //     }
    // }

    // fibomnacci(0, 1);
}

// 6. Write a program to reverse a given string.

{
    // function reverse(str) {

    //     let a = "";
    //     // console.log(typeof (a));

    //     for (let i = str.length - 1; i >= 0; i--) {
    //         a += str[i];
    //     }

    //     console.log(a);
    // }

    // let str = prompt("enter a string");
    // reverse(str);
}


// 7. Write a program to check if a string is a palindrome.

{
    // function palindrome(str) {

    //     let a = "";
    //     // console.log(typeof (a));

    //     for (let i = str.length - 1; i >= 0; i--) {
    //         a += str[i];
    //     }

    //     if (a == str) {
    //         console.log("YES");

    //     } else {
    //         console.log("NO");

    //     }


    // }

    // let str = prompt("enter a string");
    // palindrome(str);
}

// 8. Write a program to find the sum of the first n natural numbers.

{
    // function natural(num) {
    //     let sum = 0;

    //     for (let i = 1; i <= num; i++) {
    //         sum += i;
    //     }

    //     console.log(sum);
    // }

    // let num = prompt("Enter the number");

    // natural(num);
}

// 9. Write a simple guessing game where the user has to guess a number between 1 and 10.

{


    // function random_num(num) {

    //     let a = Math.floor(Math.random() * 100);
    //     console.log(a);

    //     if (a == num) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    // let num = prompt("enter a number ");

    // let number = random_num(num);

    // console.log(number);


}

// 10. Write a program to count the number of vowels and consonants in a given string.

{
    // function vowels(word) {
    //     let a = "";
    //     for (let i of word) {
    //         if (i == 'a' || i == "e" || i == "i" || i == "o" || i == "u") {
    //             console.log(i);
    //         }
    //         else {
    //             a += i;
    //         }
    //     }
    //     console.log(a.length);
    // }

    // let string = prompt("enter a string ");
    // vowels(string);
}

// 11. Write a program to check if a year is a leap year or not.

{
    // function leap(year) {
    //     if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
    //         console.log("leap year !")
    //     }
    //     else {
    //         console.log("not leap year");
    //     }
    // }

    // let y = prompt("enter a year");

    // leap(y); 
}


// practice
{

    // function fibonacci(n) {
    //     let a = 0, b = 1, c;

    //     for (let i = 0; i <= n; i++) {
    //         console.log(a);
    //         c = a;
    //         a = a + b;
    //         b = c;
    //     }
    // }

    // fibonacci(5);

}


{
    // function reverse_string() {
    //     let store = "";
    //     for (let i = str.length - 1; i >= 0; i--) {
    //         store += str[i];
    //     }
    //     console.log(store);
    // }



    // let str = prompt("Enter a string..");
    // reverse_string(str);
}

{
    // function palindrome(str) {

    //     let store = "";

    //     for (let i = str.length - 1; i >= 0; i--) {
    //         store += str[i];
    //     }

    //     console.log(store);

    //     if (str == store) {

    //         return true;
    //     }
    //     else {

    //         return false;
    //     }
    // }

    // let str = prompt("enter a string..");
    // let string = palindrome(str);
    // console.log(string);
}
