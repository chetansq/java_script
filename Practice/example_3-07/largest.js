//  Write a program that finds the largest number in an array

{
    // let array = [2, 10, 5, 50, 100, 40, 1];

    // for (let i in array) {
    //     console.log(array[i]) // value of array on index number
    //     console.log(i) //only index number
    // }

    // for (let i of array) {

    //     console.log(array[i]) // array[i] is index number count, array[2] = 5 , array[2] is index number
    //     // console.log(i) //print value
    // }

    let array = [2, 10, 5, 50, 100, 40, 10];
    let a = -4;
    for (let i of array) {

        if (a < i) {
            a = i;
        }
    }
    console.log(a);


}