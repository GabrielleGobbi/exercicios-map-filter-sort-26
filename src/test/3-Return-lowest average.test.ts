import { getLowestGradeStudent } from '../implementacao/3-Return-lowest average';
import classData from '../db/classData.json';

describe('getLowestGradeStudent', () => {
  test('deve retornar o nome da aluna com menor nota', () => {
    const result = getLowestGradeStudent(classData.students);
    expect(result).toBe('Lucas'); // menor nota no JSON fornecido
  });

  test('deve retornar vazio se a lista estiver vazia', () => {
    const result = getLowestGradeStudent([]);
    expect(result).toBe('');
  });
});
