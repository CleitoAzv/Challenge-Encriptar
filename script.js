const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar () {
    const   textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar (stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i][0], matrizCodigo [i][1])
        }
    }


    return stringEncriptada
}

function btnDesencriptar () {
    const   textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i][1], matrizCodigo [i][0])
        }
    }


    return stringDesencriptada
}

function copiarTexto() {
    var texto = document.querySelector(".mensagem");
    texto.select();
    document.execCommand("copy");
  }

  function copiarTexto() {
    var texto = document.querySelector(".mensagem");
    texto.select();
    document.execCommand("copy");
    
    var botao = document.querySelector(".btn-copiar");
    botao.innerText = "Copiado";
    botao.classList.add("copiado");
    
    setTimeout(function() {
      botao.innerText = "Copiar";
      botao.classList.remove("copiado");
    }, 500);
  }
  