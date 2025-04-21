interface Peoples<T> {
    name_people: T
}
let persons: Peoples<string> = { name_people: 'Jonathan' }
console.log(persons)