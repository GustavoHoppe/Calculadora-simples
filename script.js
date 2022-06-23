function somar() {
    let numero1 = document.getElementById('txtn1')
    let numero2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number (numero1.value)
    let n2 = Number (numero2.value)
    let sinal = document.getElementById('sinal')
    let sum = function (n1, n2) {
        res.innerHTML = (n1 + n2)
    }
    
    sum(n1, n2)
    sinal.innerHTML = '+'

}

function subtrair() {
    let numero1 = document.getElementById('txtn1')
    let numero2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number (numero1.value)
    let n2 = Number (numero2.value)
    let sinal = document.getElementById('sinal')
    let sub = function (n1, n2) {
        res.innerHTML = (n1 - n2)
    }

    sub(n1, n2)
    sinal.innerHTML = '-'

}

function multiplicar() {
    let numero1 = document.getElementById('txtn1')
    let numero2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number (numero1.value)
    let n2 = Number (numero2.value)
    let sinal = document.getElementById('sinal')
    let mult = function (n1, n2) {
        res.innerHTML = (n1 * n2)
    }

    mult(n1, n2)
    sinal.innerHTML = '*'

}

function dividir() {
    let numero1 = document.getElementById('txtn1')
    let numero2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number (numero1.value)
    let n2 = Number (numero2.value)
    let sinal = document.getElementById('sinal')
    let divi = function (n1, n2) {
        res.innerHTML = (n1 / n2)
    }

    divi(n1, n2)
    sinal.innerHTML = '/'

}
