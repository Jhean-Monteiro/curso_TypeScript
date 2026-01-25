// Array para guardar os alunos
let alunos: string[] = [];

// Função para adicionar um aluno
function adicionarAluno(nome: string): void {
    alunos.push(nome);
    console.log(`Aluno ${nome} adicionado.`);
}

// Função para listar todos os alunos
function listarAlunos(): void {
    console.log("Lista de alunos:");
    for (let i = 0; i < alunos.length; i++) {
        console.log(`${i + 1} - ${alunos[i]}`);
    }
}

// Função para remover um aluno pelo nome
function removerAluno(nome: string): void {
    let indice = alunos.indexOf(nome);

    if (indice === -1) {
        console.log("Aluno não encontrado.");
    } else {
        alunos.splice(indice, 1);
        console.log(`Aluno ${nome} removido.`);
    }
}

// Programa principal
adicionarAluno("Ana");
adicionarAluno("Bruno");
adicionarAluno("Carlos");
adicionarAluno("Daniela");

listarAlunos();

removerAluno("Bruno");

listarAlunos();
