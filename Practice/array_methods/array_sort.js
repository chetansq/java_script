{

    let data = [];
    let num;


    function push_() {
        if (data == "") {

            num = prompt("Enter a data ..");
            data.push(num);
            // console.log(data);
            document.getElementById("arr").innerHTML = data;

        } else {
            num = prompt("Enter a data ..");
            data.push(num);
            // console.log(data);
            document.getElementById("arr").innerHTML = data;

        }
    }

    function pop_() {
        if (data == "") {

            alert("array is empty..");

        } else {
            data.pop();
            document.getElementById("arr").innerHTML = data;
            console.log(data);
        }
    }

    function unshift_() {
        if (data == " ") {

            num = prompt("Enter a data ..");
            data.unshift(num);
            document.getElementById("arr").innerHTML = data;
            console.log(data);

        } else {
            num = prompt("Enter a data ..");
            data.unshift(num);
            document.getElementById("arr").innerHTML = data;
            console.log(data);

        }
    }
    function shift_() {
        if (data == "") {

            alert("array is empty..");

        } else {
            data.shift();
            document.getElementById("arr").innerHTML = data;
            console.log(data);
        }
    }

    {
        function sort_() {
            if (data == "") {

                alert("array is empty..");

            } else {
                console.log(data.sort((a, b) => a - b));
                document.getElementById("arr").innerHTML = data;
                console.log(data);
            }
        }
    }
}

