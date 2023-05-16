const digiteTexto = document.querySelector(".digiteTexto");
const fundoSemTexto = document.querySelector(".fundo-sem-texto");
const botaoCriptografar = document.querySelector(".btn-criptografar");
const botaoDesencriptografar = document.querySelector(".btn-descriptografar");
const botaoCopiar = document.querySelector(".copiar");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(digiteTexto.value);
    digiteTexto.value = "";
    fundoSemTexto.innerHTML = "<p class='texto'>"+textoEncriptado+"</p>";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(digiteTexto.value);
    digiteTexto.value = "";
    fundoSemTexto.innerHTML = "<p class='texto'>"+textoDesencriptado+"</p>";
    textoCopiado = textoDesencriptado
}

function btnCopiar() {
    var textoParaCopiar = document.querySelector(".texto").textContent;
    navigator.clipboard.writeText(textoParaCopiar);
    
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

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);            
        }
    }
    
    return stringDesencriptada;
}

botaoCriptografar.onclick = btnEncriptar;
botaoDesencriptografar.onclick = btnDesencriptar;
botaoCopiar.onclick = btnCopiar;