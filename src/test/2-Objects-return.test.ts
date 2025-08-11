import classData from '../db/classData.json';

interface Student {
  name: string;
  grades: number; 
  approved: boolean;
}

interface ClassData {
  students: Student[];
  approvalGrade: number;
  classRom?: any;       
}

interface Resultado {
  nome: string;
  media: number;
  aprovada: boolean;
}

function calcularMediaEStatus(students: Student[], approvalGrade: number): Resultado[] {
  return students.map(student => {
    const media = student.grades;  // só um número mesmo
    const aprovada = media >= approvalGrade;
    return {
      nome: student.name,
      media: Number(media.toFixed(1)), 
      aprovada
    };
  });
}

const resultado = calcularMediaEStatus(classData.students, classData.approvalGrade);
console.log(resultado);

export { calcularMediaEStatus, Student, ClassData, Resultado };
