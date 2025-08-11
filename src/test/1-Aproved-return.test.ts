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
export { approved, Student, ClassData };