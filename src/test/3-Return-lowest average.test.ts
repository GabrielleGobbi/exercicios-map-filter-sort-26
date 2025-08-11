import classData from '../db/classData.json';

interface Student {
  name: string;
  grades: number;
  approved: boolean;
}

interface Resultado {
  nome: string;
  media: number;
  aprovada: boolean;
}

const calcularMediaEStatus = (students: Student[], approvalGrade: number): Resultado[] =>
  students.map(({ name, grades }) => ({
    nome: name,
    media: Number(grades.toFixed(1)),
    aprovada: grades >= approvalGrade
  }));

const alunosReprovados = (students: Student[], approvalGrade: number) =>
  students
    .filter(({ grades }) => grades < approvalGrade)
    .map(({ name, grades }) => ({ nome: name, nota: grades }));

// Uso:
console.log("Alunos Reprovados:", alunosReprovados(classData.students, classData.approvalGrade));

export { calcularMediaEStatus, alunosReprovados, Student };
