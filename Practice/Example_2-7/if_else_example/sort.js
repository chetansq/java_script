// Sort three numbers

let a = prompt("Enter the number A ");
let b = prompt("Enter the number B ");
let c = prompt("Enter the number C ");

a = +a;
b = +b;
c = +c;
let sort;


console.log("before ", a, b, c);



if (a > c) {
    sort = a;
    a = c;
    c = sort;
}
if (b > c) {
    sort = c;
    c = b;
    b = sort;
}

if (a > b) {
    sort = b;
    b = a;
    a = sort;
}

console.log("after ", a, b, c);

