let operacao = false;
let operador = "";
let numero1 = "";
let numero2 = "";

function digit(digito) {
    if (isNaN(digito) == true) {
        atualizaOperacao(" " + digito + " ");
        return
    }

    if (operacao == true) {
        numero2 += digito;
    } else {
        numero1 += digito;
    }
    atualizarDisplay();
}

function atualizaOperacao(digito) {
    operacao = true;
    operador = digito;
    atualizarDisplay()
}

function atualizarDisplay () {
    document.getElementById("result").value = numero1 + operador + numero2;
}

function addFloat() {
    if (operacao) {
        if (!numero2.includes(".")) {
            numero2 += ".";
        }
    } else {
        if (!numero1.includes(".")) {
            numero1 += ".";
        }
    }
    atualizarDisplay();
}

function clearAll() {
    numero1 = "";
    numero2 = "";
    operacao = false;
    operador = "";
    atualizarDisplay();
}

function equals() {
    if (numero1[numero1.length-1] === ".") {
        numero1.replace(".","")
    }

    if (numero2[numero2.length-1] === ".") {
        numero2.replace(".","")
    }

    switch (operador) {
    
        case " + ":
            aux = Number(numero1) + Number(numero2)
            clearAll()
            numero1 = aux
            atualizarDisplay()
            break;
    
        case " - ":
            aux = Number(numero1) - Number(numero2)
            clearAll()
            numero1 = aux
            atualizarDisplay()
            break;

        case " x ":
            aux = Number(numero1) * Number(numero2)
            clearAll()
            numero1 = aux
            atualizarDisplay()
            break;
    
        case " / ":
            aux = Number(numero1) / Number(numero2)
            clearAll()
            numero1 = aux
            atualizarDisplay()
            break;
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.code
    console.log(key)
  
    switch (key) {
        case 'KeyX':
            digit("x")
            break
        case 'NumpadMultiply':
            digit("x")
            break
        case 'NumpadDivide':
            digit("/")
            break
        case 'NumpadSubtract':
            digit("-")
            break
        case 'NumpadAdd':
            digit("-")
            break
        case 'Equal':
            equals()
            break
        case 'NumpadEnter':
            equals()
            break
        case 'Enter':
            equals()
            break
        case 'Period':
            addFloat()
            break
        case 'Backspace':
            clearAll()
            break
        case 'Numpad1':
            digit("1")
            break
        case 'Numpad2':
            digit("2")
            break
        case 'Numpad3':
            digit("3")
            break
        case 'Numpad4':
            digit("4")
            break
        case 'Numpad5':
            digit("5")
            break
        case 'Numpad6':
            digit("6")
            break
        case 'Numpad7':
            digit("7")
            break
        case 'Numpad8':
            digit("8")
            break
        case 'Numpad9':
            digit("9")
            break
        case 'Digit1':
            digit("1")
            break
        case 'Digit2':
            digit("2")
            break
        case 'Digit3':
            digit("3")
            break
        case 'Digit4':
            digit("4")
            break
        case 'Digit5':
            digit("5")
            break
        case 'Digit6':
            digit("6")
            break
        case 'Digit7':
            digit("7")
            break
        case 'Digit8':
            digit("8")
            break
        case 'Digit9':
            digit("9")
            break
        case 'Digit0':
            digit("0")
            break
        case 'Numpad0':
            digit("0")
            break
    }
});
