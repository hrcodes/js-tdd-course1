const produtos = [
  {
    nome: 'Notebook',
    preco: 2100
  },
  {
    nome: 'smartphone',
    preco: 400
  },
  {
    nome: 'carregador',
    preco: 100
  }
];
console.log(produtos);

// ==========================================================================
// MAP muda ou altera cada um dos valores de um array anterior

// Calculando o valor * 4 
const precosEmReais = produtos.map(p => p.preco * 4);
console.log(precosEmReais);

// Separando somente o preço
const soprecos = produtos.map(p => p.preco);
console.log(soprecos)

// Separando por nome 
const sonome = produtos.map(p => p.nome);
console.log(sonome)

// ==========================================================================
// REDUCE

// produtos.reduce((a, b) ) // tem 2 parametros de callback
// a = que é o valor zero e será acumulado para dar o resultado
// b = que é o valor de cada 'preco' no meu array

// produtos.reduce((a, b) => , 0) // recbe mais um parametro 0 no final
const total = produtos.reduce((a, b) => a + b.preco, 0); // Soma os valores
console.log(total);

// ==========================================================================
// COMBINACAO
// MAP
var arr_ConverterEmReais = produtos.map(item => item.preco * 5.06);
console.log(arr_ConverterEmReais);

// teste de arredondamento - funfou!
arr_ConverterEmReais = arr_ConverterEmReais.map(item => Number(item.toFixed(2)));
console.log(arr_ConverterEmReais);

//REDUCE
const arr_somaReais = arr_ConverterEmReais.reduce((acumulado, item) => acumulado += item, 0);
console.log(arr_somaReais);

// OS DOIS JUNTOS
const arr_totalReais = produtos
                            .map(item => item.preco * 5.06)
                            .reduce((acumulado, item) => acumulado += item, 0)
console.log(`Ambos :${arr_totalReais}`)