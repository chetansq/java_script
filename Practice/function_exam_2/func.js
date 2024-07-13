// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

{
    // function reverse_num(a) {

    //     let b = "";

    //     a = a.toString();
    //     console.log(a);
    //     // console.log(typeof a);

    //     for (let i = a.length - 1; i >= 0; i--) {
    //         b += a[i];
    //     }

    //     console.log(b);
    // }

    // reverse_num(3554);
}

// 2. Write a JS function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

{
    // function letters(alpha) {
    //     let a = alpha.split("");

    //     // let b = a.sort().join("");
    //     let b = a.sort();
    //     let c = "";
    //     for (i = 0; i <= b.length - 1; i++) {
    //         if (i == ',') {
    //             continue;
    //         }
    //         c += b[i];

    //     }
    //     // let c = b.toString();
    //     console.log(c);

    // }

    // let string = prompt("Enter a string");

    // letters(string);
}

// 3. Write a JS function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'


{
    // function uppercase(letters) {

    //     let letter = letters.charAt().toUpperCase().slice(0) + letters.slice(1);
    //     console.log(letter);

    // }


    // let letters = prompt("Enter a string ");
    // uppercase(letters);

    //////////////////////////////////////////////

    // function uppercase(letters) {

    //     let letter = letters.split(" ");
    //     console.log(letter);

    //     for (let i = 0; i < letter.length; i++) {
    //         letter[i] = letter[i][0].toUpperCase() + letter[i].substring(1);
    //     }

    //     // console.log(letter);
    //     console.log(letter.join(""));
    // }


    // let letters = prompt("Enter a string ");
    // uppercase(letters);

    ////////////////////////////////////////

    // function upper_case(letters) {
    //     let letter = letters.split("");

    //     letter[0] = letter[0].toUpperCase();
    //     for (let i = 0; i < letter.length; i++) {
    //         if (letter[i] == " ") {
    //             i++;
    //             letter[i] = letter[i].toUpperCase();

    //         }
    //     }
    //     // let string = "";
    //     // for(let i = 0; i < letter.length; i++){
    //     //     string += letter[i];
    //     // }
    //     // console.log(string);
    //     console.log(letter.join(""))

    // }


    // let letters = prompt("Enter a String .");
    // upper_case(letters);
}

// 4. Write a JavaScript function that accepts a string
// as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


{
    function logest_word(longest) {
        let new_word = "";

        let word = longest.split(" ");
        console.log(word);
        for (let letter in word) {

            if (new_word.length < word.length) {
                new_word = word.length;
            }
        }

        console.log(new_word);
    }

    let string = prompt("Enter a string ");
    console.log(string);
}