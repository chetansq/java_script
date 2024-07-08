// javascript BReak and Continue Statements

// break statement

// {
//     for (i = 0; i < 10; i++) {
//         if (i == 4) {
//             break;
//         }
//         console.log('break !');
//     }
// }

// continue statement

// {
//     for (i = 0; i < 10; i++) {
//         if (i == 4) {
//             continue;
//         }
//         console.log('continue !');
//     }
// }

// Nested loop

// {
//     for (i = 0; i < 10; i++) {
//         if (i == 4) {
//             break;
//         }
//         console.log('main loop!');

//         for (i = 0; i < 4; i++) {
//             if (i == 2) {
//                 break;
//             }
//             console.log('break !');
//         }
//     }
// }

// call back function

// {
//     function sum(a, b, callback) {
//         callback();
//         return a + b
//     }

//     function callback() {
//         console.log(`This is callback Function`);
//     }

//     console.log(sum(20, 30, callback));
// }

// {
//     function sum(a, b) {
//         function callback() {
//             console.log(`This is callback Function`);
//         }
//         callback()
//         return a + b
//     }

//     console.log(sum(20, 30));
// }

// {
//     function sum(a, b) {
//         return (
//             function call() {
//                 console.log(`This is callback function`);
//             }

//             callback(); // not valid
//         a + b
//         )
//     }
//     console.log(sum(20, 30));
// }

/* IIFE */

// (
//     function () {
//         console.log('Hello IIFE')
//     }
// )()

// const func = (() => console.log('IIFE'))()

// (function (name) {
//     console.log(name)
// }
// )('Hello World!')



/* JavaScript String Method */

/* string.prototypes */


/* Javascript string.trim() */


{
    // let str1 = '   This is javascript String Method!   '
    // //         1234567890123456789012345678901234567890


    // console.log("Length of str : ", str1.length);

    // let string1 = str1.trim();

    // console.log("trim :", string1);

    // // trim left / trimStart()

    // let str2 = '   This is javascript String Method!   '
    // //          1234567890123456789012345678901234567890

    // let string2 = str2.trimStart();

    // console.log("trimStart :", string2);

    // // trim right / trimEnd()

    // let str3 = '   This is javascript String Methods!   '
    // //          1234567890123456789012345678901234567890

    // let string3 = str2.trimEnd();

    // console.log("trimEnd :", string3);
}



/* JAvascript String.charAt() / string.charcodeAt() Method */

// charAt(index)
// charCodeAt(index)

{
    let str = '   This is javascript String Methods!   '
    //         1234567890123456789012345678901234567890


    let char1 = str.charAt(-11);
    console.log(char1);
    let char2 = str.charAt(3);
    console.log(char2);
    let char3 = str.charAt(5);
    console.log(char3);
    let char4 = str.charAt(25);
    console.log(char4);
    let char5 = str.charAt(30);
    console.log(char5);

}
