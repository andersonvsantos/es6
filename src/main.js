const alunos = [
    {
        nome: 'Anderson',
        nota: 4
    },
    {
        nome: 'Josiane',
        nota: 9
    },
    {
        nome: 'Matheus',
        nota: 2
    },
    {
        nome: 'Henrique',
        nota: 4
    },
    {
        nome: 'Maicon',
        nota: 10
    },
    {
        nome: 'Nataly',
        nota: 8
    }
]

function filtrarAlunos(alunos) {
    return alunos.nota >= 6
}

const alunosAprovados = alunos.filter(filtrarAlunos);

console.log(`Os alunos aprovados são ${alunosAprovados.map(aluno => aluno.nome).join(', ')}.`);