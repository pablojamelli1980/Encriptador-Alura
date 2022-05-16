const entrada1 = document.querySelector(".entrada");
const mensaje = document.querySelector(".salida");
const switcher = document.querySelector('.bton');


function btnencriptar(){
    const tencriptado = encriptar(entrada1.value);
    mensaje.value = tencriptado;
}


function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if (StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function limpiarPeticion(){
    document.getElementById("enter").value = "";
}

function btnDesencriptar(){
    const tdesencriptado = desencriptar(entrada1.value);
    mensaje.value = tdesencriptado;
}
function desencriptar(StringParaEncriptado){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptado = StringParaEncriptado.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if (StringParaEncriptado.includes(matrizCodigo[i][0])){
            StringParaEncriptado = StringParaEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    
    }
    return StringParaEncriptado;
    
}
function copiar() {

    let  texto = document.getElementById('out');
    let  texto1 = document.getElementById('enter');
    copiar
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
   
    texto1.select();
    texto1.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});