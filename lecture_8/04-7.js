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
    // charAt(index)

    // let str = '   This is javascript String Methods!   '
    // //         1234567890123456789012345678901234567890


    // let char1 = str.charAt(-11);
    // console.log(char1);
    // let char2 = str.charAt(3);
    // console.log(char2);
    // let char3 = str.charAt(5);
    // console.log(char3);
    // let char4 = str.charAt(25);
    // console.log(char4);
    // let char5 = str.charAt(30);
    // console.log(char5);


    // charCodeAt(index)  return integer between 0 to 65535 ,it's represent return ascii code

    // let str = '   This is javascript String Methods!   '
    // //         1234567890123456789012345678901234567890


    // let char1 = str.charCodeAt(-11);
    // console.log(char1);
    // let char2 = str.charCodeAt(3);
    // console.log(char2);
    // let char3 = str.charCodeAt(5);
    // console.log(char3);
    // let char4 = str.charCodeAt(25);
    // console.log(char4);
    // let char5 = str.charCodeAt(30);
    // console.log(char5);

}

// javascript string.at() 
// 
{
    // let str = 'hello javascript!'
    // //         01234567890123456 

    // let at1 = str.at(-10);
    // let at2 = str.at(0);
    // let at3 = str.at(-1);
    // let at4 = str.at(4);

    // console.log(at1);
    // console.log(at2);
    // console.log(at3);
    // console.log(at4);
}

/* javascript string.includes() Method */

// the includes() method of string values perform a case-sensitive

// includes(searchString)
// includes(searchString, position)

{
    // let str = 'javasript string include!'
    //         0123456789012345678901234

    // let include1 = str.includes('s');

    // console.log(include1);

    // let include2 = str.includes('s',11);
    // let include3 = str.includes('a',4);
    // let include4 = str.includes(' ',16);
    // let include5 = str.includes('!',24);

    // console.log(include2);
    // console.log(include3);
    // console.log(include4);
    // console.log(include5);

}