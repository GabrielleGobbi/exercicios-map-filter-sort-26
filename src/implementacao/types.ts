export type Student ={
    name : string;
    grades : number;
    approved : boolean;
};

export const students: Student[] = [
    { name: "Ashley", grades: 7.1, approved: true }, 
    { name: "Sabrina", grades: 7.9, approved: true },
    { name: "Samantha", grades: 5.0, approved: false }
];

export type Students = {
    nome: string,
    prova: {
        p1: number,
        p2: number,
        p3: number
    }
}[]

export const approvalGrade = 7;

export const classRom : Students = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
    { nome: "Samantha", prova: { p1: 7, p2: 5, p3: 4 } },
]