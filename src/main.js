const turno = document.getElementById("turno");

// JavaScript version of: (unsigned)
// printf "%0*d" width num
function leftFillNum(numero, targetLength) {
    return numero.toString().padStart(targetLength, "0");
}

var num = 1;

function ponerNumero(){
    if (num < 10) {
        console.log(leftFillNum(num, 2)); // "03", no 3
        turno.innerText = leftFillNum(num, 2);
    } else {
        console.log(num); // 53, no "053"
        turno.innerText = num;
    }
}
ponerNumero();

function siguiente(){
    if (num < 99){
        num = parseInt(num) + 1;
        ponerNumero();
    }
}

function anterior(){
    if (num > 0){
        num = parseInt(num) - 1;
        ponerNumero();
    }
}

function reset(){
    num = 0;
    ponerNumero();
}

function turnoInput(valor){
    if (num > 0 && num < 99){
        num = parseInt(valor);
        ponerNumero();
    }
}