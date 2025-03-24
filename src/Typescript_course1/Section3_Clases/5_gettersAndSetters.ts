class People {
    public name: string
    constructor(_name: string) {
        this.name = _name
    }
    // Getter
    get getName(): string {
        return this.name
    }
    // Setter
    set setNombre(name: string) {
        this.name = name
    }
}
const person = new People('Jonathan')
console.log(person.getName)