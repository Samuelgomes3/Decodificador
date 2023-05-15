const digiteTexto = document.querySelector(".digiteTexto");
const botaoCriptografar = document.querySelector(".btn-criptografar")
const fundoSemTexto = document.querySelector(".fundo-sem-texto");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

console.log(digiteTexto);

function converteTexto(){
    const textoEncriptado = encriptar(digiteTexto.value);
    digiteTexto.value = "";
    fundoSemTexto.innerHTML = "<p>"+textoEncriptado+"</p>";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);            
        }
    }
    
    return stringEncriptada;
}

botaoCriptografar.onclick = converteTexto;