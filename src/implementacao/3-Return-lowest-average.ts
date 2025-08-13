import classData from '../db/ClassData.json';

export interface Student {
  name: string;
  grades: number;
  approved: boolean;
}

export interface Resultado {
  nome: string;
  media: number;
  aprovada: boolean;
}

export function getLowestGradeStudent(students: Student[]): string {
  if (students.length === 0) return '';

  let lowest = students[0];

  for (const student of students) {
    if (student.grades < lowest.grades) {
      lowest = student;
    }
  }

  return lowest.name;
}

export const lowestFromJson = getLowestGradeStudent(classData.students);
