// tipos primitivos
let nome: string = "Jhean";
let idade: number = 21;
let isProgramador: boolean = true;
let linguagemFavorita: string = "Python";
let simbolo: symbol = Symbol("id");

// tipos especiais
let nulo: null = null;
let indefinido: undefined = undefined;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ["um", "dois", "três"];
let arrayDeStrings2: string[] = ["um", "dois", "três"];

for (let numero of arrayDeNumeros) {
  console.log(numero);
}

// objetos
let pessoa: { nome: string; idade: number; isProgramador?: boolean } = {
  nome: "Jhean",
  idade: 21,
  isProgramador: true,
};

let pessoa2: Pessoa = {
  nome: "Maria",
  idade: 30,
};

interface Pessoa {
  nome: string;
  idade: number;
  isProgramador?: boolean;
}

// Funções
function potencializa(a: number, b: number): number {
  return (a ** a) ** (b ** b);
}

const result = potencializa(2, 3);
console.log(result);

const potencializa2: (a: number, b: number) => number = (a, b) => {
  return a ** a - (b ** b) ** ((a ** a) ** (b ** b));
};

console.log(potencializa2(2, 2));

// função sem retorno
function apresentar(
  nome: string,
  idade: number,
  isProgramador: boolean,
  linguagemFavorita: string,
  simbolo: symbol,
): void {
  console.log(`Olá, meu nome é ${nome}.`);
  console.log(`Tenho ${idade} anos.`);
  console.log(`Sou programador: ${isProgramador ? "Sim" : "Não"}.`);
  console.log(`Minha linguagem favorita é ${linguagemFavorita}.`);
  console.log(`Meu símbolo é ${simbolo.toString()}.`);
}

apresentar(nome, idade, isProgramador, linguagemFavorita, simbolo);
