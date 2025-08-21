import { getLowestGradeStudent } from '../src/implementacao/3-Return-lowest-average';
import classData from '../src/db/ClassData.json';

describe('getLowestGradeStudent', () => {
  test('deve retornar o nome da aluna com menor nota', () => {
    const result = getLowestGradeStudent(classData.students);
    expect(result).toBe('Lucas'); 
  });

  test('deve retornar vazio se a lista estiver vazia', () => {
    const result = getLowestGradeStudent([]);
    expect(result).toBe('');
  });
});
export default test ;