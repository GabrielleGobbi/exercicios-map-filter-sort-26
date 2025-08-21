import { getApprovedNames } from '../src/implementacao/1-Aproved-return';
import classData from '../src/db/ClassData.json';

describe('getApprovedNames', () => {
  test('retorna apenas os nomes dos alunos aprovados', () => {
    const result = getApprovedNames(classData.students, classData.approvalGrade);
    expect(result).toEqual(['Ashley', 'Sabrina']);
  });

  test('retorna array vazio se nenhum aluno for aprovado', () => {
    const students = [
      { name: 'Aluno 1', grades: 5 },
      { name: 'Aluno 2', grades: 6 }
    ];
    const result = getApprovedNames(students, 7);
    expect(result).toEqual([]);
  });
});

export default test;