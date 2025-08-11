import classData from '../db/classData.json';

interface Student {
    name: string;
    grades: number;   // nota única
}

interface ClassData {
    students: Student[];
    approvalGrade: number;
    classRoom?: any;
}

function getApprovedNames(students: Student[], approvalGrade: number): string[] {
    return students
        .filter(student => student.grades >= approvalGrade)
        .map(student => student.name);
}

const aprovados = getApprovedNames(classData.students, classData.approvalGrade);

console.log('Alunos Aprovados:', aprovados);

export { getApprovedNames, Student, ClassData };
