import classData from '../db/classData.json';

export interface Student {
  name: string;
  grades: number; 
  approved: boolean;
}

export interface ClassData {
  students: Student[];
  approvalGrade: number;
  classRom?: string;       
}

export interface Resultado {
  nome: string;
  media: number;
  aprovada: boolean;
}

export function calcularMediaEStatus(students: Student[], approvalGrade: number): Resultado[] {
  return students.map(student => {
    const media = student.grades; // já é a nota única
    const aprovada = media >= approvalGrade;
    return {
      nome: student.name,
      media: Number(media.toFixed(1)),
      aprovada
    };
  });
}

// Opcional: já gera a partir do JSON
export const resultadoFromJson = calcularMediaEStatus(classData.students, classData.approvalGrade);
