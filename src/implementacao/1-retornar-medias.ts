import { Students } from "./types";
import { classRom } from "./types";

function average(classRoom: Students): number[] {
    return classRoom.map(student => (student.prova.p1 + student.prova.p2 + student.prova.p3) / 3);
}
console.log("Average:", average(classRom));