const numeros = [];

function adicionarNumero() {
    const numero = parseInt(document.getElementById("numeroInput").value);
    if (numero >= 1 && numero <= 100) {
        numeros.push(numero);
    } else {
        alert("Insira um número entre 1 e 100.");
    }
}

function calcularEstatisticas() {
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / numeros.length;

    const resultado = `Maior número: ${maior}<br>
                       Menor número: ${menor}<br>
                       Soma dos valores: ${soma}<br>
                       Média dos valores: ${media.toFixed(2)}<br>
                       Quantidade de elementos: ${numeros.length}`;

    document.getElementById("resultado").innerHTML = resultado;
}