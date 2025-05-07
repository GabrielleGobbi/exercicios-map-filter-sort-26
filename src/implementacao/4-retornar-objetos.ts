import { Student } from "./types";


function classroom (students : Student[]) :void {
    students.map ((student) => { //percorre o array
        console.log(student.name); //imprime o nome de cada aluna
        console.log(student.grades); //imprime a nota de cada aluna
        console.log(student.approved);
    })
}

classroom([ 
  { name: "Ashley", grades: 7.1, approved: true }, 
  { name: "Sabrina", grades: 7.9, approved: true },
  { name: "Samantha", grades: 5.0, approved: false }
]);