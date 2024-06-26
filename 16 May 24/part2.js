"use strict";
/* Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
You are tasked with creating a student grading system. Implement functions and logic to
manage student grades effectively. */
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
    {
        name: 'Zunairah',
        grades: [70, 80, 85, 65, 70]
    },
    {
        name: 'Musfirah',
        grades: [80, 70, 65, 65, 58]
    },
    {
        name: 'Hajirah',
        grades: [82, 78, 76, 92, 80]
    }
];
function avgGrades(students) {
    for (const student of students) {
        let average = 0;
        for (const grade of student.grades) {
            average += grade / student.grades.length;
        }
        console.log(`${student.name}'s total grade sum: ${average}`);
    }
}
;
avgGrades(students);
