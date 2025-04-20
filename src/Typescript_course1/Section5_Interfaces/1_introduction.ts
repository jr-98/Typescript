interface People {
    firstName: string
    lastname: string
}

function walking(people: People): void {
    console.log(`The people`, people.firstName + people.lastname)
}

let newPeople = { firstName: 'Jonathan Ricardo', lastname: " Tillaguango", edad: 45 }
walking(newPeople)