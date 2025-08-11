import classData from '../db/classData.json';

interface Student {
    name: string;
    grades: number;
    approved: boolean;
}

interface ClassData {
    students: Student[];
    approvalGrade: number;
    classRom: any;
}

function approved(students: Student[], approvalGrade: number): string[] {
    return students
        .filter(student => student.grades >= approvalGrade)
        .map(student => student.name);
}

// Execução da função para obter os aprovados e imprimi-los no console
const aprovados = approved(classData.students, classData.approvalGrade);

console.log('Alunos Aprovados:', aprovados);

describe('Aproved-returns', () => {
    test('Fazer uma função que retorne um array de nomes das aprovadas', () => {
        // Preparação dos dados
        const entrada: ClassData = classData;
        const esperado = ['Ashley', 'Sabrina'];

        // Verificação
        expect(aprovados).toEqual(esperado);
    });
});

export { approved, Student, ClassData };