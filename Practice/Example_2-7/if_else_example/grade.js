// Find the grade for input marks

{
    let state = prompt("Enter marks STATE ");
    let english = prompt("Enter marks ENGLISH ");
    let ac = prompt("Enter marks AC ");

    state = +state;
    english = +english;
    ac = +ac;
    let total = state + english + ac;
    let percentage = ((total * 100) / 300).toFixed(2);
    let grade;
    console.log(" STATE : ", state);
    console.log(" ENGLISH : ", english);
    console.log(" AC : ", ac);
    console.log(" TOTAL IS : ", total);
    console.log(" PERCENTAGE IS : ", percentage);

    if (percentage >= 90 && percentage <= 100) {
        grade = "GRADE A1";
    } else if (percentage >= 80 && percentage < 90) {
        grade = "GRADE A";
    } else if (percentage >= 70 && percentage < 80) {
        grade = "GRADE B";
    } else if (percentage >= 60 && percentage < 70) {
        grade = "GRADE C";
    } else if (percentage >= 50 && percentage < 60) {
        grade = "GRADE D";
    } else if (percentage >= 35 && percentage < 50) {
        grade = "GRADE E";
    } else {
        console.log("SORRY, FAIL !");
    }

    console.log(grade);


}