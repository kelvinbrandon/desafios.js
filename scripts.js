// =====================================
// DESAFIO 1 — Função simples com parâmetro
// =====================================
function hospicio(nomeDeLouco) {
    console.log("Bem-vindo ao hospício, " + nomeDeLouco + "!");
}

let nomeDeLouco = "KELVIN";
hospicio(nomeDeLouco);


// =====================================
// DESAFIO 2 — Função com return
// =====================================
function soma(a, b) {
    return a + b;
}

console.log(soma(12, 8));


// =====================================
// DESAFIO 3 — Função anônima
// =====================================
let somaAnonima = function(a, b) {
    return a + b;
};

console.log(somaAnonima(10, 20));


// =====================================
// DESAFIO 4 — Função sem parâmetros
// =====================================
function mostrarHora() {
    console.log(new Date());
}

mostrarHora();


// =====================================
// DESAFIO 5 — Verificar idade
// =====================================
function podeDirigir(idade) {
    if (idade >= 18) {
        return "pode dirigir";
    } else {
        return "não pode dirigir";
    }
}

console.log(podeDirigir(20));


// =====================================
// DESAFIO 6 — Maior número
// =====================================
function maiorNumero(a, b) {
    if (a > b) return a;
    if (a < b) return b;
    return "os dois são iguais";
}

console.log(maiorNumero(30, 10));


// =====================================
// DESAFIO 7 — Par ou Ímpar
// =====================================
function ehPar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(ehPar(31));


// =====================================
// DESAFIO 8 — Mensagem personalizada
// =====================================
function mensagemPersonalizada(nome, idade) {
    return `Olá ${nome}, você tem ${idade} anos.`;
}

console.log(mensagemPersonalizada("Kelvin", 29));


// =====================================
// DESAFIO 9 — Calcular desconto
// =====================================
function calcularDesconto(preco, desconto) {
    let valorDesconto = preco * desconto / 100;
    return preco - valorDesconto;
}

console.log(calcularDesconto(100, 10));


// =====================================
// DESAFIO 10 — Listar nomes (array + for)
// =====================================
function listarNomes(nomes) {
    let frase = "Nomes: ";

    for (let i = 0; i < nomes.length; i++) {
        frase += nomes[i];

        if (i < nomes.length - 1) {
            frase += ", ";
        }
    }

    return frase;
}

let lista = ["Ana", "João", "Kelvin"];
console.log(listarNomes(lista));
