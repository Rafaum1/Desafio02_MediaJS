let studentsName = prompt("Digite o nome do aluno: ");
let firstNote = prompt("Digite a nota da primeira prova: ");
let secondNote = prompt("Digite a nota da segunda prova: ");
let average = ((Number(firstNote) + Number(secondNote)) / 2);

if(average >= 7) {
    alert(`A média do(a) aluno(a) ${studentsName} é: ${average} 
    Parabéns, ${studentsName}! Você foi aprovado(a) no concurso!`)
} else{
    alert(`A média do(a) aluno(a) ${studentsName} é: ${average} 
    Não foi dessa vez, ${studentsName}! Tente novamente!`)
};