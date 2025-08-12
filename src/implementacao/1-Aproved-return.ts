import classData from '../db/classData.json';

export interface Student {
  name: string;
  grades: number;   
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

export const approvedFromJson = getApprovedNames(classData.students, classData.approvalGrade);
