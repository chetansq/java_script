// Write a program that prints the first 10 numbers in the Fibonacci sequence

{
    let a = 0, b = 1, c;

    for (let i = 0; i <= 10; i++) {

        console.log(a);
        c = a;
        a += b;
        b = c;
    }

}