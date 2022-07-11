
let count = document.getElementById("people");
    console.log(count);
let initial = 0;

function increase() {
    initial ++;
    count.innerText = initial;
//Yaay
}

function decrease() {
    initial--;
    count.innerText= initial;
}

