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

const alunosAprovados = alunos.reduce((acumulador, estudante) => {
    if(estudante.nota >= 6) {
        acumulador += `${estudante.nome} `
    }
    return acumulador;
}, '');

console.log(`Os alunos aprovados são ${alunosAprovados}`);