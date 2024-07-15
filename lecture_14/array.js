// array --> Similar data store in one variable

// [size] --> declare array size

// let data = []; --> empty array
// let data = ["4", 'f'];

// let data = new Array('hello', 'Hello', 'new', 'News');

// property -> length
// console.log(data);
// console.log(data.length); // 4
// console.log(Array.isArray(data)); // true

/* Methods */

// push() --> insert into last index

{
    // let data = ['1', '2', '3', '3', '4', '4', '4', '5'];

    // console.log(data);
    // data.push(50, 40);
    // console.log(data);

}

// pop() --> delete into last index

{
    // let data = ['1', '2', '3', '3', '4', '4', '4', '5'];
    // let data = [11, 12, 13, 14, 16];

    // console.log(data);
    // data.pop();
    // data.pop();
    // console.log(data);

}

// unshift() --> insert into first index

{
    // let data = [11, 12, 13, 14, 16];

    // console.log(data);

    // let a = 111;

    // data.unshift(0);
    // data.unshift(a, 10, 20,);
    // console.log(data);
}


// shift() --> delete into first index
{
    // let data = [11, 12, 13, 14, 16];

    // console.log(data);


    // data.shift();
    // data.shift();

    // console.log(data);
}

// splice(start,removeCount,...add)
{
    // let data = [11, 12, 13, 14, 15, 16,];
    // data.splice(2, 0, 500, 600, 700, 800);
    // console.log(data);
}


// sort() 

{
    // let data = [11, 12, 130, 14, 150, 16, 10];

    // data.sort() // char data sorting



    // console.log(data.sort((a, b)=> a - b));
    // console.log(data.sort((a, b)=> b - a));
    // console.log(data.slice(1,5));

    // let data = ['hello','weord','sdf','asdsf'];
    // console.log(data.reverse());
}

// concat() --> merge array
{
    // let data = [11, 12, 13, 14, 15, 16];

    // let a = [10, 20];
    // console.log(data.concat(a));
    // console.log(data.concat(111, 222, 'a', 'b', a))
}

// include => check if element is exit or not
{

    // let data = [11, 12, 13, 14, 15, 16];
    // console.log(data.includes(50)); // false
    // console.log(data.includes(15)); // true
}

// max()

{
//     let data = [11, 22, 33, 44, 55, 66, 77,];

//     const max = (a) => {
//         return Math.max.apply(null, a);
//     }
//     const min = (a) => {
//         return Math.min.apply(null, a);
//     }

//     console.log(max(data));
//     console.log(min(data));
}