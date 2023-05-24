function verificaValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>valor invalido</div>`
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}