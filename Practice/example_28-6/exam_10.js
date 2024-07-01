//  Using Multiple Operators [4 types]

{

    let a = 10;
    let b = 12;
    let c = 14;
    let d = 14;

    let z1 = a + b / (c * d);
    let z2 = a == b || (c === d);
    let z3 = a + b === c % d;
    let z4 = (b - a) >= (c / d);

    console.log(z1);
    console.log(z2);
    console.log(z3);
    console.log(z4);
}