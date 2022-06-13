let button = document.getElementById("otpr");

button.addEventListener("click", check);

function check() {
    let result = 0;

    let a1 = document.getElementById("q1"). value
    if (a1 === "11") {
        result++
    }
    let a2 = document.getElementById("q2"). value
    if (a2 === "164") {
        result++
    }
    let a3 = document.getElementById("q3"). value
    if (a3 === "5") {
        result++
    }
    let a4 = document.getElementById("q4"). value
    if (a4 === "7") {
        result++
    }

    alert("kol-vo ballov: " + result)
}