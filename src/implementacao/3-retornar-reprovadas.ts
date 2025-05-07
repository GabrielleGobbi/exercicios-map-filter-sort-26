import { Students } from "./types";
import { classRom } from "./types";
import { approvalGrade } from "./types";

function disApproved(classRoom: Students): string[] {
    return classRoom.filter(student => ((student.prova.p1 + student.prova.p2 + student.prova.p3) / 3) < approvalGrade).map(student => student.nome);
}

console.log('Disapproved:', disApproved(classRom));
