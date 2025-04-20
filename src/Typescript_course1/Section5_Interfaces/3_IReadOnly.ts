interface Student {
    name: string;
    lastname: string;
    course: string;
    readonly institution: string;
}
function registerStudent(student: Student): any {
    console.log(`${student.institution}`)
    console.log(`The student, ${student.lastname} ${student.name} was succesfull register`)
}

registerStudent({ name: 'Jonathan', lastname: 'Tillaguango', course: "1A", institution: 'Mons Luis' })