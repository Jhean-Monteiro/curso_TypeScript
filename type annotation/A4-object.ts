/*
explicando tudo sobre o objeto criado nesse arquivo:

1. Definição do Tipo do Objeto:
   O objeto 'objetoA' é definido com um tipo explícito que especifica três propriedades obrigatórias: 'chaveA', 'chaveB' e 'chaveC', todas do tipo string. Além disso, o uso de '[key: string]: unknown;' permite que o objeto tenha propriedades adicionais com chaves de qualquer nome (string) e valores de qualquer tipo (unknown).

2. Propriedades Obrigatórias:
   As propriedades 'chaveA', 'chaveB' e 'chaveC' são obrigatórias e devem ser fornecidas ao criar o objeto. No exemplo, elas são inicializadas com os valores "valorA", "valorB" e "valorC", respectivamente.

3. Modificação de Propriedades Existentes:
   O código demonstra a capacidade de modificar as propriedades existentes do objeto. As linhas 'objetoA.chaveA = "novoValorA";' e
*/

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC: string;
  [key: string]: unknown;
} = {
  chaveA: "valorA",
  chaveB: "valorB",
  chaveC: "valorC",
};

objetoA.chaveB = "novoValorB";
objetoA.chaveC = "novoValorC";
objetoA.chaveD = "novoValorD";
console.log(objetoA);
