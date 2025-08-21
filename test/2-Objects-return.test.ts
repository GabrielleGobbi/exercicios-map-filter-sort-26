import { calcularMediaEStatus } from '../src/implementacao/2-Objects-return';
import classData from '../src/db/ClassData.json';

describe('calcularMediaEStatus', () => {
  test('deve calcular a média e status de aprovação corretamente', () => {
    const result = calcularMediaEStatus(classData.students, classData.approvalGrade);

    expect(result).toEqual([
      { nome: 'Ashley', media: 8.0, aprovada: true },
      { nome: 'Sabrina', media: 9.0, aprovada: true },
      { nome: 'Lucas', media: 6.0, aprovada: false }
    ]);
  });

  test('deve retornar todas como reprovadas se a nota de corte for alta', () => {
    const result = calcularMediaEStatus(classData.students, 10);

    expect(result).toEqual([
      { nome: 'Ashley', media: 8.0, aprovada: false },
      { nome: 'Sabrina', media: 9.0, aprovada: false },
      { nome: 'Lucas', media: 6.0, aprovada: false }
    ]);
  });
});
export default test ;