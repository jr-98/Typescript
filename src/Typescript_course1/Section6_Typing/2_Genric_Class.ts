class People<T> {
    name: string
    age: T

    // showName: (data: T) => T
}

let person1 = new People()
person1.name = 'Jonathan'
person1.age = 34
console.log(person1)