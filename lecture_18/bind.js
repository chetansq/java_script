// Call Method

{// let data = {
    //     hello: function () {
    //         return `${this.name}, ${this.age} age in ${this.city}`;
    //     }
    // }

    // let data1 = {
    //     name: 'virat kohli',
    //     age: 35,
    //     city: 'Mumbai'
    // };
    // console.log(data.hello.call(data1));

    // with parameter

    // let data = {
    //     hello: function (city) {
    //         return `${this.name}, ${this.age} age in ${city} `;
    //     }
    // }

    // let data1 = {
    //     name: 'virat kohli',
    //     age: 35
    // };

    // console.log(data.hello.call(data1, "mumbai"));
}

// Apply method

{// let data = {
    //     hello: function () {
    //         return `${this.name}, ${this.age} age in ${this.city}`;
    //     }
    // }

    // let data1 = {
    //     name: 'virat kohli',
    //     age: 35,
    //     city: 'Mumbai'
    // };
    // console.log(data.hello.apply(data1));


    // let data = {
    //     hello: function (city) {
    //         return `${this.name} arrive in ${city} `;
    //     }
    // }

    // let data1 = {
    //     name: 'virat kohli',
    //     age: 35,
    //     city: 'Mumbai'
    // };
    // console.log(data.hello.apply(data1, ['surat']));
}

// Bind Method
{

    let data = {
        name: 'rohit sharma',
        age: 35,

        hello: function (city) {
            return `${this.name}, ${this.age} age in ${city}`;
        }
    }

    let data1 = {
        name: 'virat kohli',
        age: 34,
        city: 'Mumbai'
    };
    console.log(data.hello.bind(data1, 'surat')());
}