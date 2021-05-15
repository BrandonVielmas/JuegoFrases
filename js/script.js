function iniciar() {

var frases = ["frase0","frase1","frase2","frase3","frase4","frase5",
"frase6","frase7"];

var aleatorio = Math.floor((Math.random() * 8));
console.log(frases[aleatorio]);

document.getElementById("frase-txt").innerHTML = frases[aleatorio];


}

//window.addEventListener("load", iniciar);