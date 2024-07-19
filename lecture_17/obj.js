// object


// empty object

// let data = {};

let data = {

    name: 'aman',
    age: 24,
    gender: 'male',
    marks: {
        state: 90,
        eng: 90,
        eco: 90,
    },
    hobbies: ['cricket', 'dance', 'music'],

}
// console.log(data);

/* 1.  dot (.) method to call object value */

// console.log(data.hobbies[0]); //cricket
// console.log(data.hobbies);
// console.log(data.marks);
// console.log(data.marks.eco); // 90


/* 2.  square ([ ]) method to call object value */

// console.log(data['name']);
// console.log(data['marks']['eco']); // 90
// console.log(data['hobbies'][1]); // dance


/* 3.  Expression method to call object value */

// let a = 'marks';
// console.log(data[a]);


// function prime(obj, sal) {
//     obj.salary = sal;
// }

// prime(data, 35000);
// console.log(data);

/* add new data */

// data.salary = 35000;
// console.log(data);

/* delete data */

// delete data.marks;
// console.log(data);  // marks delete


// Class

class hello {
    constructor(name, ag) {
        this.name = name;
        this.age = ag;
        this.gen = 'male';
    }

    world() {
        return `My name is : ${this.name} , age is : ${this.age} and gender is : ${this.gen}`;
    }
}

let as = new hello('bahubali', 34);

console.log(as.world());