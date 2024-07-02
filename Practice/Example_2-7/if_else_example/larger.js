// Find the larger of two number

{
    let a = prompt("Enter the number A ");
    let b = prompt("Enter the number B ");

    a = +a;
    b = +b;


    if (a && b) {
        if (a > b) {
            console.log(`Number ${a} is larger than ${b} `);
        }
        else {
            console.log(`Number ${b} is larger than ${a} `);
        }
    }
    else {
        console.log(`Invalid Input`)
    }
}