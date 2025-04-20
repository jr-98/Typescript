interface People {
    name: string;
    lastName: string;
    age?: number;
}

function displayPerson(people: People): any {
    console.log(`The person is ${people.name} ${people.lastName} ${people.age ? 'has ' + people.age + ' years old.' : '.'}`)
}

let person1 = { name: 'Jonathan', lastName: 'Tillaguango' }
displayPerson(person1)
let person2 = { name: 'Jonathan', lastName: 'Tillaguango', age: 26 }
displayPerson(person2)