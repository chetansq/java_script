// javascript Break and Continue Statements

// break statement

// {
//     for (i = 0; i < 10; i++) {
//         if (i == 4) {
//             break;
//         }
//         console.log('break !');
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log("1", i);
// }

// for (let i = 2; i < 4; i++) {
//     if (i == 3) {
//         break;
//     }
//     console.log("i", i);
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

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("skip", i, "and continue");
//         continue;
//     }
//     console.log(" i ", i);
// }

// if(0.1 + 0.2 === 0.3)


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
{

    // for (i = 0; i < 10; i++) {
    //     if (i == 4) {
    //         break;
    //     }
    //     console.log('main loop!');

    //     for (i = 0; i < 4; i++) {
    //         if (i == 2) {
    //             break;
    //         }
    //         console.log('break !');
    //     }
    // }
}

// call back function

{
    // function sum(a, b, callback) {
    //     callback();
    //     return a + b;
    // }

    // function callback() {
    //     console.log(`This is callback Function`);
    // }

    // console.log(sum(20, 30, callback));        
}


// practice

{
    // function arr(a, b, callback) {
    //     callback();
    //     return a + b;
    // }

    // function callback() {
    //     console.log('callback is here !');
    // }

    // console.log(arr(10, 20, callback));



    // function str(a, b, Arr) {
    //     Arr();
    //     return a - b;
    // }

    // function Arr() {
    //     console.log("hello callback");
    // }

    // console.log(str(20, 10, Arr));
}

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

// practice

{
    // function arr(a, b) {
    //     function callback() {
    //         console.log("this is callback function");
    //     }

    //     callback();
    //     return a + b;
    // }

    // console.log(arr(10, 20));
}

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

// (
//     function () {
//         console.log("hello")
//     }
// )();

// const func = (() => console.log('IIFE'))()
// const func = (() => console.log('IIFE'))()  // single line function

// (function (name) {
//     console.log(name)
// }
// )('Hello World!')



/* JavaScript String Method */

/* string.prototypes */


/* Javascript string.trim() */ {
    // let str1 = '   This is javascript String Method!   '
    // //          123456789012345678901234567890123456789


    // console.log("Length of str : ", str1.length);

    // let string1 = str1.trim();

    // console.log("trim :", string1);

    // // trim left / trimStart()

    // let str2 = '   This is javascript String Method!   '
    // //          123456789012345678901234567890123456789

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


    // let char1 = str.charAt(-5); // print blank space
    // console.log("match", char1);
    // let char2 = str.charAt(3);
    // console.log(char2);
    // let char3 = str.charAt(5);
    // console.log(char3);
    // let char4 = str.charAt(25);
    // console.log(char4);
    // let char5 = str.charAt(30);
    // console.log(char5);


    // charCodeAt(index)  return integer between 0 to 65535, it's represent return ascii code

    // let str = '   This is javascript String Methods!   ';
    // //         1234567890123456789012345678901234567890


    // let char1 = str.charCodeAt(-11);
    // console.log(char1);
    // let char6 = str.charCodeAt(-1);
    // console.log(char6); // 32
    // let char2 = str.charCodeAt(3);
    // console.log(char2); // 84
    // let char3 = str.charCodeAt(5);
    // console.log(char3); // 105
    // let char4 = str.charCodeAt(25);
    // console.log(char4);// 105
    // let char5 = str.charCodeAt(30);
    // console.log(char5); // 101

}

// javascript string.at() 
// 
{
    // let str = 'hello javascript!'
    // //         01234567890123456 

    // let at1 = str.at(-10); //(-) sign hoy to last thi return kare
    // let at2 = str.at(0);
    // let at3 = str.at(-1); // last character return
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
    // //         0123456789012345678901234

    // let include1 = str.includes('s'); //true / --> it is search a keyword if keyword is get than return true aother false

    // console.log(include1);

    // let include2 = str.includes('s', 11);//fale // 11 is start index,ane ena pachi thi start thay search karvanu

    // let include3 = str.includes('a', 4); //flase
    // let include4 = str.includes(' ', 16); // true
    // let include5 = str.includes('!', 24); // true

    // console.log(include2);
    // console.log(include3);
    // console.log(include4);
    // console.log(include5);

}