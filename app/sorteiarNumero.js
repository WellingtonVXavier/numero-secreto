const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elemntoMenorValor = document.getElementById('menor-valor')
elemntoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

console.log('Número Secreto', numeroSecreto)