import { Students } from "./types";
import { classRom } from "./types";


function bestGrade(classRoom: Students): string {
    return classRoom.map(student => ({nome: student.nome,media: ((student.prova.p1 + student.prova.p2 + student.prova.p3) / 3)})).sort((a, b) => b.media - a.media)[0].nome;
}
console.log('Best grade:', bestGrade(classRom));