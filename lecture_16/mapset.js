
/* MAP METHODS */

{
    // // let data = new Map(); 
    // let data = new Map([
    //     ['hello', 10],
    //     ['world', 20],
    //     ['hel', 30],
    //     ["hell", 40]
    // ]);

    // console.log(data);

    // // set() method --> You can add elements to a Map with the set() method
    // //              -->used to change existing Map values..

    // data.set('a', 110);
    // data.set('b', 10);

    // console.log(data);

    // // size method --> The size property returns the number of elements in a map.

    // console.log(data.size); // 6

    // // get() method -->  gets the value of a key in a Map

    // console.log(data.get('a'));

    // // delete() method --> The delete() method removes a map element.

    // data.delete('a');
    // console.log(data); // return all data without 'a'

    // // console.log(data.delete('a')); // its return true


    // // entries() method --> returns an iterator object with the [key,values] in a map

    // console.log("entries", data.entries());


    // // has() method --> The has() method returns true if a key exists in a map.

    // console.log(data.has('b')); // true
    // console.log(data.has('a')); // false

    // // clear() method -->
    // // console.log(data.clear()); // it is all data are clear 


    // // forEach() method --> 

    // let a = "";

    // data.forEach((val, key) => {
    //     a += key + " " + val + "\n";
    // });

    // console.log(a);
}

/* SET METHODS */

{
    // // it is array

    // let data = new Set([10, 20, 30, 40, 50, 'world']);

    // console.log(data);

    // // add() method --> If you add equal elements, only the first will be saved.

    // data.add(31);
    // data.add(30); // only first time element add

    // console.log(data);

    // console.log(data.size); // 6

    // // values() method --> returns an Iterator object with the values in a Set

    // console.log(data.values()); // 

    // // has() method --> he has() method returns true if a specified value exists in a set.

    // console.log(data.has(10)); // true
    // // console.log(data.has("World")); // false  it not a small case wolrd diffrence World

    // console.log("entries", data.entries());

    // // delete() method -->  delete data

    // data.delete(20);
    // console.log(data);

    // // data.clear();
    // // console.log(data);

    // let a = "";

    // data.forEach((val) => {
    //     a += val + "\n";
    // });

    // console.log(a);

}

// Deep Copy

{
    // let data = [10, 20, 30, 40, 50, 60, 70];

    // let add = [...data];

    // data.pop();

    // console.log(data);
    // console.log(add);
}

// Shallow Copy
{
    let data = [10, 20, 30, 40, 50, 60, 70];

    let add = data;

    data.pop();

    // console.log(data);
    // console.log(add);

}