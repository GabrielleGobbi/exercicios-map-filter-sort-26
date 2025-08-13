import classData from '../db/ClassData.json';

export interface Student {
  name: string;
  grades: number;   
}

export interface ClassData {
  students: Student[];
  approvalGrade: number;
}

export function getApprovedNames(students: Student[], approvalGrade: number): string[] {
  return students
    .filter(student => student.grades >= approvalGrade)
    .map(student => student.name);
}

console.log(getApprovedNames(classData.students, classData.approvalGrade));

export const approvedFromJson = getApprovedNames(classData.students, classData.approvalGrade);
