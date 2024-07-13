// high order function
// function as object

{
    // function sumAllNumber() {
    //     let total = 0;

    //     for (let i = 0; i < arguments.length; i++) {
    //         total += arguments[i];
    //     }

    //     return total;
    //     // return arguments[0]; // particular index
    //     // return arguments[3]; // particular index

    // }

    // console.log(sumAllNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}

// rest Parameter (...)
{
    // function world(...args) { // any name oyu can set on (...args)/ (...a)/(...name)..etc.
    //     return args;
    // };

    // console.log(world(1, 2, 3, 4, 5, 56.5, 12)); // it is store in array
    // // console.log(world(1)); // it is store in array
}

// Generator 
{
    // function* generator_fun() {
    //     yield 1;
    //     yield 3;
    //     yield 4;
    //     yield "World";
    //     yield 4;
    //     yield "Hello";
    //     return "Thank you";
    //     // yield "Hello"; // it is not work after return

    // }

    // let data = generator_fun();

    // console.log(data.next().value);
    // console.log(data.next().value);
    // console.log(data.next().value);
    // console.log(data.next().value);
    // console.log(data.next().value);
    // console.log(data.next().value);
}

// this keyword


{
    // let person = {
    //     firstName: "Rohit",
    //     lastName: "Sharma",
    //     age: 35,
    //     hobbies: ['cricket', 'Dance', 'Music'],

    //     test: function () {
    //         console.log(`player Info : ${this.firstName} ${this.lastName}.
    //             his age is ${this.age} years old. and his hobbies is ${this.hobbies[0]}.`);

    //     },
    // }
    // person.test();
}