function semRetorno(...args: string[]): void {
  console.log("Essa função não tem retorno");
  console.log(args);
}

semRetorno("argumento1", "argumento2");

const pessoa = {
  nome: "Jhean",
  idade: 21,
  isProgramador: true,

  exibirNome(): void {
    console.log(this.nome);
  },
};

pessoa.exibirNome();

export { pessoa };
