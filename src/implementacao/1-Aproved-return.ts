import classData from '../db/classData.json';

export interface Student {
  name: string;
  grades: number;   // nota única
}

export interface ClassData {
  students: Student[];
  approvalGrade: number;
  classRoom?: string;
}

export function getApprovedNames(students: Student[], approvalGrade: number): string[] {
  return students
    .filter(student => student.grades >= approvalGrade)
    .map(student => student.name);
}

// Exportando resultado direto do JSON (opcional)
export const approvedFromJson = getApprovedNames(classData.students, classData.approvalGrade);
