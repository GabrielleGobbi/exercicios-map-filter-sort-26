import { Students } from "./types";
import { classRom } from "./types";

function averageGrade(classRoom: Students): number {
    return classRoom.reduce((sum, student) => sum + ((student.prova.p1 + student.prova.p2 + student.prova.p3) / 3), 0) / classRoom.length;
}
 console.log('Average grade:', averageGrade(classRom)); 